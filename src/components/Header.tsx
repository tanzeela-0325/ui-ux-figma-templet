import Image from "next/image";
import Link from "next/link";
import pic_1 from "../../public/Cart1.png";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineSearch } from "react-icons/md";
import { SheetSide } from "../components/sheet";
import { IoMdContact } from "react-icons/io";


export default function Header(){
    return(
        <div> 
            {/* HeadeLine Section */}
            <div className="flex flex-row justify-around sm:justify-between md:justify-around md:gap-6 gap-2 mb-[20px] h-[48px] w-full items-center bg-black text-white px-4 md:px-0 relative">
                <div></div>
                <div>
                    <p className="text-[10px] md:text-[14px]  text-center font-serif">Sign up and get 20% off your first order. <span className="font-bold underline sm:text-sm text-[10px] pl-2"> Sign Up Now</span></p>
                </div>
                <div className="flex items-center">
                    <RxCross2 size={25} className="cursor-pointer absolute right-10 sm:block hidden " />
                </div>
            </div>

            {/* NevBar Section */}
            <nav className="flex flex-row justify-around  pb-[20px] sm:pr-[30px] md:items-center  h-[34px] w-full border-b-2 sm:pb-[35px] sm:pt-[20px] border-gray-300 sm:px-4 md:px-8">
               <div className="flex flex-row items-center sm:p-0">
                   < SheetSide/> 
                   <h1 className="font-bold text-xl md:text-[35px] sm:mb-2 md:mb-0 sm:pl-2 sm:left-2 pl-2 "><b>SHOP.CO</b></h1>
                </div>

                <ul className="md:flex sm:flex-row flex-col hidden  lg:gap-7 sm:gap-[20px] md:gap-2 items-center text-[30px] text-gray-500 md:text-[16px]">
                    <Link href="/">
                        <li className=" hover:text-blue-900 flex items-center hover:scale-105   transition-all cursor-pointer">Shop <RiArrowDropDownLine size={25} /></li>
                    </Link>
                    <Link href="/Products">
                        <li className="hover:text-blue-900 hover:scale-105   transition-all cursor-pointer">Products</li>
                    </Link>
                    <Link href="/catagorys">
                        <li className="hover:text-blue-900 hover:scale-105   transition-all cursor-pointer">Catagorys</li>
                    </Link>
                    <Link href="/Carts">
                        <li className="hover:text-blue-900 hover:scale-105   transition-all cursor-pointer">Carts</li>
                    </Link>
                </ul>

                <div className="flex flex-row sm:gap-[10px] gap-4 items-center sm:mt-4 md:mb-[5px] md:mt-0">
                   
                    <div className="relative">
                        <input type="text" placeholder="Search for Product" className="w-[557px] pl-10 md:h-[48px] xl:block hidden rounded-full bg-gray-200 placeholder:pl-10 mr-[5px] "/>
                       <p className="xl:absolute top-2 xl:left-2"> <MdOutlineSearch size={30} /></p>
                    </div>

                    <div className="flex flex-row items-center gap-4 lg:gap-5">
                        <Link href={"carts"}><Image src={pic_1} alt="Ecommerce icon"  className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] hover:scale-105  transition-all cursor-pointer" /></Link>
                        <IoMdContact size={30} />
                    </div>
                </div>
            </nav>
        </div>
    )
}
