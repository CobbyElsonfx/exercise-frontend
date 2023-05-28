import React from 'react'
import {Link  } from "react-router-dom";
import  {useAuthContext} from "../hooks/useAuthContext"
import ProfileMenu from "../components/ProfileMenu"

import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    IconButton,
  } from "@material-tailwind/react";
  import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
      ArrowLongRightIcon,
  } from "@heroicons/react/24/outline";

  



function ComplexNavbar() {
    const {user} = useAuthContext()
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    
   
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setIsNavOpen(false)
      );
    }, []);
   
    return (
      <Navbar className="mx-auto  p-2  lg:pl-6 bg-white navbar w-full">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium flex flex-row text-background font-bold "
          >
            <img src="../../fitness.svg" className="w-10 h-10" alt="" /> <span className="text-orange font-bold">Exer</span> ciseTracker
          </Typography>
          {user && (
              <ProfileMenu />
          )
          }

          {!user && (
            <Button variant="text"  className="flex items-center gap-2">
                Sign In  <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
            </Button>
          )
          }
        </div>
      </Navbar>
    );
  }

  export default ComplexNavbar
