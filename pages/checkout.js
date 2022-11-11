import Head from 'next/head';
import Image from "next/image";
import React, { useState } from 'react';
import Script from 'next/script';
import { ToastContainer, toast } from 'react-toastify';

const Checkout = ({ cart, addToCart, removeFromCart, cleanCart, saveCart, subtotal }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [disabled, setDisabled] = useState(true)

  const handlechange = (e) => {
    const { name, value } = e.target;
    if (name === "Name") {
      setName(value);
      console.log(name, value);
      
    } else if (name === "Phone") {
      setPhone(value);
      console.log(name, value);
      
    } else if (name === "Email") {
      setEmail(value);
      console.log(name, value);
      
    } else if (name === "Address") {
      setAddress(value);
      console.log(name, value);
      
    } else if (name === "city") {
      setCity(value);
      console.log(name, value);
      
    } else if (name === "state") {
      setState(value);
      console.log(name, value);
      
    } else if (name === "pincode") {
      setPincode(value);
      console.log(name, value);
      
    }
    if (name.length > 3 && email.length > 3 && phone.length > 3 && address.length > 3 && pincode.length > 3) {
      setDisabled(false)
      console.log("disabled", disabled);
    }
    else {
      setDisabled(true)
      console.log("disabled", disabled);
    }
    console.log(name, value);
  }
  
  const initiatePayment = async () => {
    
    let oid = Math.floor(Math.random() * Date.now())
    let txnToken = await response.json();
    // get a Transaction token
    const data = { cart, subtotal, oid, email, name, address, phone, pincode };
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    })
    console.log(response)
    console.log(txnToken);
    console.log(1);

    let config = {
      root: "",
      flow: "checkout",
      data: {
        orderId: oid,
        token: txnToken,
        tokenType: "bearer",
        amount: subtotal,
      },
      handler: {
        notifyMerchant: function (eventName, data) {
          console.log(eventName, data);
          console.log("notifyMerchant handler function called.");
          console.log("data => ", data);
        }
      }
    }
    console.log(2);
    if (window.Paytm && window.Paytm.CheckoutJS) {
      // initialze configuration using init method
      window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
        // after successfully updating configuration, invoke checkoutjs
        window.Paytm.CheckoutJS.invoke();
      }).catch(function onError(error) {
        console.log("error => ", error);
      });
    }
    console.log(config);

  }

  return (
    <div className='md:m-10 flex md:justify-between md:flex-row flex-col mx-5 md:mx-16'>
      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      {/* <Script src={`${process.env.NEXT_PUBLIC_HOST}marchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} type='application/javascript' crossOrigin='anonymous' /> */}
      <Script type="application/javascript" crossorigin="anonymous" src="https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/lONpdE02797738015401.js" />
      {/* Checkout details form */}
      <ToastContainer />
      <form action="" className=''>
        <h1>Shopping</h1>
        <div className='md:w-[60rem] w-full space-y-5 '>
          <div className='md:flex md:space-x-5 md:space-y-0 space-y-5'>
            <div>
              <input onChange={handlechange} label="Name" placeholder="Name" type="text" id="Name" width={300} />
            </div>
            <div>
              <input onChange={handlechange} label="Email" placeholder="Email" type="email" id='Email' width={300} />
            </div>
          </div>
          <div className='md:flex md:space-x-5 md:space-y-0 space-y-5'>
            <div>
              <input onChange={handlechange} label="Phone" placeholder="Phone" type="number" id="Number" width={300} />
            </div>
            <div>
              <input onChange={handlechange} label="PinCode" placeholder="PinCode" type="text" id="Pincode" width={300} />
            </div>
          </div>
          <div className='md:flex items-center md:space-x-5'>
            <div>
              <input label="City" placeholder="City" type="text" width={300} />
            </div>
            <div>
              <input label="State" placeholder="State" type="text" width={300} />
            </div>
          </div>
          <textarea onChange={handlechange} className='border-2 border-gray-200' id="Adderes" label="Adderes" placeholder="Enter your Shipping Adderes" type="text" />
          <div>
          </div>
          <h4 className='p-0'>SubTotal: ₹{subtotal}</h4>
          <button onClick={initiatePayment} className="disabled:bg-green-200 flex text-white bg-green-600 border-0 py-2 md:px-6 px-4 focus:outline-none hover:bg-green-800 rounded">Pay ₹{subtotal}</button>
        </div>
      </form>
      <div className='bg-gray-800 rounded-lg inline-block px-5 h-4/5 overflow-y-auto my-10'>
        <h1 className='text-white'>Checkout</h1>
        <div className='flex items-center flex-col'>
          {Object.keys(cart).map((k) => {
            return (<li key={k} className="flex justify-between items-center py-2 w-full">
              <div className="flex md:justify-between justify-around space-x-2 border p-4 rounded-lg w-full">
                <div className="flex space-x-5 justify-start">
                  <div>
                    <Image className="rounded-xl" alt="ecommerce" src={cart[k].image} height={65} width={65} quality={100} objectFit={"cover"} />
                  </div>
                  <div className="flex flex-col space-x-1 text-white">
                    <div className="flex space-x-2 justify-between">
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

export default Checkout
