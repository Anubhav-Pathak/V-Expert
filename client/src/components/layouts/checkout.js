import React from 'react'
import { baseUrl } from '../../constants'
import logo from "../../assests/images/Footer-Logo.png"
import Tabs from "./tabs"

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
    console.log("baseurl", baseUrl);
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
    } else {
      alert("Booking Failed");
    }
  }

  const [terms, setTerms] = React.useState(false);
  const changeHandler = (e) => {
    setTerms(!terms);
  }
  

  return (
    <main className=' bg-gray pb-12'>
    <section className='mx-4 py-12'>
      <div className='max-w-[450px] mx-auto shadow-lg rounded-md p-2 bg-white'>
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
            <div className='flex items-center'>
              <input type="checkbox" id='terms' name="terms" value="terms" onChange={changeHandler} className='mr-2 flex items-center justify-center' />
              <label htmlFor="terms">I agree upon the <a href='#Terms' className='text-blue underline'>Terms & Conditions</a></label><br />
            </div>
            <input disabled={!terms} type={"submit"} value="Submit" className={`${terms ? "bg-blue hover:border-gold hover:text-gold" : "bg-gray"} text-white py-2 mt-4 border-2 border-blue rounded-md `}/>
          </form>
          </div>
    </section>
    <section id='Terms' className='text-md p-4 text-blue mt-12 bg-white border-2 border-blue rounded-md mx-4 xl:mx-auto max-w-[1400px]'>
      <h2 className='text-3xl mb-8'>Terms and Condtions of Purchase</h2>
      <Tabs />
      <hr className="my-8"/>
      <h3 className="font-bold text-2xl mb-8">General Terms & Conditions</h3>
      <p className="mb-4">Vexpert Technical Services Est. reserves the right to refuse an order if it is deemed to require services beyond the reasonable scope indicated.</p>
      <p className="mb-4">No other obligations or services, either impressed, implied, or inferred, during any communications, is included in the charges unless detailed in the package option or in a formal quotation issued by Vexpert Technical Services Est.</p>
      <p className="mb-4">Vexpert Technical Services Est. may, at its discretion, make changes to the services and/or terms and conditions. Following any such changes that Vexpert Technical Services Est. considers to be material, the customer will be notified. By continuing to use Vexpert Technical Services Est. services after said changes are made, the customer is deemed to be expressly acknowledging their acceptance of the changes.</p>
      <p className="mb-4">During the contract period, should any damage to the customer’s property, assets or premises be found to be caused as a direct result of the service provided by Vexpert Technical Services Est. and/or due to failure to carry out contracted maintenance (unless such failure was caused or contributed to by the customer or a third party), the financial liability of Vexpert Technical Services Est. to the customer will be limited, to the extent permissible by law) to a maximum value of AED 5,000. To the extent permissible by law, Vexpert Technical Services Est. shall not be liable for any consequential, indirect or special loss whatsoever.</p>
      <p className="mb-4">These terms and conditions of purchase shall be governed and construed in accordance with the laws of the United Arab Emirates and party irrevocably submits to the exclusive jurisdiction of the courts of the Dubai International Financial Centre (DIFC).</p>
      <p className="mb-4">Should there be any changes to legislation applicable to the services provided, any necessary changes to the services and/or fees will be implemented as determined by Vexpert Technical Services Est. in order to comply with the new or revised legislation</p>
      <p>For all services there is no warranty on the materials unless specified /mentioned in advance of the services being carried out.</p>
    </section>
    </main>
  )
}

export default Checkout