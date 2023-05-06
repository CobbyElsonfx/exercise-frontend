import React from 'react'
import {Link  } from "react-router-dom";
import  {useAuthContext} from "../hooks/useAuthContext"
import {useLogout} from "../hooks/useLogout"

function Navbar() {
    const {user} = useAuthContext()
    const {logout} = useLogout()
     
    const handleClick = async ()=>{
        const res = await logout()
    
    }



    return (
        <header className="bg-white">
            <div className="container">
            <Link  to="/">
                <h1><img src="../../fitness.svg" alt="" /></h1>
            </Link>
            <nav className="flex justify-end space-x-3">
                {user && (
                    <div>
                    <button onClick={handlClick} >Logout</button>
                    <p className=" relative">  <span className="text-md">User</span>  <img className="absolute -top-1 right-10" src="../../user.svg" alt="" /></p>
                    </div>    
                )}
                {!user && (
                    <div className="px-10">
                    <Link to="/login">
                        Login
                    </Link>
                    <Link to="/signup">
                        Signup
                    </Link>
                </div>
                )}
                
                
                
            </nav>
        </div>
        </header>
        
    )
}

export default Navbar
