import React, { useRef } from "react";
import Qrcode from './Qrcode'
import html2canvas from "html2canvas";
import {jsPDF }from "jspdf"



const TaxInvoiceOutput = ({ formData }) => {
  
  const calculateTax = (amount, taxRate) => {
    return (amount * taxRate) / 100;
  };

  const calculateTotal = () => {
    const subtotal = formData.items.reduce((sum, item) => {
      const itemTotal = item.qty * item.rate;
      return sum + itemTotal;
    }, 0);

    const taxAmount = formData.items.reduce((sum, item) => {
      const itemTax = calculateTax(item.qty * item.rate, item.tax);
      return sum + itemTax;
    }, 0);
    const totalQuantity = formData.items.reduce((sum, item) => sum + Number(item.qty), 0);

    return { subtotal, taxAmount, totalQuantity ,grandTotal: subtotal + taxAmount };
  };

  const totals = calculateTotal();
  const componentRef= useRef(null);

  const handleDownload = async () => {
    const element = componentRef.current;
    window.scrollTo(0, 0);

  setTimeout(async () => {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      backgroundColor: "#ffffff",
      willReadFrequently: true,
    });
  
    const imageData = canvas.toDataURL("image/jpeg", 0.8);
  
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: 'a3',
    });
  
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
  
    const marginX = 10;
    const marginY = 15;
  
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min((pdfWidth - 2 * marginX) / imgWidth, (pdfHeight - 2 * marginY) / imgHeight);
  
    const finalWidth = imgWidth * ratio;
    const finalHeight = imgHeight * ratio;
  
    pdf.addImage(imageData, "JPEG", marginX, marginY, finalWidth, finalHeight);
    pdf.save("TaxInvoice.pdf");},1000)
  };

  const handlePrint = () => {
    if (componentRef.current) {
      // Temporarily add print class
      componentRef.current.classList.add("print-container");
  
      // Trigger print
      window.print();
  
      // Remove class after printing (to avoid affecting normal view)
      setTimeout(() => {
        componentRef.current.classList.remove("print-container");
      }, 1000);
    }
  };
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-between w-full mx-auto max-w-[1100px]">
      
 <div ref={componentRef} 
  className="border-[2px] border-slate-600 print-container
            w-[8.27in] mx-auto h-[10.6in]
            mt-5 flex flex-col box-border 
             overflow-hidden mb-5 bg-white " style={{lineHeight:"0.5 !important"}}>
 {/* Tax Invoice heading */}
 <div className="flex-none max-h-10">
    <h1 className="text-2xl text-center border-b-[2px] border-slate-600 font-bold">
        Tax Invoice
    </h1>
</div>

     {/* form header */}
    
   
    <div className="header basis-1/4 border-b-2  border-slate-600 box-border  ">
   
        {/* header main content */}
        <div className="form-header w-full h-full">
      
        {/* header-division */}

        <div className=" flex h-full ">

