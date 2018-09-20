import React, { Component } from 'react'
import axios from 'axios'

export class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        console.log("Mounted");
        axios.get('/users/index').then((res) => {
            this.setState({users: res.data})
        }).catch((err) => console.log(err))
    }

    render() {
        const users = this.state.users.map((user,key) => {
            return <tr key={`user-${key}`}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.username}</td>
                        <td>{user.permission}</td>
                        <td>Edit</td>
                    </tr>
        })
        return (
        <div className="panel panel-primary">
            <div className="panel-heading">
            <span>
                User
            </span>
            </div>
            {
                (this.state.users) ? 
                <div className="panel-body">
                    List all the user
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Firstname</th>
                                <th scope="col">Lastname</th> 
                                <th scope="col">Username</th>
                                <th scope="col">Permission</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users}
                        </tbody>
                    </table>
                </div>
                :
                <div>
                    loading
                </div>
            }
            
        </div>
        )
    }
}

export default User
