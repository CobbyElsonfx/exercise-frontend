import React from 'react'
import {useState} from "react"
//import the authContext to enable us dispatch an action to update the gobal state variable user
import {useAuthContext} from "../hooks/useAuthContext"

export function useSignup() {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    

    const signup = async function(email,password,username){
        console.log(email,password,username)
        setError(null)
        setIsLoading(true)

        console.log("before posting")
        const res = await fetch("https//localhost:5050/api/user/signup" , {
            method:"POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify({email,password,username})
        })
        console.log(res, "here is theresponse")
    
        const data = await res.json()
        console.log(data,"the data")
    
        // if(!data.ok){
        //     setError(data.error)
        //     setIsLoading(false)
        // }
    
        // if(data.ok){
        //     //convert to string before storing it in local storage
        //     localStorage.setItem("user",JSON.stringify({data}))
        //     dispatch({type:"SIGNUP" , payload: data})
        // }
    }

    return    {error,isLoading,signup} 

    
}
