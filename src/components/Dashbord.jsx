import React,{ useEffect, useState } from 'react'
import './Dashbord.css'
import axios from 'axios'
function Dashbord() {

 
  return (
    <div className='dashord'>
      <h1 className='text-dark '>Order #349</h1>
        <p>Customer Id: <span className='text-primary'>243567</span></p>
        <hr />
     
    </div>
  )
}

export default Dashbord