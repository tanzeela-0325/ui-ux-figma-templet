import Image from "next/image"
import stars from "../../public/Frame 10.png";
import { TiTick } from "react-icons/ti";
import { ProductData_2 } from "@/app/data/cart-detail";



export default function HappyCustomer(){
    return(
        <div className="w-full max-w-[1240px] mx-auto mt-8 px-1">

            <h1 className="lg:text-[46px] text-[32px] flex font-bold "><b>OUR HAPPY CUSTOMERS</b></h1>

            

           <div className="flex lg:flex-row flex-col mt-4 gap-[20px] ">
           
              {ProductData_2.map((product)=>(
                
                <div key={product.id} className="flex flex-col justify-between  border-[1px] border-gray-200 rounded-xl  hover:scale-105  hover:bg-slate-100 transition-all cursor-pointer w-full  h-[239px] px-[32px] py-[28px]">
                    
                    <Image src={stars} alt="star-log-01"/>
                    <div className="flex flex-row gap-2">
                        <div className="font-bold text-[20px]">{product.product_name}</div>
                        <div className="bg-green-600 w-[20px] h-[20px] rounded-full" ><span><TiTick size={20} color="white"/></span></div>
                    </div>
                    
                
                    <p  className="line-clamp-5 ">
                        {product.description}
                    </p>
                </div>

              ))}

                          </div> 
        </div>  
       
    )
}