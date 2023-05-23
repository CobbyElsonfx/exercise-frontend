import React from 'react'
import {useState}  from "react"
import {useAuthContext} from "../hooks/useAuthContext"
import {useWorkoutContext} from "../hooks/useWorkoutContext"

function useLogout() {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const {dispatch:workoutDispatch} = useWorkoutContext()

    const logout = () =>{
     localStorage.removeItem("user")
     //set the user stat to null
     dispatch({type:"LOGOUT"})
    //  workoutDispatch({type:"DELETE_WORKOUT", payload:null})
    }

    return {logout}
}

export default useLogout
