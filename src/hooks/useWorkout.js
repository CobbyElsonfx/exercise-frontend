import {WorkoutContext} from "../context/WorkoutContext"
import {useContext} from "react"

//call this function anytime we want to consume the context
export const  useWorkoutContext = () =>{
    const context = useContext(WorkoutContext)
    //throw and error if the context is been used outisde the
    if(!context){
        throw Error("Wokout context can not be used outside workoutContextProvider")
    }
     
    return context

}