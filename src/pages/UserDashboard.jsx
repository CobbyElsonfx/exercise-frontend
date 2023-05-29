import React from "react"
import CustomDayOfWeekFormat from "../components/ BasicDateCalender"
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useAuthContext} from "../hooks/useAuthContext"
import {
    profileImage,
    facebookIcon,
    twitter,
    instagram
} from "../assets/index"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import { StarIcon } from "@heroicons/react/24/solid";




function UserDashboard() {
    const {user} = useAuthContext()
    console.log("user dashboard", user)



    return (
        <div className="container mx-auto flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 relative">
            <Card className="p-5 ">
                <CardHeader floated={false} className=" rounded-full  h-[10rem] w-[10rem] bg-background place-self-center">
                    <img src={profileImage} alt="" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-1">
                    {user.username}
                    </Typography>
                    <Typography color="blue" className="font-medium" textGradient>
                    {user.email}
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-1  ">
                    <Tooltip content="facebook">
                    <Typography
                        as="a"
                        href="#facebook"
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <img src={facebookIcon} className="w-8" alt="" />
                    </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="#twitter"
                        variant="lead"
                        color="light-blue"
                        textGradient
                    >
                        <img src={twitter} className="w-8" alt="" />
                    </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="#instagram"
                        variant="lead"
                        color="purple"
                        textGradient
                    >
                        <img src={instagram} className="w-8" alt="" />
                    </Typography>
                    </Tooltip>
                </CardFooter>
                <div className="place-self-center  hidden sm:block">
                 <CustomDayOfWeekFormat/>           
                </div>
                
                
            </Card>
            </div>

                
        </div>
    )
}

export default  UserDashboard