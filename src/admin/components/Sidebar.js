import React, { Component } from 'react'
import MetisMenu from 'react-metismenu';
import RouterLink from 'react-metismenu-router-link';
import 'react-metismenu/dist/react-metismenu-standart.min.css'

const content = [
  {
    icon: 'tachometer-alt',
    label: 'Dashboard',
    to: '/admin',
  },
  {
    icon: 'user',
    label: 'User',
    content: [
      {
        icon: 'plus',
        label: 'user',
        to: '/admin/users',
      },
    ],
  },
  {
      icon: 'shopping-basket',
      label: 'Product',
      to: '/admin/products'
  }
];

export class Sidebar extends Component {
  render() {
    return (
        <div><MetisMenu content={content} LinkComponent={RouterLink} activeLinkFromLocation/></div>
    )
  }
}

export default Sidebar
