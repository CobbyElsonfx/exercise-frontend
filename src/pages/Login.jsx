import React from 'react'
import {useState}  from "react"
import {Link} from "react-router-dom"
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import  useLogin from "../hooks/useLogin"


function Login() {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const {login,isLoading,error} = useLogin("")



    const handleSubmit = async (ev)=>{
        ev.preventDefault()
      await login(email,password)
      
    }



    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="white">
                    Login
                </Typography>
                <Typography color="white" className="mt-1 font-normal">
                    Enter your details to login.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-col gap-6">
                    <Input className="text-white" size="lg" label="Email"  value={email}  onChange={(ev) => setEmail(ev.target.value)}  />
                    <Input className="text-white" type="password" size="lg" value={password} label="Password"  onChange={(ev) => setPassword(ev.target.value)}/>
                    </div>
                    
                    <Button type="submit" className="mt-6" fullWidth>
                        Login
                    </Button>
                    <Typography color="white" className="mt-4 text-center font-normal">
                    Do not have an account?{" "}
                    <a href="/signup"
                        className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                    >
                    Register
                    </a>
                    </Typography>

                    {
                        error && <div>{error}</div>
                    }
                </form>

                </Card>
            </div>
        </>
                     
    )
}

export default Login
