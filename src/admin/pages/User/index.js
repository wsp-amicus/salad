import React, { Component } from 'react'
import SortableTbl from 'react-sort-search-table'
import axios from 'axios'
import { Link } from 'react-router-dom'

const tHead = [
    "First name",
    "Last name",
    "Username",
    "Permission",
    "Action"
]

const col = [
    "firstName",
    "lastName",
    "username",
    "permission",
    "action"
]

class Action extends Component {
    constructor(props) {
		super(props)
		this.editItem = this.editItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
	}
    editItem() {
		console.log(this.props.rowData)
	}
    deleteItem() {
        console.log(this.props.rowData)
    }
    render() {
        return (<td>
                    <Link to={`/admin/users/edit?_id=${this.props.rowData._id}`}><button className="btn btn-warning">Edit</button></Link>
                    <button className="btn btn-danger" onClick={this.deleteItem}>Delete</button>
                </td>)
    }
}

export class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get('/users/index').then((res) => {
            this.setState({users: res.data})
        }).catch((err) => console.log(err))
    }

    render() {
        return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <span>
                    User
                </span>
            </div>
            <div className="panel-body">
                <SortableTbl tblData={this.state.users}
                    tHead={tHead}
                    customTd={[
                            {custd: Action, keyItem: "action"},
                    ]}
                    dKey={col}
                    search
                    defaultCSS
                />
            </div>
        </div>
        )
    }
}

export default User
