import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Product from '../models/Product'
import mongoose from 'mongoose'

const hooides = ({ products }) => {
  console.log(products);
  return (
    <>
      <section className="body-font md:mx-10">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center space-x-3">
            {Object.keys(products).map((item) => {
              return <Link key={products[item]._id} href={`/Products/${products[item].slug}`}>
                <div className="lg:w-72 md:w-60 w-44 md:p-4 md:shadow-lg my-3 cursor-pointer flex flex-col justify-center">
                  <a className="block relative rounded overflow-hidden">
                    <Image alt="ecommerce" className="object-cover object-center block" src={products[item].image} height={300} width={250} objectFit={"cover"} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font">{products[item].category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium m-0">{products[item].title}</h2>
                  <div>
                  <div className='flex space-x-2'>
                      <h2 className="text-gray-900 title-font md:text-lg font-medium m-0 text-base">₹{products[item].price}</h2>
                      <h2 className="text-gray-700 title-font md:text-lg font-medium m-0 text-base line-through">₹1999</h2>
                      <span className='text-green-600'>70% off</span>
                    </div>
                    </div>
                  </div>
                </div>
              </Link>
            })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONDO_URI)
  }
  const products = await Product.find({ category: "Hooides" })
  const hooide = {}
  for (let item of products) {
    if (item.title in hooide) {
      if(hooide[item.title].color.includes(item.color) && item.availableQty > 0 ){
          hooide[item.title].color.push(item.color)
      }
      if(hooide[item.title].size.includes(item.size) && item.availableQty > 0 ){
          hooide[item.title].size.push(item.size)
      }
    }
    else {
      hooide[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        hooide[item.title].color = [item.color]
        hooide[item.title].size = [item.size]
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(hooide)) }, // will be passed to the page component as props
  }
}

export default hooides
