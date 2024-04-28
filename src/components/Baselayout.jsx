import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
function Baselayout() {
  return (
    <div className='header'>
 <div>
        <tr>
        <th>
        <p><a  className='text-black' href="">🖨️Print</a></p>
        </th>
        <th>
          <a className='m-5 text-dark' href="">↩️Refund</a>
        </th>
        <th><a className='m-5 text-dark' href="">🔻More Actions</a></th>
       </tr>
{/* card1 */}
      <div className='m-5 shadow'>
        <MDBCard>
      <MDBCardBody>
        <MDBCardTitle className='text-dark'>Summary</MDBCardTitle>
        <MDBCardText>
<ul>
  <p>Items Subtotal:<span className=''>$691</span></p>
  <p>Discount: <span className=' text-danger'>-$59</span></p>
  <p>Tax: <span className=''>$125.20</span></p>
  <p>Subtotal: <span className=''>$665</span></p>
  <p>Shoping cost: <span className=''>$30</span></p>
  <hr />
  <p className='text-dark'>Total:<span className='m-5 text-dark'>$695.20</span></p>
</ul>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard></div>
{/* card2 */}
    <div className='m-5 shadow'>
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle className='text-dark'>Order Status</MDBCardTitle>
        <MDBCardText>
<ul>
  <li>
  <p>Payment Status</p>
  <input type="text" placeholder='processing' /><br />
  </li>
  <li>
  <p>Fulfillment status</p>
  <input type="text" placeholder='Unifulfilled' />
  </li>
</ul>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </div>
        </div>
    </div>
  )
}

export default Baselayout