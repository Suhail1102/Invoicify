import React from 'react'
import img3 from '../assets/img3.jpg'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard'
import PercentIcon from '@mui/icons-material/Percent';
import DescriptionIcon from '@mui/icons-material/Description';
import SummarizeIcon from '@mui/icons-material/Summarize';
import payment from '../assets/payment.jpg'
import inventory from '../assets/inventory.jpg'
import order from '../assets/order.jpg'
import invoice from '../assets/invoice.jpg'
import img2 from '../assets/img2.jpg'
import { motion } from "framer-motion";

function About() {
  return (
    <>
    <section className="text-gray-600 body-font dark:text-white dark:bg-black">
  <div className="container mx-auto md:flex px-5 md:py-24 justify-center items-center">
  <img className="lg:w-2/6 md:w-3/6 w-5/6 md:mb-10 mb-4 object-cover object-center rounded mx-auto" alt="hero" src={img3}/>
    <div className="w-full md:w-2/4 flex flex-col items-center text-left">
      <h1 className="title-font md:text-4xl text-xl md:mb-4 mb-2 font-medium text-gray-900 ">Simplifying Tax Invoicing for Your Business</h1>
      <p className=" leading-loose">At Invoicify, we provide a user-friendly tax invoice generator designed to help businesses create professional, GST-compliant invoices in seconds. Our goal is to streamline your billing process, ensuring accuracy, compliance, and efficiency. Whether you're a freelancer, small business owner, or enterprise, our tool makes invoicing effortless and hassle-free. 🚀

Let me know if you want any modifications! 😊</p>
    </div>
    
  </div>
</section>
<section className='md:h-24 h-full bg-purple-100 box-border flex justify-center items-center my-5' > 
        <div className='flex items-center md:gap-10 gap-3 md:text-lg  text-sm flex-wrap py-4 justify-around'>
         <span className='cursor-pointer'><FeaturedPlayListIcon className='text-purple-700 '/> Primary Features</span>
         <span className='cursor-pointer'><CreditCardIcon className='text-purple-700 '/> Payment Tracking</span>
         <span className='cursor-pointer'><InventoryIcon className='text-purple-700 '/> Inventory Management</span>
         <span className='cursor-pointer'><PercentIcon className='text-purple-700 '/> Taxes & Discounts</span>
         <span className='cursor-pointer'><DescriptionIcon className='text-purple-700 '/> Order Management & Estimates</span>
        
         <span className='cursor-pointer'><SummarizeIcon className='text-purple-700 '/> Reports</span>
        </div>
      </section>
      <section className='container'>
      <div className='md:w-[95vw] h-full  md:flex  justify-evenly items-center my-10 flex-wrap '>
          <motion.img src={invoice} alt="" className='w-[18rem] h-[18rem] mx-auto'  initial={{ opacity: 0, x:-50 }} // Start hidden & below
        whileInView={{ opacity: 1, x:0 }} // Animate when visible
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} />
        <div className='mx-3 md:mx-0'>
          <h3 className='md:text-xl text-lg text-purple-600'>Primary Features</h3>
          <h2 className='md:text-2xl text-xl '>Sale, Purchase</h2>
          <p className='md:w-[40rem] text-base text-left '>Professionally Manage all your primary business functions like Sales/Invoicing, Purchases. Highly customizable business-owner friendly application that works seamlessly on mobile, web and cloud. All Ledgers are created automatically.</p>
        </div>
        </div>

        <div className='w-[95vw] h-full  md:flex flex-row-reverse justify-evenly items-center my-10 flex-wrap'>
        <motion.img src={payment} alt="" className='w-[18rem] h-[18rem] mx-atuo'  initial={{ opacity: 0, x:50 }} // Start hidden & below
        whileInView={{ opacity: 1, x:0 }} // Animate when visible
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} />
        <div className='mx-3 md:mx-0'>
          <h3 className='md:text-2xl text-purple-600 md:text-right text-left text-xl '>Payment Tracking</h3>
         
          <p className='md:w-[40rem] text-base md:text-right text-left'>Can record all sorts of complex payments such as partial payments, lumpsum payments, Advance payments, sales on Credit or Immediate payments. Track these invoice-wise or Customer wise. Keep your Cash/Bank balances up-to-date & Track Payables and receivables with ease.</p>
        </div>
        
        </div>

        <div className='w-[95vw] h-full  md:flex   justify-evenly items-center my-5 flex-wrap '>
          <motion.img src={inventory} alt="" className='w-[18rem] h-[18rem] mx-auto'  initial={{ opacity: 0, x:-50 }} // Start hidden & below
        whileInView={{ opacity: 1, x:0 }} // Animate when visible
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} />
        <div className='mx-3 md:mx-0'>
          <h3 className='md:text-2xl text-purple-600 text-xl text-left'>Inventory Management</h3>
          <p className='md:w-[40rem] text-base text-left'>Supports both FIFO and Average Cost Inventory methods. Reporting of product-wise Inventory Valuation and COGS(Cost of Goods Sold) values. Automatic inventory updates on Sale & Purchases Also features inventory reconciliation and Automatic Low Stock Alerts</p>
        </div>
        </div>

        <div className='w-[95vw] h-full   md:flex flex-row-reverse  justify-evenly items-center my-5 flex-wrap'>
        <motion.img src={order} alt="" className='w-[18rem] h-[18rem] mx-auto'  initial={{ opacity: 0, x:50 }} // Start hidden & below
        whileInView={{ opacity: 1, x:0 }} // Animate when visible
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} />
        <div className='mx-3 md:mx-0' >
          <h3 className='md:text-2xl text-xl text-purple-600 md:text-right text-left'>Order Management & Estimates</h3>
          <p className='md:w-[40rem] text-base md:text-right text-left'>Manage complete lifecycle of your Sales & Purchase processes. You can generate Estimates / Quotations and also keep track of Sales Orders received and Purchase Orders placed .Convert Orders and Estimates to invoices when they are confirmed. Keep track of fulfilled and pending orders.</p>
        </div>
        
        </div>

        <div className='w-[95vw] h-full  md:flex  justify-evenly items-center my-5 flex-wrap '>
          <motion.img src={img2} alt="" className='w-[18rem] h-[18rem] mx-auto'  initial={{ opacity: 0, x:-50 }} // Start hidden & below
        whileInView={{ opacity: 1, x:0 }} // Animate when visible
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} />
        <div className='mx-3 md:mx-0'>
          <h3 className='md:text-2xl text-xl text-left text-purple-600'>Taxes and Discounts</h3>
          <p className='md:w-[40rem] text-base text-left'>Standard / Customized taxes and discounts once set, as per company’s laws & benefits gets applied automatically.</p>
        </div>
        </div>
      </section>

    </>
  )
}

export default About