import React from "react";
import Link from 'next/link'
import { Popover } from "@nextui-org/react";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="px-10 mx-auto sticky w-full top-0 bg-white z-10">
            <div className="flex justify-between py-3 md:py-0 items-center">
                <div className="">
                    {/* <Image src={"/../../public/logo.svg"} alt={"logo"} height={50} width={200} /> */}
                    logo
                </div>
                <div>
                    <ul className="md:flex md:justify-between md:space-x-3 hidden ">
                        <Link href={"/"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">HOME</li></a></Link>
                        <Link href={"tshirt"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">MEN</li></a></Link>
                        <Link href={"/"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">WOMEN</li></a></Link>
                        <Link href={"/"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">SHOP</li></a></Link>
                        <Link href={"/"}><a><li className="py-2.5 px-3 hover:bg-gray-200 text-black m-0 rounded-lg">PRODUCTS</li></a></Link>
                    </ul>
                </div>
                <div className="">
                    <div className="lg:block hidden">Join Now</div>
                    <div className="flex space-x-3">
                        <div className="lg:hidden block">
                            <Popover>
                                <Popover.Trigger>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </Popover.Trigger>
                                <Popover.Content>
                                    <Link href={"/"}><a><li className="list-none py-2.5 px-3 m-0 hover:bg-gray-200 rounded-lg">HOME</li></a></Link>
                                    <Link href={"/"}><a><li className="list-none py-2.5 px-3 m-0 hover:bg-gray-200 rounded-lg">MEN</li></a></Link>
                                    <Link href={"/"}><a><li className="list-none py-2.5 px-3 m-0 hover:bg-gray-200 rounded-lg">WOMEN</li></a></Link>
                                    <Link href={"/"}><a><li className="list-none py-2.5 px-3 m-0 hover:bg-gray-200 rounded-lg">SHOP</li></a></Link>
                                    <Link href={"/"}><a><li className="list-none py-2.5 px-3 m-0 hover:bg-gray-200 rounded-lg">PRODUCTS</li></a></Link>
                                </Popover.Content>
                            </Popover>
                        </div>
                        <div className="lg:hidden block">
                            <Popover>
                                <Popover.Trigger>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </Popover.Trigger>
                                <Popover.Content>
                                    <div className="py-5 px-3">
                                        <h2 className="text-center">Shopping Cart</h2>
                                        <h3>Your cart is Empty!</h3>
                                        <p className="font-bold">Subtotal: ₹0</p>
                                        <div className="flex space-x-1">
                                            <div>
                                                <button className="p-2 px-4 bg-green-600 text-sm rounded-sm">Checkout</button>
                                            </div>
                                            <div>
                                                <button className="p-2 px-4 bg-green-600 text-sm rounded-sm">Cart</button>
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
