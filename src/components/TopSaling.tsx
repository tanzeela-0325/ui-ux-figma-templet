import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { product_2 } from "@/app/data/cart-detail";



const star =[<FaStar size={20} key={1} />, <FaStar size={20} key={2} />, <FaStar size={20} key={3}/>, <FaStar  size={20} key={4}/>, <FaStar  size={20} key={5}/>]

export default function TopSalling() {
  return (
    <div className="w-full max-w-[1240px] mx-auto mt-24 px-4">
      <h1 className="lg:text-[46px] text-[32px] flex justify-center font-bold">
        <b>TOP SELLING</b>
      </h1>

      <div className="flex lg:flex-row flex-col gap-[20px] mt-6 justify-center">
        {product_2.map((product)=>(

              <div key={product.id} className="flex flex-col space-y-4 w-full sm:w-[295px] h-[444px] hover:scale-105  hover:bg-slate-50 transition-all cursor-pointer">
              <Image
                src={product.imageUrl}
                alt="img-01"
                width={1000}
                height={1000}
                className="w-full  h-[298px] rounded-2xl  object-cover"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-sm md:text-lg line-clamp-1 font-bold">{product.title}</p>
                <p className="flex text-yellow-400 gap-2 ">{star}  <span className="text-gray-400">5.0/5</span></p>
                <p className="text-sm md:text-xl font-bold">{product.price} <span className="text-gray-400 font-bold line-through">{product.old_price}</span></p>
              </div>
            </div>
        ))}
        
      </div>

      <button className="flex justify-center items-center border-[1px] border-slate-400 rounded-full px-6 py-2  mt-4 mx-auto text-sm md:text-base hover:scale-105  hover:bg-slate-50 transition-all cursor-pointer">
        View All
      </button>
    </div>
  );
}
