import Image from "next/image";
import img_1 from "../public/Frame 33 (2).png";
import img_2 from "../public/Frame 34(1).png";
import img_3 from "../public/Frame 38.(1).png";
import img_4 from "../public/Frame 33.png";
import img_5 from "../public/Frame 34.png";
import img_6 from "../public/Frame 38.png";
import img_7 from "../public/Frame 32 (1).png";
import img_8 from "../public/Frame 90.png";
import img_9 from "../public/Frame 71.png";
import stars from "../public/Frame 39.png";
import price from "../public/Frame 44.png";
import SideBar from "./SidBar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PaginationDemo } from "./Pagination";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "./responsive-sidebar";


export default function Category(){
    return(
      <>
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
          <div className="flex flex-row justify-between mt-[20px]">
            <h1 className="lg:text-[30px] text-[24px] font-bold"><b>Casual</b></h1>
              <div className="flex flex-row gap-[5px] space-x-3">
                <p className="lg:text-lg tex-[14px] text-gray-400">Showing 1-10 of 100 Products</p>
                <p className=" lg:flex flex-row lg:text-xl text-[14px] text-gray-400 sm:block hidden">Sort by: <span className="font-bold text-black sm:block  hidden">Most Popular</span> <span className="sm:block hidden"><MdOutlineKeyboardArrowDown size={25} /></span></p>
              </div>
            </div>
         
          <div className="grid lg:grid-cols-3 grid-cols-2 grid-rows-3 gap-[20px]">
 
            {/* Card 01 */}
            <div className="flex flex-col space-y-4 w-full sm:w-[295px] h-[444px] ">
              <Image
              src={img_1}
              alt="img-01"
              width={1000}
              height={1000}
              className="w-full h-[298px] object-cover"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-xs">VERTICAL STRIPED SHIRT</p>
                <Image src={stars} alt="stars" />
                <h2>$145</h2>
              </div>
            </div>
            {/* Card 02 */}
            <div className="flex flex-col space-y-4 w-full sm:w-[295px] h-[444px]">
              <Image
              src={img_2}
              alt="img-02"
              width={1000}
              height={1000}
              className="w-full h-[298px] object-cover"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-xs">VERTICAL STRIPED SHIRT</p>
                <Image src={stars} alt="stars" />
                <h2>$180</h2>
              </div>
            </div>
            {/* Card 03 */}
            <div className="flex flex-col space-y-4 w-full sm:w-[295px] h-[444px]">
              <Image
              src={img_3}
              alt="img-03"
              width={1000}
              height={1000}
              className="w-full h-[298px] object-cover"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-xs">VERTICAL STRIPED SHIRT</p>
                <Image src={stars} alt="stars" />
                <Image src={price} alt="prices" />
              </div>
            </div>
            {/* Card 04 */}
            <div className="flex flex-col space-y-4 w-full sm:w-[295px] h-[444px] ">
              <Image
              src={img_4}
              alt="img-04"
              width={1000}
              height={1000}
              className="w-full h-[298px] object-cover"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-xs">VERTICAL STRIPED SHIRT</p>
                <Image src={stars} alt="stars" />
                <Image src={price} alt="prices" />
              </div>
            </div>
            {/* Card 05 */}
            <div className="flex flex-col space-y-4 w-full sm:w-[295px] h-[444px]">
              <Image
              src={img_5}
              alt="img-05"
              width={1000}
              height={1000}
              className="w-full h-[298px] object-cover"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-xs">VERTICAL STRIPED SHIRT</p>
                <Image src={stars} alt="stars" />
                <h2>$180</h2>
              </div>
            </div>
            {/* Card 06 */}
            <div className="flex flex-col space-y-4 w-full sm:w-[295px] h-[444px]">
              <Image
              src={img_6}
              alt="img-06"
              width={1000}
              height={1000}
              className="w-full h-[298px] object-cover"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-xs">VERTICAL STRIPED SHIRT</p>
                <Image src={stars} alt="stars" />
                <Image src={price} alt="prices" />
              </div>
            </div>
            {/* Card 07 */}
            <div className=" lg:flex-col space-y-4 w-full sm:w-[295px] h-[444px] lg:block hidden">
              <Image
              src={img_7}
              alt="img-07"
              width={1000}
              height={1000}
              className="w-full h-[298px] object-cover"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-xs">VERTICAL STRIPED SHIRT</p>
                <Image src={stars} alt="stars" />
                <Image src={price} alt="prices" />
              </div>
            </div>
            {/* Card 08 */}
            <div className=" flex-col space-y-4 w-full sm:w-[295px] h-[444px] lg:block hidden">
              <Image
              src={img_8}
              alt="img-08"
              width={1000}
              height={1000}
              className="w-full h-[298px] object-cover"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-xs">VERTICAL STRIPED SHIRT</p>
                <Image src={stars} alt="stars" />
                <h2>$145</h2>
              </div>
            </div>
            {/* Card 09 */}
            <div className=" flex-col space-y-4 w-full sm:w-[295px] h-[444px] lg:block hidden">
              <Image
              src={img_9}
              alt="img-09"
              width={1000}
              height={1000}
              className="w-full h-[298px] object-cover"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-xs">VERTICAL STRIPED SHIRT</p>
                <Image src={stars} alt="stars" />
                <h2>$80</h2>
              </div>
             </div>
            </div>

            <div className="flex justify-center">
               <PaginationDemo/>
           </div>
            
           
          </div>
          
        </div>
        </main>
      </SidebarProvider>
    </>
    )
}