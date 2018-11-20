import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Axios from 'axios'
import './styles/App.css'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Footer from './components/Footer'
import NavBar from './components/navbar'
import Register from './components/users/Register'
import Login from './components/users/Login'
import Logout from './components/users/Logout'
import Copyright from './components/Copyright'
import adminRoutes from './admin/routes'
import Admin from './admin/Index'
import Loading from './components/Loading'
import Cookies from 'js-cookie'
import Custom from './components/Custom'
import Checkout from './components/checkout/Checkout'
import Menu from './components/menu/Menu'
import Manage from './components/users/Manage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { height: 0, width: 0, loaded: false }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.verifyLogin = this.verifyLogin.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)

    // test api
    Axios.get('/test').then(res => console.log(res.data))

    this.verifyLogin()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    if (this.state.height === 0) this.setState({ height: window.innerHeight })
    if (this.state.width === 0) this.setState({ width: window.innerWidth })
  }

  async verifyLogin() {
    try {
      const uid = Cookies.get('amicus-salad-uid')
      if (uid) {
        await Axios.post('/users/verification', {
          uid: uid
        })
          .then(res => {
            this.setState({
              user: res.data
            })
          })
          .catch(error => console.log(error))
      } else {
        this.setState({ user: null })
      }
    } finally {
      this.setState({ loaded: true })
    }
  }

  render() {
    const adminRoute = adminRoutes.map((item, id) => {
      let component = null
      if (!this.state.loaded) {
        // loading user or user is not log-in
        component = Loading
      } else if (!this.state.user) {
        // user is not log in redirect to login
        component = () => <Login verifyLogin={this.verifyLogin} />
      } else if (this.state.user.permission < item.permission) {
        // permission deny couldn't open page
        component = NotFound
      } else {
        // you have authourize to access page
        component = () => <Admin user={this.state.user}>{item.component}</Admin>
      }
      return (
        <Route
          key={`${id}-router`}
          exact={item.exact}
          path={item.path}
          component={component}
        />
      )
    })
    return (
      <Router>
        <div>
          {window.location.pathname.includes('/admin') ? null : (
            <NavBar user={this.state.user} width={this.state.width} />
          )}
          <div
            className={`${
              window.location.pathname.includes('/admin') ? '' : 'main'
              }`}
          >
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Home height={this.state.height} />}
              />

              <Route path="/custom" component={Custom} />

              <Route path="/menu" component={Menu} />

              <Route path="/checkout" component={Checkout} />

              {/* Users */}
              <Route path="/users/register" component={Register} />
              <Route
                path="/users/login"
                component={() => <Login verifyLogin={this.verifyLogin} />}
              />
              <Route
                path="/users/logout"
                component={() => <Logout verifyLogin={this.verifyLogin} />}
              />
              <Route path="/users/manage" component={Manage} />

              {/* Admin */}
              {adminRoute}

              {/* 404 not found */}
              <Route component={NotFound} />
            </Switch>
          </div>
          {window.location.pathname.includes('/admin') ? null : (
            <div>
              <Footer />
              <Copyright />
            </div>
          )}
        </div>
      </Router>
    )
  }
}

export default App
