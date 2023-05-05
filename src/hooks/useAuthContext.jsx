import {AuthContext} from "../context/WorkoutContext"
import {useContext} from "react"

export const  useAuthContext = () =>{
    const context = useContext(AuthtContext)
    if(!context){
        throw Error("Must be used inside and AuthContext Provider")
    }
     
    return context

}