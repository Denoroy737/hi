import { NextUIProvider } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import "../styles/globals.css";
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const router = useRouter();
  let newcart = { ...cart };


  useEffect(() => {
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
        saveCart(JSON.parse(localStorage.getItem('cart')));
      }
    } catch (error) {
      // console.log(error);
      localStorage.removeItem('cart');
    }
  }, []);
  
  const saveCart = (cart) => {
    // add subtotal to cart conver price to number
    // fix the nan error
    let subtotal = 0;
    localStorage.setItem('cart', JSON.stringify(cart));
    let keys = Object.keys(cart);
    for (let i = 0; i < keys.length; i++) {
      subtotal += cart[keys[i]].price * cart[keys[i]].qty;
    } 
    setSubtotal(subtotal);
    // console.log(subtotal);
  }

  const addToCart = (item, qty, price, name, size, variant, image) => {
    let newCart = { ...cart };
    if (item in cart) {
      newCart[item].qty = cart[item].qty + qty;
      // console.log(qty + " after added +1 in a cart qty");
    }
    else {
      newCart[item] = { qty: 1, price, name, size, variant, image };
      // console.log(newCart + "after created new cart");
    }
    // console.log(newCart + "after save cart");
    setCart(newCart);
    saveCart(newCart);

  }

  const removeFromCart = (item, qty, price, name, size, variant, image) => {
    let newCart = JSON.parse(localStorage.getItem('cart'));
    if (item in cart) {
      newCart[item].qty = cart[item].qty - qty;
      // console.log(qty + " after -1 in a cart qty");
    }
    if (newCart[item]["qty"] <= 0) {
      delete newCart[item];
      // console.log(qty + " after deleted item of cart");
    }
    setCart(newCart);
    saveCart(newCart);
  }

  const cleanCart = () => {
    setCart({});
    saveCart({});
  }

  const buyNow = (item, qty, price, name, size, variant, image) => {
    let newCart = {item: {  qty: 1, price, name, size, variant, image }};
    setCart(newCart);
    saveCart(newCart);
    router.push('/checkout');
  }


  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Navbar key={subtotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} cleanCart={cleanCart} saveCart={saveCart} subtotal={subtotal} />
      <Component cart={cart} buyNow={buyNow} addToCart={addToCart} removeFromCart={removeFromCart} cleanCart={cleanCart} saveCart={saveCart} subtotal={subtotal} {...pageProps} />
      <Footer />
    </NextUIProvider>
  );
}

export default MyApp;