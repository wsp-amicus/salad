import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Sidebar extends Component {
  render() {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="active">
                        <Link to='/admin'>
                            <i className="fa fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="header">HEADER</li>
                    <li className="treeview">
                        <a>
                            <i className="fa fa-user"></i>
                            <span>User</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><Link to='/admin/users'>User</Link></li>
                        </ul>
                    </li>

                    <li className="active">
                        <a>
                            <i className="fa fa-link"></i>
                            <span>Link</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <i className="fa fa-link"></i>
                            <span>Another Link</span>
                        </a>
                    </li>
                    <li className="treeview">
                        <a>
                            <i className="fa fa-link"></i>
                            <span>Multilevel</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a>Link in level 2</a></li>
                            <li><a>Link in level 2</a></li>
                        </ul>
                    </li>
                </ul>
            </section>
        </aside>
    )
  }
}

export default Sidebar
