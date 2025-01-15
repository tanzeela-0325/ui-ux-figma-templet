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

                {/*<div className="flex flex-col space-y-4 border-[1px] border-gray-200 rounded-xl w-full h-auto py-5 px-6">
                   <Image src={stars_1} alt="star-log-02"/>
                   <Image src={brand_2} alt="brabd-log-02" />

                   <p>Finding clothes that align with my personal <br />
                     style used to be a challenge until I discovered <br />
                     Shop.co. The range of options they offer is truly <br />
                     remarkable, catering to a variety of tastes and <br />
                     occasions.
                    </p>
                </div>

                <div className="flex flex-col space-y-4 border-[1px] border-gray-200 rounded-xl w-full h-auto py-5 px-4">
                   <Image src={stars_1} alt="star-log-02"/>
                   <Image src={brand_3} alt="brand-log-03" />

                   <p>As someone whos always on the lookout for <br />
                     unique fashion pieces, I am thrilled to have <br />
                     stumbled upon Shop.co. The selection of  <br />
                     clothes is not only diverse but also on-point <br />
                     with the latest trends.
                    </p>
                </div>*/}
            </div> 
        </div>  
       
    )
}