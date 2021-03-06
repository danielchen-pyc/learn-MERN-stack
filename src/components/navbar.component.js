import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"


export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                <div className="collapse navbar-collapse">
                    <div className="navbar-item">
                        <Link to="/" className="nav-link">Exercises</Link>
                    </div>
                    <div className="navbar-item">
                        <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    </div>
                    <div className="navbar-item">
                        <Link to="/user" className="nav-link">Create User</Link>
                    </div>
                </div>
            </nav>
        );
    };
};