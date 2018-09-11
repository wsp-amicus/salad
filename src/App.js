import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Axios from 'axios'
import './App.css';
import NotFound from './components/NotFound'
import Home from './components/Home'
import Footer from './components/Footer'
import NavBar from './components/Nav'
import Register from './components/users/Register'
import Login from './components/users/Login'

class App extends Component {
  componentDidMount() {
    // test api
    Axios.get('/test').then((res) => console.log(res.data))
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />

            {/* Users */}
            <Route path="/users/register" component={Register} />
            <Route path="/users/login" component={Login} />

            {/* 404 not found */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
