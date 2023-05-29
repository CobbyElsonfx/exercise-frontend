import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {WorkoutContextProvider} from "./context/WorkoutContext"
import {AuthContextProvider} from "./context/AuthContext"


import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthContextProvider>
      <WorkoutContextProvider>
        <App/>
      </WorkoutContextProvider>
    </AuthContextProvider> 
    </ThemeProvider> 
  </React.StrictMode>,
)