{/* header left */}

        <div className="header-left border-r-[2px] border-slate-600  basis-2/4  " style={{fontSize:"0.98rem" }}>
             <div className="flex flex-col h-full w-full ">
                <div className="header-up border-b-2 border-slate-600 basis-2/4 flex  items-center gap-x-9 justify-start px-1 ">
                <div className="company-logo  h-[7rem] basis-1/3">
                  <img src={formData.companyDetails.image} className="logo w-full h-full object-contain" alt="logo" />
                </div>
                <div className="company-details " style={{fontSize:"0.9rem"}}>
                  <span className="block font-bold text-lg">{formData.companyDetails.name}</span>
                  <span className="block ">{formData.companyDetails.gstin} </span>
                  <span className="block">{formData.companyDetails.address} </span>
                  
                  <span> mobile:{formData.companyDetails.contact}</span>
                </div>
                </div>
                <div className="header-down  basis-2/4" >
                <div className="cutomer-details px-2 mt-2 " style={{fontSize:"0.9rem"}}>
                  <span className="block font-bold ">Cutomer Detail </span>
                  <span className="block font-bold ">{formData.customerDetails.name} </span>
                  <span className="block">{formData.customerDetails.address} </span>
                  
                  <span className=" ">GSTIN:27AAACT2727Q1ZW</span> &nbsp;|&nbsp;
                  <span> Mobile:{formData.customerDetails.contact}</span>
                </div>
                
                </div>
             </div>
           </div>
 {/* header right */}
                 
        <div className="header-right basis-2/4 ">
        <div className="flex flex-col h-full w-full ">
          {/* header up */}
        <div className="header-up border-b-2 border-slate-600 basis-2/4 grid grid-rows-2 grid-cols-2 font-bold " style={{fontSize:"0.9rem"}}>
                  <div className="px-2"><span className="block">Invoice #</span><span>{formData.invoiceDetails.number}</span></div>
                  <div className=" px-2  border-l-2 border-slate-600">
                    <span className="block">Invoice Date-</span><span>{formData.invoiceDetails.date}</span>
                  </div>
                  <div className=" px-2  border-t-2 border-slate-600">Place Of Supply - {formData.invoiceDetails.placeOfSupply}</div>
                  <div className=" px-2 border-s-2 border-t-2 border-slate-600">Due date -{formData.invoiceDetails.dueDate}</div>
                 
                
                </div>

                {/* header down */}
                <div className="header-down  basis-2/4">
                 <div className="shipping-address px-2 mt-2 " style={{fontSize:"0.9rem"}}>
                  <span className="block font-bold ">Shipping Address </span>
                  <span className="block font-bold ">{formData.customerDetails.name} </span>
                  <span className="block">{formData.customerDetails.address} </span>
                 
                  <span className=" ">GSTIN:27AAACT2727Q1ZW</span> &nbsp;|&nbsp;
                  <span> Mobile:+91-{formData.customerDetails.contact}</span>
                </div>
                    
                </div>
             </div>
            
        </div>
        
        </div>
    </div>
    </div>

    {/* main content */}
    <div className=" basis-3/5  border-b-2   flex flex-col ">
    {/* main container 1 */}

   <div className="  ">
   <table className=" h-full w-full ">
        <thead className="border-b-2 border-slate-600 ">
            <tr>
                <th style={{width:"1rem"}}>S.No</th>
                <th>Item</th>
                <th className="hsn-col">HSN</th>
                <th style={{width:"6rem"}}>Rate</th>
                <th style={{width:"4rem"}}>Qty</th>
                <th style={{width:"4rem"}}>Tax</th>
                <th style={{width:"8rem"}}>Amount</th>
            </tr>
        </thead>
        <tbody className="h-96  align-top " >
        {formData.items.map((item, index) => {
            const itemTotal = item.qty * item.rate;
            const itemTax = calculateTax(itemTotal, item.tax);
            return (
              <tr key={index}  style={{height:"10px"}}>
                <td >{index + 1}</td>
                <td >{item.name}</td>
                <td  style={{ border: "1px solid #ddd", padding: "8px" }}>{item.hsn}</td>
                <td  style={{ border: "1px solid #ddd", padding: "8px" }}>{item.rate}</td>
                <td  style={{ border: "1px solid #ddd", padding: "8px" }}>{item.qty}</td>
                <td   style={{ border: "1px solid #ddd", padding: "8px" }}>{item.tax}%</td>
                <td  style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {/* ₹{(itemTotal + itemTax).toFixed(2)} */}
                  ₹{(itemTotal).toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="h-9">
            <tr className='border-b-[3px] border-t-[3px] border-slate-500'>
                <td className='border-none'></td>
                <td className='text-end '>Total</td>
                <td className='border-none'></td>
                <td className='border-none'></td>
                <td className=''>{totals.totalQuantity}</td>
                <td className=''>{}</td>
                <td className=''>₹{totals.subtotal.toFixed(2)}</td>
            </tr>
        </tfoot>
    </table>
    
   </div>
    {/* main container 2 */}

   <div className="main-container2 flex h-full w-full ">
   {/* bank details */}
    <div className="bank-details basis-2/3  px-3 border-r-2 border-slate-600">
    <h3 className="font-bold mt-2 text-xl">Bank Details:</h3>
    <div className="details " style={{fontSize:"0.9rem"}} >
       <div className="flex text-lg gap-[4.2rem]">
        <span>Bank:</span> 
        <span className="text-start"> {formData.bankDetails.name}</span>
       </div>
       <div className="flex text-lg gap-10">
        <span>Account:</span> 
        <span> {formData.bankDetails.accountNumber}</span>
       </div>
       <div className="flex text-lg gap-[4.5rem]">
        <span>IFSC:</span> 
        <span>{formData.bankDetails.ifsc}</span>
       </div>
       <div className="flex text-lg gap-[3.3rem]">
        <span>Branch:</span> 
        <span> {formData.bankDetails.branch}</span>
       </div>
       
    </div>
    </div>
    <div className="total basis-2/6 grid grid-rows-3">
  {/* Taxable Amount */}
  <div className="flex justify-between px-4 py-2 border-b border-gray-300">
    <h3 className="font-semibold">Taxable Amount</h3>
    <span>₹{totals.subtotal.toFixed(2)}</span>
  </div>

  {/* Tax Amount */}
  <div className="flex justify-between px-4 py-2 border-b border-gray-300">
    <h3 className="font-semibold">Tax</h3>
    <span>₹{totals.taxAmount.toFixed(2)}</span>
  </div>

  {/* Grand Total */}
  <div className="flex justify-between px-4 py-3 text-lg font-bold">
    <h2>Grand Total</h2>
    <span>₹{totals.grandTotal.toFixed(2)}</span>
  </div>
</div>

          
   </div>
    </div>
    {/* footer basis-1/6 */}
    
    <div className="footer flex border-t-2 border-slate-600 box-border text-sm h-auto min-h-[150px] max-h-[150px]">
  <div className="basis-4/6 border-r-2 border-slate-600 p-2">
    <h3 className="font-bold">Notes:</h3>
    <p>Thank you for the business!</p>

    <h3 className="font-bold mt-2">Terms and Conditions</h3>
    <ul className="list-decimal pl-4 space-y-1">
      <li>Goods once sold cannot be taken back or exchanged.</li>
      <li>Interest at 24% will be charged for unclear bills beyond 15 days.</li>
      <li>Subject to local jurisdiction.</li>
    </ul>
  </div>

  <div className="basis-2/6 flex flex-col justify-center items-end pr-4">
    <h1 className="font-bold text-lg">For Company Name</h1>
    <Qrcode />
  </div>
</div>

</div>


<div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center gap-4 w-full lg:w-auto border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-700 mb-2">Actions</h3>
    
    <button 
      onClick={handleDownload} 
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:from-indigo-500 hover:to-blue-600 transition-all duration-300 ease-in-out w-full"
    >
  📥 Download Invoice
    </button>

    <button 
      onClick={handlePrint} 
      className="bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:from-teal-500 hover:to-green-600 transition-all duration-300 ease-in-out w-full"
    >
    🖨️ Print Invoice
    </button>
  </div>

      </div>

    </>
  );
};

export default TaxInvoiceOutput;
