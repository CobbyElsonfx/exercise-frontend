import {React,useState} from 'react'
import {useAuthContext} from "../hooks/useAuthContext"
function useLogin() {
    const {dispatch}  = useAuthContext()
    const [error,setError] =  useState(null)
    const [isLoading,setIsLoading] = useState(null)

    const login= async (email,password,username) => {
      console.log("login function triggerd")
        setError(null)
        try {
            const user = ({email,password,username})
            console.log(user)
            const res = await fetch("http://localhost:5050/api/user/login",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(user)
              })
            console.log(res)
            const  data = await res.json()
            if(res.ok){
                localStorage.setItem("user",JSON.stringify(data))
                dispatch({type:"LOGIN" , payload: data})
              }

            
        } catch (error) {
             console.log(error)
             setError(error)

        }
    

    }

    return {error,isLoading,login}
    
}

export default useLogin
