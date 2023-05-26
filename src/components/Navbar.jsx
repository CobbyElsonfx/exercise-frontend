import React from 'react'
import {Link  } from "react-router-dom";
import  {useAuthContext} from "../hooks/useAuthContext"
import useLogout from "../hooks/useLogout"

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
            <nav className="flex justify-end space-x-3 ">
                {user && (
                    <div className="flex flex-row space-x-3">
                    <span className="hidden sm:block">{user.email}</span>
                    <button className="text-white p-2 rounded-md bg-primary  transition ease-in-out duration-0 hover:duration-700  " onClick={handleClick} >Logout</button>
                    {/* <p className=" relative">  <span className="text-md"></span>  <img className="absolute -top-1 right-10 " src="../../user.svg" alt="" /></p> */}
                    </div>    
                )}
                {!user && (
                    <div className="px-10 space-x-2">
                    <Link to="/login" className="text-white p-2 rounded-md bg-primary  hover:underline px-1 transition  transition-all ">
                        Login
                    </Link>
                    <Link to="/signup" className="text-white p-2 rounded-md bg-primary  transition transition-all">
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
