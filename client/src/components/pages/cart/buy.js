import React from 'react'
import { services } from '../../../data/data'

const ServiceCard = (props) => {
    const clickHandler = (e) => {
        props.onHandleClick(e.target.value);
    }
    return(
        <div className='bg-white rounded-md shadow-md p-4 flex flex-wrap items-center justify-start gap-4 mb-2'>
            <img src={props.service.img} alt={props.service.name} height={"200px"} width={"200px"}/>
            <div className=' flex-grow'>
                <h3 className='text-2xl mb-2'>{props.service.name}</h3>
                <hr />
                <p className='text-xl mt-2 mb-4'>Base price: {100}</p>
                <button className='px-4 py-2 bg-blue border-2 border-blue text-white rounded-md hover:bg-white hover:text-blue' onClick={clickHandler} value={props.service.name}>Remove</button>
            </div>  
        </div>
    )
}

const Buy = () => {
    let price = 0;
    const [items, setItems] = React.useState({...localStorage});
    const s = [];
    Object.keys(items).forEach((name) => {
        const service = services.find(service => service.name === name);
        s.push(service);
    })
    const removeItems = (name) => {
        localStorage.removeItem(name);
        setItems(prevState => {
            return {...localStorage}
        })
    }
  return (
    <section className='bg-gray'>
        <div className='max-w-[1400px] xl:mx-auto mx-4 py-8'>
            <div className='mb-4 flex flex-wrap justify-between gap-4'>
                <h1 className='text-4xl'>Your Total: {price} <span className='text-lg'>AED</span></h1>
                <button className='text-xl bg-blue text-white rounded-md px-4 py-2 hover:opacity-90'>Proceed to Checkout</button>
            </div>
            {localStorage.length > 0 ? 
                s.map((service)=>{return(<ServiceCard service={service} onHandleClick={removeItems}/>)})
            :<h1 className='text-center my-8 text-2xl'> Your Cart is Empty ! </h1>}
        </div>
    </section>
  )
}

export default Buy