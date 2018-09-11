import React, { Component } from 'react';
import Axios from 'axios'
import './App.css';

class App extends Component {
  componentDidMount() {
    Axios.get('/test').then((res) => console.log(res.data))
  }

  render() {
    return (
      <div>
        {/* Router */}
        {/* Navigator Bar */}
        {/* Footer */}
      </div>
    );
  }
}

export default App;
