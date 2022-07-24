// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import "../styles/globals.css";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </NextUIProvider>
  );
}

export default MyApp;
