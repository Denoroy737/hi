import Image from 'next/image'
import React from 'react'

const order = () => {
  return (<>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Hi</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order id: #20849</h1>
            <p className='text-green-500 '>Your order has been succesesfull placed.</p>
            <div className="flex mb-4  justify-between">
              <a className="py-2 text-lg px-1 text-black">Product Name</a>
              <a className="py-2 text-lg px-1 text-black">Quntity</a>
              <a className="py-2 text-lg px-1 text-black">Price</a>
            </div>
            <div className="flex border-y border-gray-200 py-2">
              <span className="text-gray-500">The Catcher in the Rye</span>
              <span className="ml-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">₹499.00</span>
            </div>
            <div className="flex border-y border-gray-200 py-2">
              <span className="text-gray-500">The Catcher in the Rye</span>
              <span className="ml-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">₹499.00</span>
            </div>
            <div className="flex border-y border-gray-200 py-2">
              <span className="text-gray-500">The Catcher in the Rye</span>
              <span className="ml-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">₹499.00</span>
            </div>
            <div className="flex my-7">
              <span className="title-font font-medium text-2xl text-gray-900">₹499.00</span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
              
            </div>
          </div>
          <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto object-cover rounded-lg md:ml-5" src="https://bit.ly/3PUcHud" objectPosition={"top"} height={400} width={400} />
        </div>
      </div>
    </section>
  </>
  )
}

export default order
