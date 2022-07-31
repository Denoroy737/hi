import { NextUIProvider } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import "../styles/globals.css";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

const _app = (Component, ...pageProps) => {

    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        try {
        if (localStorage.getItem('cart')) {
            setCart(JSON.parse(localStorage.getItem('cart')));
        }
        } catch (error) {
        console.log(error);
        localStorage.removeItem('cart');
        }
    }, []);


    const saveCart = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
        let subtotal = 0;
        cart.forEach(item => {
        subtotal += item.price;
        }
        );
        setSubtotal(subtotal);
    }

    const addToCart = (item, qty, price, name, size, variant, image) => {
        let newCart = cart;
        if (item in cart) {
        newCart[item].qty + qty;
        }
        else {
        newCart[item] = { qty: 1, price, name, size, variant, image };
        }
        setCart(newCart);
        saveCart(newCart);
    }

    const removeFromCart = (item, qty, price, name, size, variant, image) => {
        let newCart = cart;
        if (item in cart) {
        newCart[item].qty - qty;
        }
        if (newCart[item].qty <= 0) {
        delete newCart[item];
        }
        setCart(newCart);
        saveCart(newCart);
    }

    const cleanCart = () => {
        setCart({});
        saveCart({});
    }

  return (
    <NextUIProvider>
      <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} cleanCart={cleanCart} saveCart={saveCart} subtotal={subtotal} />
      <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} cleanCart={cleanCart} saveCart={saveCart} subtotal={subtotal} {...pageProps} />
      <Footer />
    </NextUIProvider>
  );
}



export default _app