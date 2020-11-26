import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Admin extends Component {
    render() {
        return (
            <div>
                <h1>This is Admin Page</h1>
                <Link to="/Logout">Logout</Link>
            </div>
        )
    }
}

