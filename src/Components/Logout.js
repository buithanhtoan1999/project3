import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Logout extends Component {
    render() {
        return (
            <div>
                <h1>You have been logout!!</h1>
                <Link to="/login">Login Again</Link>
            </div>
        )
    }
}
