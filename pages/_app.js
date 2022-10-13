import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import "../styles/globals.css";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';



function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(true);
  const [progress, setProgress] = useState(0)
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })

    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
        saveCart(JSON.parse(localStorage.getItem('cart')));
      }
    } catch (error) {
      // console.log(error);
      localStorage.removeItem('cart');
    }
    
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }
    console.log("Hello im use effect");
  }, [router.events, router.query]);


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
    let newCart = { item: { qty: 1, price, name, size, variant, image } };
    setCart(newCart);
    saveCart(newCart);
    router.push('/checkout');
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser({ value: null })
    setKey(Math.random());
    router.push('/');
  }


  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)} />
      <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} cleanCart={cleanCart} saveCart={saveCart} subtotal={subtotal} />
      <Component cart={cart} buyNow={buyNow} addToCart={addToCart} removeFromCart={removeFromCart} cleanCart={cleanCart} saveCart={saveCart} subtotal={subtotal} {...pageProps} />
      <Footer />
    </NextUIProvider>
  );
}

export default MyApp;