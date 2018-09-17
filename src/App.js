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
import Cookies  from 'js-cookie'

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
    if(uid) {
      Axios.post('/users/verification', {
        uid: uid
      }).then((res)=> {
        this.setState({user: {
          uid: uid,
          username: res.data.username
        }})
      }).catch((error) => console.log(error))
    } else {
      this.setState({user: null})
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar user={this.state.user} />
          <div className="main">
            <Switch>
              <Route exact path="/" component={() => <Home height={this.state.height} />} />

              {/* Users */}
              <Route path="/users/register" component={Register} />
              <Route path="/users/login" component={ () => <Login verifyLogin={this.verifyLogin} />} />
              <Route path='/users/logout' component={ () => <Logout verifyLogin={this.verifyLogin} />} />

              {/* 404 not found */}
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
          <Copyright />
        </div>
      </Router>
    );
  }
}

export default App;
