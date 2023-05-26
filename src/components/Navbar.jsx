import React from 'react'
import {Link  } from "react-router-dom";
import  {useAuthContext} from "../hooks/useAuthContext"
import useLogout from "../hooks/useLogout"
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
  } from "@heroicons/react/24/outline";

  
// function ComplexNavbar() {
//     const {user} = useAuthContext()
//     const {logout} = useLogout()
     
//     const handleClick = async ()=>{
//         const res = await logout()
    
//     }



//     return (
//         <header className="bg-white">
//             <div className="container">
//             <Link  to="/">
//             </Link>
//             <nav className="flex justify-end space-x-3 ">
//                 {user && (
//                     <div className="flex flex-row space-x-3">
//                     <span className="hidden sm:block">{user.email}</span>
//                     <button className="text-white p-2 rounded-md bg-primary  transition ease-in-out duration-0 hover:duration-700  " onClick={handleClick} >Logout</button>
//                     {/* <p className=" relative">  <span className="text-md"></span>  <img className="absolute -top-1 right-10 " src="../../user.svg" alt="" /></p> */}
//                     </div>    
//                 )}
//                 {!user && (
//                     <div className="px-10 space-x-2">
//                     <Link to="/login" className="text-white p-2 rounded-md bg-primary  hover:underline px-1 transition  transition-all ">
//                         Login
//                     </Link>
//                     <Link to="/signup" className="text-white p-2 rounded-md bg-primary  transition transition-all">
//                         Signup
//                     </Link>
//                 </div>
//                 )}
                
                
                
//             </nav>
//         </div>
//         </header>
        
//     )
// }



function ComplexNavbar() {
    const {user} = useAuthContext()
    const {logout} = useLogout() 
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    const handleClick = async ()=>{
        const res = await logout()
    
    }
   
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setIsNavOpen(false)
      );
    }, []);
   
    return (
      <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-md lg:pl-6 bg-white navbar">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            <h1><img src="../../fitness.svg" className="w-10 h-10" alt="" /></h1>
          </Typography>
          
          <ProfileMenu />
        </div>
      </Navbar>
    );
  }

  export default ComplexNavbar
