import { BsSliders2Vertical } from "react-icons/bs";
import { LuChevronRight } from "react-icons/lu";
import { MdKeyboardArrowUp } from "react-icons/md";
import { SliderDemo } from "./Slider";
import { CheckboxDemo } from "./ChackBox";


export default function SideBar() {
  return (
    <>
    <div className="lg:w-[295px] lg:space-y-6 space-y-4 border-[1px] lg:px-8  pt-6 max-w-[295px]  border-gray-200 rounded-lg 
      lg:h-[1220px] md:max-w-[260px] sm:max-w-[200px] sm:px-4 w-full h-auto px-4 ">
      <div className="flex flex-row justify-between lg:items-center ">
        <h1 className="text-[30px] font-bold text-lg sm:text-base">
          <b>Filters</b>
        </h1>
        <p>
          <BsSliders2Vertical size={25} className="sm:text-sm" />
        </p>
      </div>
      <ul className="space-y-6  ">
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
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-[30px] font-bold text-lg sm:text-base">
          <b>Price</b>
        </h1>
        <p>
          <MdKeyboardArrowUp size={25} className="sm:text-sm" />
        </p>
      
      </div>
      <div>
      <SliderDemo/>
      </div>
      
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-[30px] font-bold text-lg sm:text-base">
          <b>Colors</b>
        </h1>
        <p>
          <MdKeyboardArrowUp size={25} className="sm:text-sm" />
        </p>
      </div>
      <div>
      <CheckboxDemo/>
      </div>
   
      <div className="flex flex-row justify-between">
        <h1 className="text-[30px] font-bold text-lg sm:text-base">
          <b>Size</b>
        </h1>
        <p>
          <MdKeyboardArrowUp size={20} className="sm:text-sm" />
        </p>
      </div>
      <div className="grid lg:grid-cols-2 items-center  grid-rows-3 lg:grid-rows-5 grid-cols-3 lg:gap-[10px] gap-[25px] sm:grid-cols-1 ">
        <button className="w-[96px] h-[39px] rounded-full bg-gray-300 hover:bg-black hover:text-white sm:w-full">
          XX-Small
        </button>
        <button className="w-[88px] h-[39px] rounded-full bg-gray-300 hover:bg-black hover:text-white sm:w-full">
          X-Small
        </button>
        <button className="w-[74px] h-[39px] rounded-full bg-gray-300 hover:bg-black hover:text-white sm:w-full">
          Small
        </button>
        <button className="w-[90px] h-[39px] rounded-full bg-gray-300 hover:bg-black hover:text-white sm:w-full">
          Medium
        </button>
        <button className="w-[76px] h-[39px] rounded-full bg-gray-300 hover:bg-black hover:text-white sm:w-full">
          Large
        </button>
        <button className="w-[89px] h-[39px] rounded-full bg-gray-300 hover:bg-black hover:text-white sm:w-full">
          X-Large
        </button>
        <button className="w-[98px] h-[39px] rounded-full bg-gray-300 hover:bg-black hover:text-white sm:w-full">
          XX-Large
        </button>
        <button className="w-[97px] h-[39px] rounded-full bg-gray-300 hover:bg-black hover:text-white sm:w-full">
          3X-Large
        </button>
        <button className="w-[98px] h-[39px] rounded-full bg-gray-300 hover:bg-black hover:text-white sm:w-full">
          4X-Large
        </button>
      </div>
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
      <button className="bg-black text-white rounded-full w-full h-[48px]  md:w-full  hover:scale-105   transition-all cursor-pointer">
        Apply Filter
      </button>
    </div>


    </>
  );
}
