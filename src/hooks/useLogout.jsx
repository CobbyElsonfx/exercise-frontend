import React from 'react'
import {useAuthContext} from "../hooks/useAuthContext"

function useLogout() {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const logout = () =>{
     localStorage.removeItem("user")
     //set the user state to null
     dispatch({type:"LOGOUT"})

    }

    return {logout,error,isLoading}
}

export default useLogout
