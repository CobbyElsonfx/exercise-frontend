import React from 'react'
import {useWorkoutContext} from "../hooks/useWorkout"


import formatDistanceToNow from "date-fns/formatDistanceToNow"



function WorkoutDetails({workout}) {
  const {dispatch} = useWorkoutContext()

  
  const deleteHandler = async ()=> {
    const response =  await fetch(`http://localhost:8585/api/workouts/${workout._id}` , {
      method: "DELETE",
    })
    const data =  await response.json()

    if(response.ok){
      dispatch({type: "DELETE_WORKOUT" , payload: data})
    }
}
    return (
        <div className="workout-details md:w-3/4 w-full relative">
          <h4 className="text-primary font-semibold tracking-wide">{workout.title}</h4>
          <p><strong>Load(kg):</strong> {workout.load}</p>
          <p><strong>Reps:</strong> {workout.reps}</p>
          <p> {formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true}) }</p>
          <span onClick = {deleteHandler}> <img src="../../delete.svg" alt="" /> </span>
        </div>
    )
}

export default WorkoutDetails
