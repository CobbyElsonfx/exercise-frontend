import {createContext, useReducer,useEffect} from "react"


export const AuthContext = createContext()



export const authReducer = (state, action) =>{
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload
            }

        case "SIGNUP": 
            return {
                user:action.payload
            }
        
        case "LOGOUT":
            return { user: null }
        default:
            return state;
    }
        
}
//set the global state to the localstorage variable if there is when the  components is loaded
export const AuthContextProvider = ({children}) =>{  
    
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"))
      if (user){
        dispatch({type:"LOGIN", payload: user})
      }
      
      
    },[])
    
    



    const [state, dispatch] = useReducer(authReducer, {user: null})
    return (
        <AuthContext.Provider  value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
        )
    
}