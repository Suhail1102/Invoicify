import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import HomePage from './Pages/HomePage';
import About from './Pages/About'
import LoginPage from './Pages/LoginPage';
import { useContext } from "react";
import SignupPage from './Pages/SignupPage';
import InvoicePage from './Pages/InvoicePage';
import { Navigate } from 'react-router-dom';
import PrivateRoute from './Authentication/PrivateRoute';
import { AuthContext } from './Authentication/AuthContext';
import TaxInvoiceOutput from './components/TaxInvoiceOutput';


const NotFoundPage = () => {
  let location = useLocation();

  console.log("Page not found");
  console.log({location});

  return (
    <h1 className='text-3xl'>Page not found</h1>
  )
}

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>

      <BrowserRouter>

        <div className='dark:bg-zinc-900 dark:text-white transition-all'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={user ? <Navigate to="/" /> : <LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/invoice/form' element={ <InvoicePage />} />
            <Route path="*" component={NotFoundPage} />
              
            {/* <TaxInvoiceOutput  />   */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
