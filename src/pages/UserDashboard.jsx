import React from "react"
import CustomDayOfWeekFormat from "../components/ BasicDateCalender"
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



    return (
        <div className="containe mx-auto flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/4 ">
            <Card className="w-full ">
                <CardHeader floated={false} className=" rounded-full  h-[10rem] w-[10rem] bg-background place-self-center">
                    <img src="../images/347238825_694195709128869_3375407835383555255_n.jpg" alt="profile-picture" className="" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    Natalie Paisley
                    </Typography>
                    <Typography color="blue" className="font-medium" textGradient>
                    CEO / Co-Founder
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Like">
                    <Typography
                        as="a"
                        href="#facebook"
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <i className="fab fa-facebook" />
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
                        <i className="fab fa-twitter" />
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
                        <i className="fab fa-instagram" />
                    </Typography>
                    </Tooltip>
                </CardFooter>
                <CustomDayOfWeekFormat/>

            </Card>
            </div>

                
        </div>
    )
}

export default  UserDashboard