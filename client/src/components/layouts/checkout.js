import React, { useEffect } from 'react'

import { baseUrl } from '../../constants'
import logo from "../../assests/images/Footer-Logo.png"

let packageList = []
  let serviceList = []
const Checkout = (props) => {
  

  const submitHandler = async (e) => {
    e.preventDefault();
    let items = { ...localStorage };
    delete items['user'];
  items = Object.keys(items).map((item) => {
    if (Number(item.price) > 200){
      packageList.push(item)
    } else {
      serviceList.push(item)      
    }
  });
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const newData = { ...data, serviceList: serviceList, packageList: packageList };
    console.log("newData", newData);
    const response = await fetch(`${baseUrl}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
    const res = await response.json();
    if (response.status === 201) {
      alert("Booking Successful");
      window.location.href = "/";
    }
  }

  

  return (
    <section className='mx-4 py-12'>
      <div className='max-w-[450px] mx-auto shadow-lg rounded-md p-2'>
        <div className='flex items-center justify-between mb-8'>
          <img src={logo} alt="logo" width={"120px"}/>
        </div>
          <form className='flex flex-col gap-2' method='POST' onSubmit={submitHandler}>
            <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input id="name" type={"text"} name="name" placeholder='Enter your name' className='border-b-2 border-blue py-1 px-3 rounded-sm outline-none'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email</label>
                <input id="email" type={"email"} name="email" placeholder='Enter your email' className='border-b-2 border-blue py-1 px-3 rounded-sm outline-none'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='phone'>Phone</label>
                <input id="phone" type={"tel"} name="phoneNumber" required placeholder='Enter your phone no.' className='border-b-2 border-blue py-1 px-3 rounded-sm outline-none'/>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='address'>Address</label>
              <textarea id='address' name="address" rows={3} className="resize-none border-2 border-blue p-1" placeholder='Enter here...'/>
            </div>
            <div className='flex flex-wrap gap-4 justify-center items-center my-2'>
              <div>
                <label htmlFor='date' className='block'>Select Preffered Date</label>
                <input name="pdate" id='date' type={"date"} className="border-b-2 rounded-sm border-blue p-1 w-[200px]"/>
              </div>
              <div>
                <label htmlFor='time' className='block'>Select Preffered Time</label>
                <input name='ptime' id='time' type={"time"} className="border-b-2 rounded-sm border-blue p-1 w-[200px]"/>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='requirements'>Additional requirements</label>
              <textarea id="requirements" name="requirements" rows={5} className="resize-none border-2 border-blue p-1" placeholder='Enter here...'/>
            </div>
            <input type={"submit"} value="Submit" className='bg-blue text-white py-2 mt-4 border-2 border-blue rounded-md hover:border-gold hover:text-gold'/>
          </form>
          </div>
    </section>
  )
}

export default Checkout