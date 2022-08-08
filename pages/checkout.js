import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { Textarea, Input, Spacer, Dropdown } from '@nextui-org/react';

const checkout = ({ cart, addToCart, removeFromCart, cleanCart, saveCart, subtotal }) => {
  return (
    <div className='md:m-10 flex md:justify-between md:flex-row flex-col mx-5 md:mx-16'>
      {/* Checkout details form */}
      <form action="" className=''>
        <h1>Shopping</h1>
        <div className='md:w-[60rem] w-full space-y-5 '>
          <div className='md:flex md:space-x-5 md:space-y-0 space-y-5'>
            <div>
              <Input clearable label="Name" placeholder="Name" initialValue="" type="text" width={300} />
            </div>
            <div>
              <Input clearable label="Email" placeholder="Email" initialValue="" type="email" width={300} />
            </div>
          </div>
          <div className='md:flex items-center md:space-x-5'>
            <div>
              <Input clearable label="Phone" placeholder="Phone" initialValue="" type="number" width={300} />
            </div>
            <div>
              <Input clearable label="State" placeholder="State" initialValue="" type="text" width={300} />
            </div>
          </div>
            <Textarea className='border-2 border-gray-200' label="Adderes" placeholder="Enter your Shipping Adderes" type="text" fullWidth />
          <div>
            <Input clearable label="PinCode" placeholder="PinCode" initialValue="" type="text" width={300} />
          </div>
          <div>
          </div>
          <h4 className='p-0'>SubTotal: ₹{subtotal}</h4>
          <button className="flex text-white bg-green-600 border-0 py-2 md:px-6 px-4 focus:outline-none hover:bg-green-800 rounded">Pay ₹{subtotal}</button>
        </div>
      </form>
      <div className='bg-gray-800 rounded-lg inline-block px-5 h-4/5 overflow-y-auto my-10'>
        <h1 className='text-white'>Checkout</h1>
        <div className='flex items-center flex-col'>
          {Object.keys(cart).map((k) => {
            return (<li key={k} className="flex justify-between items-center py-2 w-full">
              <div className="flex md:justify-between justify-around space-x-2 border p-4 rounded-lg w-full">
                <div>
                  <Image className="rounded-xl" alt="ecommerce" src={cart[k].image} height={65} width={65} quality={100} objectFit={"cover"} />
                </div>
                <div className="flex flex-col space-x-1 text-white">
                  <div className="flex space-x-2">
                    <h4 className='mb-0'>{cart[k].name}</h4>
                    <h4 className='mb-0'>₹{cart[k].price}</h4>
                  </div>
                  <div className="flex space-x-2 text-gray-200">
                    <button onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].image) }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </button>

                    <button>{cart[k].qty}</button>

                    <button onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].image) }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            )
          })
          }
        </div>
      </div>
    </div>
  )
}

export default checkout
