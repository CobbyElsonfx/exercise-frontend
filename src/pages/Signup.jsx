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

function Signup() {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="white">
                    Sign Up
                </Typography>
                <Typography color="white" className="mt-1 font-normal">
                    Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Name" />
                    <Input size="lg" label="Email" />
                    <Input type="password" size="lg" label="Password" />
                    </div>
                    <Checkbox
                    label={
                        (
                        <Typography
                            variant="small"
                            color="#eceff1"
                            className="flex items-center font-normal"
                        >
                            I agree the
                            <a
                            href="#"
                            className="font-medium transition-colors hover:text-blue-500"
                            >
                            &nbsp;Terms and Conditions
                            </a>
                        </Typography>
                        )
                    }
                    containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button className="mt-6" fullWidth>
                    Register
                    </Button>
                    <Typography color="white" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                    >
                        Sign In
                    </a>
                    </Typography>
                </form>
                </Card>
            </div>
        </>
            
            
    )
}

export default Signup
