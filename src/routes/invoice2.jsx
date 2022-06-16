import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from '../data';


export default function Inv() {

  let params = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  let invoice = getInvoice(+params.invoiceId);

  return (

    <div style={{ padding: '1rem' }}>
      <h2>Invoice: {params.invoiceId} / {typeof(+params.invoiceId)}</h2>
      <p>Location: {location.pathname}</p>
      
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('/invoices' + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </div>
    
  )
  
}