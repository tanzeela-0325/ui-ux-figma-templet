import Image from "next/image";
import { BsSliders2Vertical } from "react-icons/bs";
import { LuChevronRight } from "react-icons/lu";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";
import pic_1 from "../public/Group 7.png";

export default function SideBar(){
    return(
        <div className=" space-y-5 border-[1px] h-[1220px] px-6 pt-5 max-w-[295px] border-gray-200 rounded-lg "> 
            <div className="flex flex-row justify-between items-center ">
                <h1 className="text-[30px] font-bold"><b>Filters</b></h1>
                <p><BsSliders2Vertical  size={25}/></p>
            </div>
            <ul className="space-y-6">
                <li className="flex flex-row justify-between w-[247px] h-[16px]">
                    T-shirts <LuChevronRight size={20} />
                </li>
                <li className=" flex flex-row justify-between w-[247px] h-[16px]">
                    Shorts <LuChevronRight size={20} />
                </li>
                <li className="flex flex-row justify-between w-[247px] h-[16px]">
                    Shirts <LuChevronRight size={20} />
                </li>
                <li className="flex flex-row justify-between w-[247px] h-[16px]">
                    Hoodie <LuChevronRight size={20} />
                </li>
                <li className="flex flex-row justify-between w-[247px] h-[16px]">
                    Jeans <LuChevronRight size={20} />
                </li>
                
            </ul>
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-[30px] font-bold"><b>Price </b></h1>
                <p><MdKeyboardArrowUp size={25}/></p> 
            </div>
            <div>
              <Image src={pic_1} alt="pic-01" className="w-[247px] h-[43px]"/>
            </div>
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-[30px] font-bold"><b>Colors</b></h1>
                <p> <MdKeyboardArrowUp size={25}/></p>

            </div>
            <div className="grid grid-rows-2 grid-cols-5 gap-[10px] w-[247px] h-[90px]">
                <div className="w-[37px] h-[37px] rounded-full bg-[#00C12B] border-gray-500 border-[1px]"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-[#F50606]  border-gray-500 border-[1px]"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-[#F5DD06] border-gray-500 border-[1px]"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-[#F57906] border-gray-500 border-[1px]"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-[#06CAF5]  border-gray500 border-[1px]" ></div>
                <div className="w-[37px] h-[37px] rounded-full bg-blue-800 border-gray-500 border-[1px]"><span><IoIosCheckmark size={37} color="white"/></span></div>
                <div className="w-[37px] h-[37px] rounded-full bg-[#7D06F5] border-gray-500 border-[1px]"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-[#F506A4]  border-gray-500 border-[1px]"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-[#FFFFFF] border-gray-400 border-[1px]"></div>
                <div className="w-[37px] h-[37px] rounded-full bg-[#000000]  border-gray-500 border-[1px]"></div>
            </div>
            <div className="flex flex-row justify-between">
            <h1 className="text-[30px] font-bold"><b>Size</b></h1>
            <p> <MdKeyboardArrowUp size={20}/></p>
            </div>
            <div className="grid grid-cols-2 grid-rows-5 gap-[10px]">
                <button className="w-[96px] h-[39px] rounded-full bg-gray-300">XX-Small</button>
                <button className="w-[88px] h-[39px] rounded-full bg-gray-300">X-Small</button>
                <button className="w-[74px] h-[39px] rounded-full bg-gray-300">Small</button>
                <button className="w-[90px] h-[39px] rounded-full bg-gray-300">Medium</button>
                <button className="w-[76px] h-[39px] rounded-full text-white bg-black">Large</button>
                <button className="w-[89px] h-[39px] rounded-full bg-gray-300">X-Large</button>
                <button className="w-[98px] h-[39px] rounded-full bg-gray-300">XX-Large</button>
                <button className="w-[97px] h-[39px] rounded-full bg-gray-300">3X-Large</button>
                <button className="w-[98px] h-[39px] rounded-full bg-gray-300">4X-Large</button>
            </div>
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-[30px] font-bold"><b>Dress Style</b> </h1>
              <p><MdKeyboardArrowUp size={25} /></p>
            </div>
            <ul className=" space-y-6">
                <li className="flex flex-row justify-between w-[247px] h-[16px]">
                    Casual <LuChevronRight size={20} />
                </li>
                <li className="flex flex-row justify-between w-[247px] h-[16px]">
                    Formal <LuChevronRight  size={20}/>
                </li>
                <li className="flex flex-row justify-between w-[247px] h-[16px]">
                     Party <LuChevronRight size={20}/>
                </li>
                <li className="flex flex-row justify-between w-[247px] h-[16px]">
                    Gym <LuChevronRight size={20} />
                </li>
                
              </ul>
              
                <button className=" text-white bg-black rounded-full w-[247px] h-[48px]">Apply Filter</button>
              
          
        </div>
    )
}