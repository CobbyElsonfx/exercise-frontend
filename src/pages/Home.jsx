import React from 'react'
import {useEffect , useState} from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import Forms from  "../components/Forms"
import {useWorkoutContext} from "../hooks/useWorkout"



//states


function Home() {
    const {workouts, dispatch} = useWorkoutContext()


//fecth for workouts


useEffect(() => {
    const fetchWorkout = async ()=>{
        
            const response = await  fetch("http://localhost:8585/api/workouts")
            const data =  await response.json()
            if (response.ok){
             dispatch({type: "SET_WORKOUT" , payload: data})
            }
       
        
   
}
 fetchWorkout()  
}, [dispatch])





    
    return (
        <div className="home flex flex-col-reverse md:flex-row  ">
            <div className="workouts w-full md:w-[70%]  md:pr-4 ">
                {/* mapping throught the array of object to get each workout object and pass it a  prop */}
              {workouts && workouts.map((workout)=> <WorkoutDetails workout = {workout} key={workout._id}/>  )}   
            </div>
            <div className="mx-auto w-full md:w-[20%]  mt-4 md:mt-0">
                 <Forms/>
            </div>

         </div>
    )
}

export default Home
