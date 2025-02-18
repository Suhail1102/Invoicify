import React, { useState } from "react";

const TaxInvoiceForm = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    companyDetails: {
      image:"",
      name: "",
      gstin: "",
      address: "",
      contact: "", 
    },
    customerDetails: {
      name: "",
      address: "",
      contact: "",
    },
    invoiceDetails: {
      number: "",
      date: "",
      dueDate: "",
      placeOfSupply: "",
    },
    items: [
      {
        name: "",
        hsn: "",
        tax: "",
        qty: "",
        rate: "",
        unit: "",
      },
    ],
    bankDetails: {
      name: "",
      accountNumber: "",
      ifsc: "",
      branch: "",
    },
  });

  const handleInputChange = (section, field, value, index = null) => {
    if (section === "items" && index !== null) {
      const updatedItems = [...formData.items];
      updatedItems[index][field] = value;
      setFormData({ ...formData, items: updatedItems });
    } else {
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [field]: value,
        },
      });
    }
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        { name: "", hsn: "", tax: "", qty: "", rate: "", unit: "" },
      ],
    });
  };

  const removeItem = (index) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: updatedItems });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Format the data and pass it to the output generator logic
    onSubmit(formData)
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        handleInputChange("companyDetails", "image", event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <div className=" min-h-screen bg-white py-3 px-4 sm:px-6 lg:px-8 container mx-auto shadow-md mt-3 border-[1px] max-w-3xl rounded-md mb-5">
      <h1 className=" text-2xl font-bold tracking-tighter text-center my-2">Tax Invoice Form</h1> 
      <form onSubmit={handleSubmit} className=" p-3 w-full rounded-md  ">
        {/* Company Details */}
         <div className="grid md:grid-cols-2 gap-4  grid-cols-2 grid-rows-3 md:grid-rows-2">
      <legend className="font-semibold text-lg text-gray-700 my-2 col-span-1">Company Details</legend><br />
      <input type="file" accept="image/*" className=" col-span-1 py-2  px-1 rounded-sm  border-[1px]" onChange={handleImageUpload} />
      <input
        type="text"
        placeholder="Company Name"
        className=" col-span-1 border rounded px-2 focus:outline-none focus:ring-2 focus:ring-gray-100"
        value={formData.companyDetails.name}
        onChange={(e) => handleInputChange("companyDetails", "name", e.target.value)}
      />
      <input
        type="text"
        placeholder="GSTIN"
        className=" col-span-1 px-2 border rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.companyDetails.gstin}
        onChange={(e) => handleInputChange("companyDetails", "gstin", e.target.value)}
      />
        <input
        type="text"
        placeholder="Contact"
        className=" border rounded col-span-1 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.companyDetails.contact}
        onChange={(e) => handleInputChange("companyDetails", "contact", e.target.value)}
      />
      <textarea
        placeholder="Address"
        className=" col-span-2 px-2 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.companyDetails.address}
        onChange={(e) => handleInputChange("companyDetails", "address", e.target.value)}
      />
    
    
    </div>
        {/* Customer Details */}
        
        <div className=" grid grid-cols-2 gap-3 grid-rows-2">
      <legend className="font-semibold text-lg text-gray-700 col-span-full ">Customer Details</legend>
      <input
        type="text"
        placeholder="Customer Name"
        className=" p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.customerDetails.name}
        onChange={(e) => handleInputChange("customerDetails", "name", e.target.value)}
      />
      <textarea
        placeholder="Address"
        className=" row-span-3 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.customerDetails.address}
        onChange={(e) => handleInputChange("customerDetails", "address", e.target.value)}
      />
      <input
        type="text"
        placeholder="GSTIN"
        className=" p-2 border rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.customerDetails.gstin}
        onChange={(e) => handleInputChange("customerDetails", "gstin", e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact"
        className=" p-2 border rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.customerDetails.contact}
        onChange={(e) => handleInputChange("customerDetails", "contact", e.target.value)}
      />
    </div>

        {/* Invoice Details */}
        <div className=" grid md:grid-cols-3 gap-3 grid-cols-2 mt-4">
      <legend className="font-semibold text-lg text-gray-700 col-span-full ">Invoice Details</legend>
      <input
        type="text"
        placeholder="Invoice Number"
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.invoiceDetails.number}
        onChange={(e) => handleInputChange("invoiceDetails", "number", e.target.value)}
      />
      <input
        type="date"
        className="w-full p-3 border rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.invoiceDetails.date}
        onChange={(e) => handleInputChange("invoiceDetails", "date", e.target.value)}
      />
      <input
    
        type="date"
        className="w-full p-3 border rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.invoiceDetails.dueDate}
        onChange={(e) => handleInputChange("invoiceDetails", "dueDate", e.target.value)}
      />
      <input
        type="text"
        placeholder="Place of Supply"
        className="md:col-span-2 p-3 border rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.invoiceDetails.placeOfSupply}
        onChange={(e) => handleInputChange("invoiceDetails", "placeOfSupply", e.target.value)}
      />
    </div>

        {/* Items */}
        <div className="mb-3">
      <legend className="font-semibold text-lg text-gray-700 mb-3">Items</legend>
      {formData.items.map((item, index) => (
        <div key={index} className="grid grid-cols-2 gap-2 mb-4 grid-rows-4 ">
          <input
            type="text"
            placeholder="Item Name"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-full"
            value={item.name}
            onChange={(e) => handleInputChange("items", "name", e.target.value, index)}
          />
          <input
            type="text"
            placeholder="HSN"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={item.hsn}
            onChange={(e) => handleInputChange("items", "hsn", e.target.value, index)}
          />
          <input
            type="number"
            placeholder="Rate"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={item.rate}
            onChange={(e) => handleInputChange("items", "rate", e.target.value, index)}
          />
          <input
            type="number"
            placeholder="Qty"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={item.qty}
            onChange={(e) => handleInputChange("items", "qty", e.target.value, index)}
          />
          <input
            type="number"
            placeholder="Tax"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={item.tax}
            onChange={(e) => handleInputChange("items", "tax", e.target.value, index)}
          />
          <input
            type="text"
            placeholder="Amount"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={(item.rate*item.qty)>0?(item.rate*item.qty):""}
            onChange={
            (e) => handleInputChange("items", "amount", e.target.value, index)}
          />
        
        
          <button type="button" className="border-red-300 bg-red-300 border text-black px-3 rounded" onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}
      <button type="button" className="bg-green-500 text -white px-4 py-2 rounded" onClick={addItem}>Add Item</button>
    </div>

        {/* Bank Details */}
        <div className=" grid grid-cols-2 gap-3">
      <legend className="font-semibold text-lg text-gray-700 col-span-full">Bank Details</legend>
      <input
        type="text"
        placeholder="Bank Name"
        className="w-full p-3 border rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.bankDetails.name}
        onChange={(e) => handleInputChange("bankDetails", "name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Account Number"
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.bankDetails.accountNumber}
        onChange={(e) => handleInputChange("bankDetails", "accountNumber", e.target.value)}
      />
      <input
        type="text"
        placeholder="IFSC"
        className="w-full p-3 border rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.bankDetails.ifsc}
        onChange={(e) => handleInputChange("bankDetails", "ifsc", e.target.value)}
      />
      <input
        type="text"
        placeholder="Branch"
        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.bankDetails.branch}
        onChange={(e) => handleInputChange("bankDetails", "branch", e.target.value)}
      />
    </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200 mt-5">Generate Invoice</button>
      </form>
    
    </div>
  {/* <TaxInvoiceOutput/> */}
  </>
  );
};

export default TaxInvoiceForm;
