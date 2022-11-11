import Image from "next/image"

const ProductCard = () => {
    let products 
    return (
    <div className="lg:w-72 md:w-60 w-44 md:p-4 md:shadow-lg my-3 cursor-pointer flex flex-col justify-center items-center">
        <a className="block relative rounded-md overflow-hidden">
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
    )
}
export default ProductCard