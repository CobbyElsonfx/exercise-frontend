import React from "react"
import CustomDayOfWeekFormat from "../components/ BasicDateCalender"
import TimeClockAmPm from "../components/BasicClock"
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
        <div className=" mx-auto flex flex-col sm:flex-row h-full">
            <div className="w-full sm:w-[30%] relative">
            <Card className="p-5 relative ">
                <Typography variant="p" color="blue" className="font-medium font-bold" textGradient>
                    Profile
                </Typography>
                    
                <CardHeader floated={false} className=" rounded-full  h-[10rem] w-[10rem] bg-background place-self-center">
                    <img src={profileImage} alt="" />
                </CardHeader>
                <CardBody className="text-center ">
                    <div className="text-center">
                        <Typography variant="h4" color="blue-gray" className="">
                        {user.username}
                        </Typography>
                        <Typography variant="small" color="blue" className="font-medium" textGradient>
                        {user.email}
                        </Typography>      
                    </div>
                    
                    <div className="flex flex-row justify-center space-x-4">
                        <Tooltip content="facebook">
                            <img src={facebookIcon} className="w-8" alt="" />
                        </Tooltip>
                        <Tooltip content="twitter">
                            <img src={twitter} className="w-8" alt="" />
                        </Tooltip>
                        <Tooltip content="instagram">
                            <img src={instagram} className="w-8" alt="" />
                        </Tooltip>
                    </div>
                     
                </CardBody>
                
                <CardFooter>

                    <div className="calendar-wrapper place-self-center  hidden lg:block shadow-lg bg-[#f4f4f5]  rounded-md text-background">
                        <CustomDayOfWeekFormat/>           
                    </div>
                </CardFooter>

                
            </Card>
            </div>
            <div className="w-70%">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    w
                </Grid>
                <Grid item xs={4}>
                    ew
                </Grid>
                <Grid item xs={4}>
                e
                </Grid>
                <Grid item xs={8}>
                    e
                </Grid>
                </Grid>
            </div>      
        </div>
    )
}

export default  UserDashboard