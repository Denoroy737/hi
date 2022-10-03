import React from "react";
import Link from 'next/link'
import { Popover } from "@nextui-org/react";
import Image from "next/image";

const Navbar = ({ cart, addToCart, removeFromCart, cleanCart, saveCart, subtotal }) => {
    return (
        <div className="px-10 mx-auto sticky w-full top-0 bg-white z-50">
            <div className="flex justify-between py-3 md:py-0 items-center">
                <div className="">
                    <Link href="/">
                        <a>
                            HI
                            {/* <Image src={"/../../public/logo.jpg"} alt={"logo"} height={100} width={200} /> */}
                        </a>
                    </Link>
                </div>
                <div>
                    <ul className="md:flex md:justify-between md:space-x-3 hidden">
                        <Link href={"/"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">Home</li></a></Link>
                        <Link href={"/tshirt"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">T-shirt</li></a></Link>
                        <Link href={"/hooides"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">Hooides</li></a></Link>
                        <Link href={"/"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">Shop</li></a></Link>
                        <Link href={"/"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">Product</li></a></Link>
                    </ul>
                </div>
                <div className="flex items-center">
                    
                    <Link href="/signup"><a><div className="lg:inline-block hidden py-2 px-5 mx-2 text-black bg-gray-200 rounded-md">Join Now</div></a></Link>
                    <Link href="/login"><a><div className="lg:inline-block hidden py-2 px-5 mx-2 text-black bg-gray-200 rounded-md">Login</div></a></Link>
                    <div className="flex space-x-3">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> */}
                        <div className="lg:hidden block">
                            <Popover>
                                <Popover.Trigger>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </Popover.Trigger>
                                <Popover.Content>
                                    <ul className="list-none">
                                        <Link href={"/"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">Home</li></a></Link>
                                        <Link href={"/tshirt"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">T-shirt</li></a></Link>
                                        <Link href={"/hooides"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">Hooides</li></a></Link>
                                        <Link href={"/"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">Shop</li></a></Link>
                                        <Link href={"/"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">Product</li></a></Link>
                                    </ul>
                                </Popover.Content>
                            </Popover>
                        </div>
                        <div className="inline-block cursor-pointer">
                            <Popover>
                                <Popover.Trigger>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </Popover.Trigger>
                                <Popover.Content>
                                    <div className="py-5 px-3">
                                        <h3 className="md:text-left text-center font-bold">Shopping Cart</h3>
                                        {/* <h4>Your cart is Empty!</h4> */}
                                        <ol className="list-none m-0">
                                            {Object.keys(cart).length === 0 ? <h5>Your cart is Empty!</h5> : Object.keys(cart).map((k) => {
                                                return (
                                                    <li key={k} className="flex justify-between items-center py-2">
                                                        <div className="flex justify-between my-5 space-x-2">
                                                            <div>
                                                                <Image className="rounded-xl" alt="ecommerce" src={cart[k].image} height={50} width={50} quality={100} objectFit={"cover"} />
                                                            </div>
                                                            <div className="flex flex-col space-x-1">
                                                                <div className="flex  space-x-2">
                                                                    <h4>{cart[k].name}</h4>
                                                                    <h4>₹{cart[k].price}</h4>
                                                                </div>
                                                                <div className="flex space-x-2">
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
                                            }
                                            )}
                                        </ol>
                                        <p className="font-bold">Subtotal: ₹{subtotal}</p>
                                        <div className="flex space-x-1">
                                            <div>
                                                <Link href="/checkout">
                                                    <a>
                                                        {/* if cart.lenght is empty then disable then button */}
                                                        {<button className={(subtotal === 0) ? "p-2 px-4 bg-green-700 text-sm rounded-sm text-black" : "p-2 px-4 bg-green-600 text-sm rounded-sm text-black disabled:bg-green-900"}>Checkout</button>}
                                                    </a>
                                                </Link>
                                            </div>
                                            <div>
                                                <button onClick={cleanCart} className="p-2 px-4 bg-green-600 text-sm rounded-sm">Clear</button>
                                            </div>
                                        </div>
                                    </div>

                                </Popover.Content>
                            </Popover>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
