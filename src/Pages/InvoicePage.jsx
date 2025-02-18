import {useState} from 'react'
import Header from '../components/Header'
import TaxInvoiceForm from '../components/TaxForm'
import Footer from '../components/Footer'
import TaxInvoiceOutput from '../components/TaxInvoiceOutput'

function InvoicePage() {
  const [formData, setFormData] = useState(null);
  const handleFormSubmit = (data) => {
    setFormData(data); 
  }// Pass data from form submission

  console.log({formData});

  return (
    <>
    {/* <Header/> */}
    {!formData ? (
        <TaxInvoiceForm onSubmit={handleFormSubmit} />
      ) : (
        <TaxInvoiceOutput formData={formData} />
      )}
    {/* <Footer/> */}
    </>
  )
}

export default InvoicePage