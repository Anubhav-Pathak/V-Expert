import React from 'react'
import Buy from './buy'
import Service from '../home/service'
import Package from '../home/package'
const Cart = () => {
  return (
    <main className='bg-gray pb-12'>
      <Buy/>
      <Service/>
      <Package />
    </main>
  )
}

export default Cart