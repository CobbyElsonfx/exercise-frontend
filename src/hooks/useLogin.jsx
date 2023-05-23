import {React,useState} from 'react'
import {useAuthContext} from "../hooks/useAuthContext"
function useLogin() {
    const {dispatch}  = useAuthContext()
    const [error,setError] =  useState(null)
    const [isLoading,setIsLoading] = useState(null)
    
    const login = async (email,password) => {
        setError(null)
        try {
            const user = ({email,password})
            const res = await fetch("https://backend-exercise-tracker-wtnx.onrender.com/api/user/login",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(user)
              })

            const  data = await res.json()

            if(res.ok){
                console.log("Data for post", data)
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
