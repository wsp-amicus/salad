import React, { Component } from 'react';
import Axios from 'axios'
import './Layout.css';

class Layout extends Component {
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

export default Layout;
