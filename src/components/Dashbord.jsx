import React, { useEffect, useState } from 'react';
import './Dashbord.css';
import axios from 'axios';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom'

function Dashbord() {
  const [records, setrecords] = useState([]);
  // view
  const viewEmp=async(id)=>{
    const result2=await axios.get(`${'http://localhost:3032/users'}/${id}`)
    console.log(result2);
  }
  useEffect(() => {
    axios.get('http://localhost:3032/users')
      .then(res => {
        setrecords(res.data);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  console.log(records);

  return (
    <div className='dashboard'>
      <h1 className='text-dark'>Order #349</h1>
      <p>Customer Id: <span className='text-primary'>243567</span></p>
      <hr />
<MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Email</th>
          <th scope='col'>Mobile</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          records.map((r,i)=>(
            <tr key={i}>
          <td>
           {r.id}
          </td>
          <td>
            {r.email}
          </td>
          <td>
            {r.mobile}
          </td>
          <td>
            <div className='d-flex justify-content-evenly'>
               <Link to={`view/${r.id}`}><i onClick={()=>viewEmp(r.id)} class="fa-solid fa-eye text-success"></i></Link> 
            </div>
          </td>
        </tr>
          ))
        }
      </MDBTableBody>
    </MDBTable>
<p className='text-dark'>items subtotal:<span className='p-5'>$1690</span></p>
<hr/>
<tr>
  <th className='p-4'>Billing</th>
  <th className='p-5'>Shipping</th>
  <th className='p-5'>Other Details</th>
</tr>
    </div>
  );
}

export default Dashbord;
