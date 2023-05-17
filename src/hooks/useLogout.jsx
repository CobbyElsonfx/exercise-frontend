import React from 'react'
import {useState}  from "react"
import {useAuthContext} from "../hooks/useAuthContext"

function useLogout() {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const logout = () =>{
     localStorage.removeItem("user")
     //set the user stat to null
     dispatch({type:"LOGOUT"})

    }

    return {logout}
}

export default useLogout
