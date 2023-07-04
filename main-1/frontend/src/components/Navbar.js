import React from 'react'
import '../static/styles/Navbar.css'
import { Link } from 'react-router-dom'
//import Arena from './components/arena/Arena';
// NavBar Component which is always displayed
function Navbar({ logged, setUser }) {

    // navComp will be initialized by conditionally rendering by checking if user is logged in or not.
    let navComp;
    if (logged !== true) {
        // If the user is not logged in, it displays register and contact nav items
        navComp = (
            <div className="links">
                <Link to="/register" style={{ textDecoration: "none", color: "lightcyan" }} >
                    <h4 id="reg">Register</h4>
                </Link>
            </div>
        )
    }
    else {
        // If the user is logged in, it displays logout nav item
        navComp = (
            <div className="links">
                <Link to="/" style={{ textDecoration: "none", color: "lightcyan" }}>
                    <h4 id="reg" onClick={() => setUser()}>Logout</h4>
                </Link>
            </div>
        )
        
    }
    let titleComp = logged ? "Home" : ""
    return (
        <header>
            <div className="title">
                <h1> Unplugg .</h1>
            </div>
            {navComp}
        </header>
    )
}
export default Navbar
