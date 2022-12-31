import React from 'react'
import { services } from '../../../data/data'

const ServiceCard = ({service, onHandleClick}) => {
    return(
        <div>
            <img src={service.img} alt={service.name} height={"200px"} width={"200px"}/>
            <h3>{service.name}</h3>
            <hr />
            <p>Base price: {100}</p>
            <button>Remove</button>
        </div>
    )
}

const Buy = () => {
    const [items, setItems] = React.useState({...localStorage});
    const s = [];
    let price = 0;
    Object.keys(items).forEach((name) => {
        price += 10;
        const service = services.find(service => service.name === name);
        s.push(service);
    })
    const handleClick = () => {
        
    }
  return (
    <section>
        <h1>Your Total: {price}</h1>
        {localStorage.length > 0 ? 
            s.map((service)=>{return(<ServiceCard service={service} onHandleClick={handleClick}/>)})
        :<h1>Your Cart is Empty !</h1>}
    </section>
  )
}

export default Buy