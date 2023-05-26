import {React,useState} from 'react'
import {useAuthContext} from "../hooks/useAuthContext"

function useSignup() {
    const {dispatch}  = useAuthContext()
    const [error,setError] =  useState(null)
    const [isLoading,setIsLoading] = useState(null)
  


    const signup = async (email,password,username) =>{
        setError(null)
        const  apiUrl = process.env.REACT_APP_API_URL


        try {
            const user = ({email,password,username})
            const res = await fetch(`${apiUrl}/api/user/signup`,{
            method:"POST",
            headers: {
              "Content-Type":"application/json"},
            body:JSON.stringify(user)
              })

            const  data = await res.json()
            if(res.ok){
                localStorage.setItem("user",JSON.stringify(data))
                dispatch({type:"SIGNUP" , payload: data})
              }

            
        } catch (error) {
             setError(error)

        }
    

    }

    return {error,isLoading,signup}
    
}

export default useSignup

