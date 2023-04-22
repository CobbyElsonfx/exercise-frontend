import {createContext, useReducer}  from "react"


export const WorkoutContext = createContext()



export const workoutReducer = (state, action) =>{
    switch (action.type) {
        case "SET_WORKOUT":
            return {
                workouts: action.payload
            }
        case "CREATE_WORKOUT":
            return {
                // this adds the rest or previous state to the current workout that is been created with the post method to be precise
                // ..state.workout makes a copy of the workout 
                workouts:[action.payload, ...state.workouts]
            }
        case  "DELETE_WORKOUT":
            return {
                workouts : state.workouts.filter(data=> data._id !== action.payload._id)
            }
    
        default:
            return state;
    }
        
}
//The children here represenst the app component/ or the any component  which has been wrapped with the WorkoutContextProvider
export const WorkoutContextProvider = ({children}) =>{
    
    // workoutReducer is the function that will update the state base on an action and we set the state to be an object with initial  value null
    const [state, dispatch] = useReducer(workoutReducer, {workouts: null})

    return (
        // Lets provide a value for the context that we want to be accessible throught the component tree
        //But the value must be a dynamic state value since it will be subject to changes when ever a new workout is added
        //We can achieve this by setting a state for the value using a more power state manager such as  userReducer that changes state based on an action dispacthed to it
        <WorkoutContext.Provider  value={{...state,dispatch}}>
            {children}
        </WorkoutContext.Provider>
        )
    
}