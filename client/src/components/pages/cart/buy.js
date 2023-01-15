import React from 'react'
import { services, packages } from '../../../data/data'

const ServiceCard = (props) => {
    const clickHandler = (e) => {
        props.onHandleClick(e.target.name);
    }
    const {service} = props;
    return(
        <div>
        {service ? (
        <div className='bg-white rounded-md shadow-md p-4 flex flex-wrap items-center justify-start gap-4 mb-2'>
        <img src={service.img} alt={service.name} height={"200px"} width={"200px"}/>
        <div className=' flex-grow'>
        <h3 className='text-2xl mb-2'>{service.name}</h3>
        <hr />
        <p className='text-xl mt-2 mb-4'>Base price: {props.price}</p>
        <button className='px-4 py-2 bg-blue border-2 border-blue text-white rounded-md hover:bg-white hover:text-blue' onClick={clickHandler} value={service.name}>Remove</button>
        </div>  
        </div>
        ) : null}
        </div>   
    )
}

const Buy = () => {
    let price = 0;
    const [items, setItems] = React.useState({...localStorage});
    const s = [];
    Object.keys(items).forEach((name) => {
        if(name !== "user"){
            const service = services.find(service => service.name === name);
            const item = service ? service : packages.find(p => p.name === name);
            price += Number(localStorage[item.name]);
            s.push(item);
        }
    })
    const removeItems = (name) => {
        const item = s.find(item => item.name === name);
        price -= Number(item.price);
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
                <a href='/checkout' className='text-xl bg-blue border-2 border-blue text-white rounded-md px-4 py-2 hover:border-gold hover:text-gold'>Book Appointment</a>
            </div>
            {localStorage.length > 0 ? 
                s.map((service)=>{return(<ServiceCard service={service} price={localStorage.getItem(service.name)} onHandleClick={()=> removeItems(service.name)}/>)})
            :<h1 className='text-center my-8 text-2xl'> Your Cart is Empty ! </h1>}
        </div>
    </section>
  )
}

export default Buy