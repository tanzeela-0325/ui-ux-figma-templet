import Image from "next/image";
import stars from "../../public/Frame 39.png";
import SideBar from "./SidBar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PaginationDemo } from "./Pagination";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "./responsive-sidebar";
import { ProductData } from "@/app/data/cart-detail";



export default function Category(){
  return(
    <>
      <div className="max-w-[1240px] mx-auto">
        <SidebarProvider>
        <div className="block lg:hidden">
        <AppSidebar/>
        </div>
        <main>
          <div className="block lg:hidden">
            <SidebarTrigger/>
          </div>
        <div className="w-full flex gap-8  max-w-[1240px] mx-auto mt-8 px-6">
          <div className="hidden lg:block">
          <SideBar/>
          </div>
          {/* Section One */}
          <div>
          <div className="flex flex-row w-full h-auto px-8 justify-between mt-[20px] ">
            <h1 className="lg:text-[30px] text-[24px] font-bold"><b>Casual</b></h1>
              <div className="flex flex-row gap-[5px] space-x-3">
                <p className="lg:text-lg tex-[14px] text-gray-400 block sm:hidden">Showing 1-10 of 100 Products</p>
                <p className=" lg:flex flex-row lg:text-xl text-[14px] text-gray-400 sm:block hidden md:hidden">Sort by: <span className="font-bold text-black sm:block  hidden">Most Popular</span> <span className="sm:block hidden"><MdOutlineKeyboardArrowDown size={25} /></span></p>
              </div>
          </div>
         
          <div className="grid lg:grid-cols-3 grid-cols-2 grid-rows-3 gap-[20px] w-full  ">
           {ProductData.map((product)=>(

            <div key={product.id} className="flex flex-col space-y-4 w-full sm:w-[295px] h-[444px]    hover:scale-105  hover:bg-slate-50 transition-all cursor-pointer ">
            <Image
            src={product.imageUrl}
            alt="img-01"
            width={1000}
            height={1000}
            className="w-full h-[298px] object-cover"
            />
            <div className="flex flex-col space-y-2">
              <p className="text-xs">{product.name}</p>
              <Image src={stars} alt="stars" />
              <h2>{product.price}</h2>
            </div>
          </div>
           ))}
            
           </div>

            <div className="flex justify-center">
               <PaginationDemo/>
           </div>
            
           
          </div>
          
        </div>
        </main>
       </SidebarProvider>
      </div>
    </>
  )
}