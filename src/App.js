import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Axios from 'axios'
import './App.css';
import NotFound from './components/NotFound'
import Home from './components/Home'
import Footer from './components/Footer'
import NavBar from './components/Nav'

class App extends Component {
  componentDidMount() {
    Axios.get('/test').then((res) => console.log(res.data))
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
