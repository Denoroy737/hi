import React from "react";
import Link from 'next/link'
import { Dropdown, Popover } from "@nextui-org/react";
import Image from "next/image";

const Navbar = ({ logout, user, cart, addToCart, removeFromCart, cleanCart, saveCart, subtotal }) => {
    return (
        <div className="px-10 mx-auto sticky w-full top-0 bg-white z-50">
            <div className="flex justify-between py-3 md:py-0 items-center">
                <div className="">
                    <Link href="/">
                        <a>
                            <h2 className="text-black font-bold">Nova</h2>
                            {/* <Image src={"/../../public/logo.jpg"} alt={"logo"} height={100} width={200} /> */}
                        </a>
                    </Link>
                </div>
                <div>
                    <ul className="md:flex md:justify-between md:space-x-3 hidden">
                        <Link href={"/"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">Home</li></a></Link>
                        <Link href={"/tshirt"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">Men</li></a></Link>
                        <Link href={"/hooides"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">Women</li></a></Link>
                        <Link href={"/"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">Shop</li></a></Link>
                        <Link href={"/"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">Product</li></a></Link>
                    </ul>
                </div>
                <div className="flex items-center">
                    {/* cheack the user is logined or */}
                    {!user.value && <div><Link href="/signup"><a><div className="lg:inline-block hidden py-2 px-5 mx-2 text-black bg-gray-200 rounded-md">Join Now</div></a></Link>
                        <Link href="/login"><a><div className="lg:inline-block hidden py-2 px-5 mx-2 text-black bg-gray-200 rounded-md">Login</div></a></Link> </div>}
                    {user.value &&
                        <Popover>
                            <Popover.Trigger>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </Popover.Trigger>
                            <Popover.Content>
                                <div className="bg-[#16181a] rounded-lg">
                                    <Link href={'/MyAccount'}><div className="hover:bg-[#383c3f] text-white rounded-md w-56 py-2 px-4 text-start">My Account</div></Link>
                                    <Link href={'/orders'}><div className="hover:bg-[#24282b] text-white rounded-md w-56 py-2 px-4 my-1 text-start">My Orders</div></Link>
                                    <hr />
                                    <div className="hover:bg-[rgb(61,11,29)] text-[#f4256d] w-56 py-2 px-5 text-start" onClick={logout}>Logout</div>
                                </div>
                            </Popover.Content>
                        </Popover>
                    }
                    <div className="flex space-x-3">
                        <div className="lg:hidden block">
                            <Popover>
                                <Popover.Trigger>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                                                    <Link href={`http://localhost:3000/Products/${cart[k].title}`} key={k} className="flex justify-start items-center py-2 border-y my-2 ">
                                                        <div className="flex justify-start space-x-4 my-2 border-2 rounded-lg">
                                                            <div>
                                                                <Image className="rounded-xl" alt="ecommerce" src={cart[k].image} height={50} width={50} quality={100} objectFit={"cover"} />
                                                            </div>
                                                            <div className="flex flex-col space-x-1">
                                                                <h4 className="m-0">{cart[k].name}</h4>
                                                                <div className='flex justify-start space-x-5 items-center'>
                                                                    <div>
                                                                        <h4 className="m-0">Size: {cart[k].size}</h4>
                                                                    </div>
                                                                    <div className="flex space-x-2">
                                                                        {/* <button onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].image) }}>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                                                            </svg>
                                                                        </button> */}

                                                                        <h4 className="m-0">Qty: {cart[k].qty}</h4>

                                                                        {/* <button onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant, cart[k].image) }}>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                                                            </svg>
                                                                        </button> */}
                                                                    </div>
                                                                <h4 className="m-0">₹{cart[k].price}</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
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
                                                        {<button className={(subtotal === 0) ? "p-2 px-4 bg-green-700 text-sm rounded-sm text-white" : "p-2 px-4 bg-green-600 text-sm rounded-sm text-white disabled:bg-green-900"}>Checkout</button>}
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
