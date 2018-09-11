import React, { Component } from 'react';
import Axios from 'axios'
import './App.css';
import Nav from './components/Nav'

class App extends Component {
  componentDidMount() {
    Axios.get('/test').then((res) => console.log(res.data))
  }

  render() {
    return (
      <div>
        {/* Router */}
        <Nav />
        {/* Footer */}
      </div>
    );
  }
}

export default App;
