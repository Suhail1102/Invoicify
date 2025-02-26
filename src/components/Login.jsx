import React from 'react'
import { useState, } from 'react';
import heroimg from '../assets/heroimg.png'
import { NavLink, useNavigate , useLocation} from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from "@mui/material";
import { Eye , EyeOff} from 'lucide-react';
import toast from "react-hot-toast"


function Login() {

  const apiUrl = import.meta.env.VITE_API_URL;
  const[formData , setFormData] = useState(
    {
      email:"",
      password:""
    }
  );
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading]= useState(false);

const handleChange =(e)=>{
  const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
}

const[showPassword , setShowPassword] = useState(false);


const [open, setOpen] = React.useState(false);
const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
 setLoading(true)
  try {
    const response = await fetch(`${apiUrl}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
      credentials: 'include' 
    });

    const data = await response.json();
    if (!response.ok) {
      toast.error(data.message)
      throw new Error(data.message || 'Login failed');
      
    }

    localStorage.setItem('token', data.token);
    
    // Debugging log
    console.log("Redirect Path:", location.state?.from?.pathname); 
      
    const redirectPath = location.state?.from?.pathname || "/";
      toast.success(data.message)
      setOpen(true)
    setTimeout(() => {
      navigate(redirectPath, { replace: true });
      window.location.reload();
      setOpen(false)
    }, 1500);
   
    setLoading(false)

  } catch (error) {
    toast.error(error.message)
  }
};

 
  return (  
    <>
    <div className="flex min-h-screen items-center justify-center bg-image">
    
    <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-transparent shadow-lg rounded-2xl overflow-hidden">
      {/* Left Form Section */}
      <div className="w-full lg:w-1/2 p-8 bg-white">
      <NavLink to="/" > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-10 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg></NavLink>
        <h2 className="text-2xl font-bold text-gray-800">Login</h2>
        <p className="mt-2 text-sm text-gray-600">
          Don’t have an account yet?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
            name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <span className='relative'>
            <input
              type={showPassword?"text":"password"}
              name='password'
              value={formData.password}
              placeholder="Enter 6 characters or more"
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
            />
            { showPassword?
            <Eye className='absolute top-0 right-1 cursor-pointer'  onClick={()=>setShowPassword(!showPassword)} /> :
            <EyeOff className='absolute top-0 right-1 cursor-pointer' onClick={()=>setShowPassword(!showPassword)} />
            }
            </span>
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline mt-2 block"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <Button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            loading={loading}
            variant='contained'
          >
          Login
          </Button>
        </form>
        <p className="mt-6 text-center text-gray-600 text-sm">or login with</p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="flex items-center px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
            <img
              src="https://img.icons8.com/color/24/null/google-logo.png"
              alt="Google"
              className="mr-2"
            />
            Google
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
            <img
              src="https://img.icons8.com/color/24/null/facebook-new.png"
              alt="Facebook"
              className="mr-2"
            />
            Facebook
          </button>
        </div>
      </div>
      {/* Right Illustration Section */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-gray-50 items-center justify-center">
        <img
          src={heroimg}
          alt="Illustration"
          className="w-3/4"
        />
      </div>
    </div>
    <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  </div>
  </>
);
  
}

export default Login