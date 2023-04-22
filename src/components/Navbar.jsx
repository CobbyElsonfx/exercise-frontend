import React from 'react'
import {Link  } from "react-router-dom";

function Navbar() {
    return (
        <header className="bg-white">
            <div className="container">
            <Link  to="/">
                <h1><img src="../../fitness.svg" alt="" /></h1>
            </Link>
            <p className=" relative">  <span className="text-md">User</span>  <img className="absolute -top-1 right-10" src="../../user.svg" alt="" /></p>
        </div>
        </header>
        
    )
}

export default Navbar
