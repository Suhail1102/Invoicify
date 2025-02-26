import React, { useState } from "react";
import heroimg from "../assets/heroimg.png";
import { NavLink , useNavigate} from 'react-router';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from "@mui/material";
import toast from "react-hot-toast";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword :""
  });
  const [focused, setFocused] = useState(false);
 
const[open , setOpen]= useState(false)
const [loading, setLoading] = useState(false)
const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Password Validation
    if (name === "password") {
      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character
      const capitalLetterRegex = /[A-Z]/; // At least one capital letter
      const invalidCharRegex = /[_-]/; // Invalid characters
      const lengthRegex = /^.{8,16}$/; // Length between 8 and 16 characters
    
      let error = "";
    
      if (!lengthRegex.test(value)) {
        error = "Password must be between 8 and 16 characters long.";
      } else if (!specialCharRegex.test(value)) {
        error = "Password must contain at least one special character.";
      } else if (!capitalLetterRegex.test(value)) {
        error = "Password must contain at least one capital letter.";
      } else if (invalidCharRegex.test(value)) {
        error = "Password contains invalid characters (_ or -).";
      }
    
      setErrors({ ...errors, password: error});
    }
    
    if (name === "confirmPassword") {
      
      const error = formData.password!== value? "Passwords do not match." : "";
      setErrors({...errors, confirmPassword: error });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();


    if (errors.password) {
      toast.error("Please fix the password errors before submitting.")
      return;
    }

    if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match!");
  
      return;
    }

    const dataToSend = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    };

    // Calling Api here

    try {
      setLoading(true)
      const response = await fetch(`${apiUrl}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error('something went wrong')
        throw new Error(`HTTP error! status: ${response.status}`);
       
      }
      else {
      toast.success(response.message)
      setLoading(false)
      }
      
    } catch (error) {
     toast.error(error)
    }
   
  };

  return (
    <>
   
      <div className="flex min-h-screen items-center justify-center bg-image flex-col ">
        {/* display message */}
        
        <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden relative ">
          {/* Right Form Section */}
         
          <div className="w-full lg:w-1/2 p-8 pt-5">
          <NavLink to="/" > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-10 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg></NavLink>
            <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?&nbsp;
              <a href="/login" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
            <form className="mt-6" onSubmit={handleSubmit} >
              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter 8 characters or more"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-400"
                      : "focus:ring-blue-400"
                  }`}
                  required
                />
              
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Confirm Password {formData.confirmPassword && !errors.confirmPassword && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-green-400 inline-block"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    )}
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onFocus={() => setFocused(true)} // Set focus state to true
                  onBlur={() => setFocused(false)} // Set focus state to false
                  className={`w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none 
                       ${
            focused
              ? "focus:ring-blue-400 border-blue-400" // Blue when focused
              : errors.confirmPassword
              ? "border-red-500 focus:ring-red-400" // Red when invalid
              : formData.confirmPassword
              ? "border-green-400 focus:ring-green-400" // Green when valid and blurred
              : "border-gray-300" // Default when no focus and no input
          }
                  `}
                  required
                /> 
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
               
              </div>

              {/* Submit Button */}

              <Button
              type="submit"
        fullWidth
       
        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
              loading={loading}
       variant="contained"
      >
        Sign UP
      </Button>
            </form>

            <p className="mt-6 text-center text-gray-600 text-sm">
              or sign up with
            </p>
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

          {/* Left Image Section */}
          <div className="hidden lg:flex w-full lg:w-1/2 bg-gray-50 items-center justify-center">
            <img src={heroimg} alt="Illustration" className="w-3/4" />
          </div>
        </div>
      </div>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default Signup;
