import React from "react"
import {useWorkoutContext} from "../hooks/useWorkoutContext"
import {useAuthContext} from "../hooks/useAuthContext"


import formatDistanceToNow from "date-fns/formatDistanceToNow"



function WorkoutDetails({workout}) {
  const {dispatch} = useWorkoutContext()
  const {user} = useAuthContext()
  
  const deleteHandler = async ()=> {
    const response =  await fetch(`http://localhost:5050/api/workouts/${workout._id}`  , {
      method: "DELETE",
      headers :{
        "Authorization":`Bearer ${user.token}`,
      }
    })
    const data =  await response.json()

    if(response.ok){
      dispatch({type: "DELETE_WORKOUT" , payload: data})
    }
}
    return (
        <div className="workout-details md:w-3/4 w-full relative bg-background flex flex-row space-x-4 " >
          <div className="text-center">
            <div className="bg-primary px-2 w-4 h-4 rounded-full" ></div>
            <div className="bg-primary  px-1 w-2 sm:h-[70px] rounded-full" ></div>
          </div>
          <div>
              <h4 className="px-1 text-background font-semibold tracking-wide">{workout.title}</h4>
              <p className="text-lightGrayishisBlue"><strong>Load(kg):</strong> {workout.load}</p>
              <p><strong>Reps:</strong> {workout.reps}</p>
            <div className="flex flex-row space-x-1 justify-">
                <img src="../../clock.svg"  className="w-4 h-4 pt-0.5" alt="" />
                <p className=""> {formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true}) }</p>
              </div>
              <span onClick = {deleteHandler}> <img src="../../delete.svg" alt="" /> </span>
          </div>
          
        </div>
    )
}

export default WorkoutDetails
