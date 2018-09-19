import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Axios from 'axios'
import './styles/App.css';
import NotFound from './components/NotFound'
import Home from './components/Home'
import Footer from './components/Footer'
import NavBar from './components/Nav'
import Register from './components/users/Register'
import Login from './components/users/Login'
import Logout from './components/users/Logout'
import Copyright from './components/Copyright'
import adminRoutes from './admin/routes'
import Admin from './admin/Index'
import Cookies from 'js-cookie'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.verifyLogin = this.verifyLogin.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions)

    // test api
    Axios.get('/test').then((res) => console.log(res.data))

    this.verifyLogin()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    if (this.state.height === 0)
      this.setState({ height: window.innerHeight });
  }

  verifyLogin() {
    const uid = Cookies.get('amicus-salad-uid')
    if (uid) {
      Axios.post('/users/verification', {
        uid: uid
      }).then((res) => {
        this.setState({
          user: {
            uid: uid,
            username: res.data.username
          }
        })
      }).catch((error) => console.log(error))
    } else {
      this.setState({ user: null })
    }
  }

  render() {
    // const body = document.body
    // const height = Math.max(body.scrollHeight, body.offsetHeight)
    // console.log(this.state.height - height)
    // const remainSpace = this.state.height < height ? this.state.height - height - 190 : ''
    const adminRoute = adminRoutes.map((item, id) => {
      return <Route key={`${id}-router`} exact path={item.path} component={() => <Admin>{item.component}</Admin>} />
    })
    return (
      <Router>
        <div>
          {window.location.pathname.includes('/admin') ?
            null
            :
            <NavBar user={this.state.user} />
          }
          <div className={`${window.location.pathname.includes('/admin') ? '' : 'main'}`}>
            <Switch>
              <Route exact path="/" component={() => <Home height={this.state.height} />} />

              {/* Users */}
              <Route path="/users/register" component={Register} />
              <Route path="/users/login" component={() => <Login verifyLogin={this.verifyLogin} />} />
              <Route path='/users/logout' component={() => <Logout verifyLogin={this.verifyLogin} />} />

              {/* Admin */}
              {adminRoute}

              {/* 404 not found */}
              <Route component={NotFound} />
            </Switch>
          </div>
          {
            window.location.pathname.includes('/admin') ?
              null
              :
              <div>
                <Footer />
                <Copyright />
              </div>
          }
        </div>
      </Router >
    );
  }
}

export default App;
