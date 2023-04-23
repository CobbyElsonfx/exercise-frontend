import React from 'react'
import {useState}  from  "react"
import {useWorkoutContext} from "../hooks/useWorkout"







const Forms = () =>{
 const {dispatch} = useWorkoutContext()

 const [title, setworkTitle] = useState("")
 const [load, setworkoutLoad] = useState("")
 const [reps, setworkoutReps] = useState("")
 const [errors, setErrors] = useState(null)
 

 
 const handleForm = async (ev) =>{
    ev.preventDefault()


    const workout = {title,load,reps}
    
   // fetch the data from the backend server
    const response = await fetch("https://backend-exercise-tracker-wtnx.onrender.com/api/workouts" , {
        method:"POST",
        body: JSON.stringify(workout),
        headers:{
            "Content-Type":"application/json"
        }
    })
     
     //parse data to json format

    const  data = await response.json()
    //check if data is okay 
    // this error is comming from the response for the post  controller in the workout.js file in the controllers
    if(!response.ok){
        setErrors(data.error)
    }

    if(response.ok){
        setErrors(null)
        setworkTitle("")
        setworkoutLoad("")
        setworkoutReps("")
        dispatch({type:"CREATE_WORKOUT", payload: data})
    }
    
 }
 
 


    return (
        
            <form  className="create" onSubmit ={handleForm} >
                <h3 className="font-semibold text-white text-center py-4">Add Workout</h3>
                
                    <label htmlFor="title" className="text-white">Exercise's Type</label>
                    {/* Listen to onchange event in the form and set the value to e.value.target which represents the current value of the form */}
                    <input type="text" value={title}  className="title mb-1" onChange={(ev) => setworkTitle(ev.target.value)}/>
                
                
                    <label htmlFor="reps" className="text-white">Number of Reps </label>
                    <input type="Number" className="reps mb-1" value={reps}  onChange={(ev)=> setworkoutReps(ev.target.value)}/>
                
                
                    <label htmlFor="load" className="text-white">Load (kg)</label>
                    <input type="Number" className="load  "  value={load} onChange={(ev)=> setworkoutLoad(ev.target.value)}/>
                

                <button type="submit" className="text-white bg-primary focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center mb-2  ">Add Workout</button>
                {errors && <div className="error">{errors} </div>}</form>
    
    )
}

export default Forms
