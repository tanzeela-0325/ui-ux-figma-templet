
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { BsSliders2Vertical } from "react-icons/bs"
import { LuChevronRight } from "react-icons/lu"
import { MdKeyboardArrowUp } from "react-icons/md"
import pic_1 from "../../public/Group 7.png";
import { IoIosCheckmark } from "react-icons/io"




export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            
                 <div className="flex flex-row justify-between lg:items-center ">
                   <h1 className="text-[30px] font-bold text-lg sm:text-base">
                     <b>Filters</b>
                   </h1>
                   <p>
                     <BsSliders2Vertical size={25} className="sm:text-sm" />
                   </p>
                 </div>
                 <ul className="space-y-6 ">
                   <li className="flex flex-row justify-between w-[247px] h-[16px] md:w-full">
                     T-shirts <LuChevronRight size={20} />
                   </li>
                   <li className="flex flex-row justify-between w-[247px] h-[16px] md:w-full">
                     Shorts <LuChevronRight size={20} />
                   </li>
                   <li className="flex flex-row justify-between w-[247px] h-[16px] md:w-full">
                     Shirts <LuChevronRight size={20} />
                   </li>
                   <li className="flex flex-row justify-between w-[247px] h-[16px] md:w-full">
                     Hoodie <LuChevronRight size={20} />
                   </li>
                   <li className="flex flex-row justify-between w-[247px] h-[16px] md:w-full">
                     Jeans <LuChevronRight size={20} />
                   </li>
                 </ul>

          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
            <SidebarContent>
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-[30px] font-bold text-lg sm:text-base">
                <b>Price</b>
              </h1>
              <p>
                 <MdKeyboardArrowUp size={25} className="sm:text-sm" />
               </p>
             </div>
             <div>
             <Image
               src={pic_1}
               alt="pic-01"
                className="w-[247px] h-[43px] md:w-full md:h-auto"
              />
            </div>
            </SidebarContent>
        </SidebarGroup>

        <SidebarGroup>
            <SidebarContent>
                     <div className="flex flex-row justify-between items-center">
                        <h1 className="text-[30px] font-bold text-lg sm:text-base">
                          <b>Colors</b>
                        </h1>
                        <p>
                          <MdKeyboardArrowUp size={25} className="sm:text-sm" />
                        </p>
                      </div>
                      <div className="grid lg:grid-rows-2 grid-rows-2 lg:grid-cols-5 grid-cols-7 gap-4 sm:gap-[25px] sm:grid-cols-3 md:grid-cols-4">
                        <div className="w-[37px] h-[37px] rounded-full bg-[#00C12B] border-gray-500 border-[1px]"></div>
                        <div className="w-[37px] h-[37px] rounded-full bg-[#F50606] border-gray-500 border-[1px]"></div>
                        <div className="w-[37px] h-[37px] rounded-full bg-[#F5DD06] border-gray-500 border-[1px]"></div>
                        <div className="w-[37px] h-[37px] rounded-full bg-[#F57906] border-gray-500 border-[1px]"></div>
                        <div className="w-[37px] h-[37px] rounded-full bg-[#06CAF5] border-gray500 border-[1px]"></div>
                        <div className="w-[37px] h-[37px] rounded-full bg-blue-800 border-gray-500 border-[1px]">
                          <span>
                            <IoIosCheckmark size={37} color="white" />
                          </span>
                        </div>
                        <div className="w-[37px] h-[37px] rounded-full bg-[#7D06F5] border-gray-500 border-[1px]"></div>
                        <div className="w-[37px] h-[37px] rounded-full bg-[#F506A4] border-gray-500 border-[1px]"></div>
                        <div className="w-[37px] h-[37px] rounded-full bg-[#FFFFFF] border-gray-400 border-[1px]"></div>
                        <div className="w-[37px] h-[37px] rounded-full bg-[#000000] border-gray-500 border-[1px]"></div>
                      </div>
            </SidebarContent>
        </SidebarGroup>

        <SidebarGroup>
            <SidebarContent>
            <div className="flex flex-row justify-between">
        <h1 className="text-[30px] font-bold text-lg sm:text-base">
          <b>Size</b>
        </h1>
        <p>
          <MdKeyboardArrowUp size={20} className="sm:text-sm" />
        </p>
      </div>
      <div className="grid lg:grid-cols-2 items-center  grid-rows-3 lg:grid-rows-5 grid-cols-3 lg:gap-[10px] gap-[25px] sm:grid-cols-1">
        <button className="w-[96px] h-[39px] rounded-full bg-gray-300 sm:w-full">
          XX-Small
        </button>
        <button className="w-[88px] h-[39px] rounded-full bg-gray-300 sm:w-full">
          X-Small
        </button>
        <button className="w-[74px] h-[39px] rounded-full bg-gray-300 sm:w-full">
          Small
        </button>
        <button className="w-[90px] h-[39px] rounded-full bg-gray-300 sm:w-full">
          Medium
        </button>
        <button className="w-[76px] h-[39px] rounded-full text-white bg-black sm:w-full">
          Large
        </button>
        <button className="w-[89px] h-[39px] rounded-full bg-gray-300 sm:w-full">
          X-Large
        </button>
        <button className="w-[98px] h-[39px] rounded-full bg-gray-300 sm:w-full">
          XX-Large
        </button>
        <button className="w-[97px] h-[39px] rounded-full bg-gray-300 sm:w-full">
          3X-Large
        </button>
        <button className="w-[98px] h-[39px] rounded-full bg-gray-300 sm:w-full">
          4X-Large
        </button>
      </div>
            </SidebarContent>
        </SidebarGroup>

        <SidebarGroup>
            <SidebarContent>
            <div className="flex flex-row justify-between items-center">
        <h1 className="text-[30px] font-bold text-lg sm:text-base">
          <b>Dress Style</b>
        </h1>
        <p>
          <MdKeyboardArrowUp size={25} className="sm:text-sm" />
        </p>
      </div>
      <ul className="space-y-6">
        <li className="flex flex-row justify-between w-[247px] h-[16px] md:w-full">
          Casual <LuChevronRight size={20} />
        </li>
        <li className="flex flex-row justify-between w-[247px] h-[16px] md:w-full">
          Formal <LuChevronRight size={20} />
        </li>
        <li className="flex flex-row justify-between w-[247px] h-[16px] md:w-full">
          Party <LuChevronRight size={20} />
        </li>
        <li className="flex flex-row justify-between w-[247px] h-[16px] md:w-full">
          Gym <LuChevronRight size={20} />
        </li>
      </ul>
      <button className="text-white bg-black rounded-full w-full h-[48px]  md:w-full">
        Apply Filter
      </button>
            </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
