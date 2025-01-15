import Image from "next/image";
import { products } from "@/app/data/cart-detail";
import { FaStar } from "react-icons/fa";

const star =[  <FaStar size={20} key={1}/>, <FaStar size={20} key={2}/>, <FaStar size={20} key={3} />, <FaStar size={20}  key={4}/>, <FaStar size={20} key={5} />]
export default function NewArrival() {
    return (
        <div className="w-full max-w-[1240px] mx-auto mt-5 px-4">
            <h1 className="text-[28px] md:text-[35px] lg:text-[40px] flex justify-center font-bold">
                <b>NEW ARRIVALS</b>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {products.map((product)=>(

                    <div key={product.id} className="flex flex-col space-y-4  rounded-3xl  hover:scale-105  hover:bg-slate-50 transition-all cursor-pointer">
                    <Image src={product.imageUrl} alt="img-01" width={1000} height={1000} className="w-full h-auto " />
                    <div className="flex flex-col space-y-2 px-4">
                        <p className="text-sm md:text-lg line-clamp-1 font-bold">{product.title}</p>
                        <p className="flex text-yellow-400 gap-2">{star}</p>
                        <p className="text-lg md:text-xl font-bold">{product.price} <span className="text-gray-400 font-bold line-through">{product.old_price}</span></p>
                    </div>
                </div>
                ))}
                
            </div>

            <button className="flex justify-center items-center border-[1px] border-slate-400 rounded-full px-6 py-2  mt-8 mx-auto text-sm md:text-base hover:scale-105  hover:bg-slate-50 transition-all cursor-pointer">
                View All
            </button>
        </div>
    );
}
