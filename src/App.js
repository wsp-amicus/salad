import React, { Component } from 'react';
import Axios from 'axios'
import './App.css';
import Home from './components/Home'
import Footer from './components/Footer'
import NavBar from './components/Nav'

class App extends Component {
  componentDidMount() {
    Axios.get('/test').then((res) => console.log(res.data))
  }

  render() {
    return (
      <div>
        {/* Router */}
        <NavBar />
        {/* Footer */}
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
