import React from "react";
import { useEffect, useState, useContext } from "react";
import { Tooltip } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { AuthContext } from "../Authentication/AuthContext";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-scroll';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import invoiceLogo from '../assets/invoice logo.png'



function Header() {
  const [lighticon, setlighticon] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const newopen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const handleIconMode = () => {
    if (lighticon) {
      setlighticon(false);
    } else setlighticon(true);
  };

  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleLogout = () => {
    fetch(`${apiUrl}/api/logout`, {
      method: "POST",
      credentials: "include",
    }).then(() => {
      logout();
      setDrop(true)
      setTimeout(() => {
        navigate("/");
        setDrop(false)
      }, 1500);
     
    });
  };

  return (
    <>
      <header
        className={` dark:text-white text-black sticky top-0 shadow-md transition-all z-10 dark:shadow-slate-800 backdrop-blur-sm sm:h-16 md:h-full`}
      >
        <nav className="container mx-auto flex items-center justify-between py-4 md:px-6 px-2">
          {/* Branding */}
          <Link
            to="/"
            className="md:text-2xl font-bold hover:text-gray-200 text-lg cursor-pointer"
          >
           <img src={invoiceLogo} alt="logo" className="w-5 h-5" />
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex gap-3 mr-3">

            <button
              className="block md:hidden text-black dark:text-white focus:outline-none "
              id="menu-button"
              onClick={() => toggleDrawer(true)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            id="menu"
            className="hidden md:flex space-x-6 items-center font-medium"
          >
            <li>
              <Link
                to="home" smooth={true} duration={500}  hashSpy={true} spy={true} activeClass="text-purple-500 underline underline-offset-2"
                className="hover:text-gray-300 transition duration-200 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about" smooth={true} duration={500}  spy={true}   hashSpy={true} activeClass="text-purple-500 underline underline-offset-2" onSetActive={() => console.log("About section is now active")}
                className="hover:text-gray-300 transition duration-200 cursor-pointer"
                
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="features" smooth={true} duration={500}  spy={true}   hashSpy={true} activeClass="text-purple-500 underline underline-offset-2"
                className="hover:text-gray-300 transition duration-200 cursor-pointer"
               
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="pricing" smooth={true} duration={500}  spy={true}   hashSpy={true} activeClass="text-purple-500 underline underline-offset-2"
                className="hover:text-gray-300 transition duration-200 cursor-pointer"
                
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="contact" smooth={true} duration={500}  spy={true}   hashSpy={true} activeClass="text-purple-500 underline underline-offset-2"
                className="hover:text-gray-300 transition duration-200 cursor-pointer"
                
              >
                Contact
              </Link>
            </li>
           
            <li>
                    {user ? (<>
                      <Avatar       id="basic-button"
        aria-controls={newopen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={newopen ? 'true' : undefined}
        className="cursor-pointer"
        onClick={handleClick} sx={{ bgcolor: deepPurple[500] }}>SA</Avatar>
                      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={newopen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout} className=" dark:bg-zinc-700 dark:text-white  bg-gray-200 text-red-500 px-4 py-2 rounded-full hover:bg-gray-100 transition duration-200">Logout</MenuItem>
      </Menu>
                    
                        </>
                    ) : (
                      <a
                        href="/login"
                        className=" dark:bg-zinc-700 dark:text-white  bg-gray-200 text-purple-600 px-4 py-2 rounded-full hover:bg-gray-100 transition duration-200"
                        
                      >
                        Login
                      </a>
                    )}
                  </li>
            <Drawer
              open={open}
              onClose={() => toggleDrawer(false)}
              anchor="right"
            >
              <div
                style={{ width: 235, padding: "16px", height: "100vh" ,  }}
                className="dark:bg-zinc-950"
              >
                <ul className="space-y-4 ">
                  <li className="text-black dark:text-white text-lg "><Link to="home" smooth={true} duration={500}  spy={true}   hashSpy={true} activeClass="text-purple-500 underline underline-offset-2"
                className="hover:text-gray-300 transition duration-200 cursor-pointer">Home</Link></li>
                  <li className="text-black dark:text-white text-lg "><Link to="about" smooth={true} duration={500}  spy={true}   hashSpy={true} activeClass="text-purple-500 underline underline-offset-2"
                className="hover:text-gray-300 transition duration-200 cursor-pointer">About</Link></li>
                  <li className="text-black dark:text-white text-lg "><Link to="features" smooth={true} duration={500}  spy={true}   hashSpy={true} activeClass="text-purple-500 underline underline-offset-2"
                className="hover:text-gray-300 transition duration-200 cursor-pointer">Features</Link></li>
                  <li className="text-black dark:text-white text-lg "><Link to="pricing" smooth={true} duration={500}  spy={true}   hashSpy={true} activeClass="text-purple-500 underline underline-offset-2"
                className="hover:text-gray-300 transition duration-200 cursor-pointer">Pricing</Link></li>
                  <li className="text-black dark:text-white text-lg "><Link to="contact" smooth={true} duration={500}  spy={true}   hashSpy={true} activeClass="text-purple-500 underline underline-offset-2"
                className="hover:text-gray-300 transition duration-200 cursor-pointer">Contact</Link></li>
                  
                  <li>
                    {user ? (
                      
                        <button onClick={handleLogout} className=" dark:bg-zinc-700 dark:text-white  bg-gray-200 text-red-500 px-4 py-2 rounded-full hover:bg-gray-100 transition duration-200">Logout</button>
                    
                    ) : (
                      <a
                        href="/login"
                        className=" dark:bg-zinc-700 dark:text-white  bg-gray-200 text-purple-600 px-4 py-2 rounded-full hover:bg-gray-100 transition duration-200"
                      >
                        Login
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </Drawer>
          </ul>
        </nav>
      </header>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={drop}
      
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default Header;
