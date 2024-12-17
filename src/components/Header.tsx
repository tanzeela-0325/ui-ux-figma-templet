
import Image from "next/image";
import Link from "next/link";
import pic_1 from "../public/Cart1.png";
import pic_2 from "../public/Frame.png";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header(){
    return(
        <div>        
            <div className="flex flex-row justify-around md:justify-around gap-4 mb-[20px] h-[48px] w-[1440px] items-center bg-black text-white px-4 md:px-0">
                <div></div>
                <div>
                    <p className="text-[12px] md:text-[14px] text-center">Sign up and get 20% off your first order. <span className="font-bold underline"> Sign Up Now</span></p>
                </div>
                <div className="flex items-center">
                    <RxCross2 size={40} className="cursor-pointer" />
                </div>
            </div>

            <nav className="flex flex-col md:flex-row justify-around items-center w-[1440px] mx-auto border-b-2 pb-[20px] border-gray-300 px-4 md:px-8">
                <h1 className="font-bold text-[35px] md:text-[35px] mb-2 md:mb-0"><b>SHOP.CO</b></h1>

                <ul className="flex sm:flex-row flex-col gap-[10px] md:gap-8 items-center text-[30px] text-gray-500 md:text-[16px]">
                    <Link href="/">
                        <li className=" hover:text-blue-900 flex items-center">Shop <RiArrowDropDownLine size={25} /></li>
                    </Link>
                    <Link href="onsale">
                        <li className="hover:text-blue-900">On Sale</li>
                    </Link>
                    <Link href="newarrivals">
                        <li className="hover:text-blue-900">New Arrivals</li>
                    </Link>
                    <Link href="brands">
                        <li className="hover:text-blue-900">Brands</li>
                    </Link>
                </ul>

                <div className="flex flex-col md:flex-row  gap-[5px] mt-4 mb-[5px] md:mt-0">
                    <div
                        className='flex items-center w-full md:w-[557px] h-[40px] md:h-[48px] gap-4 bg-gray-100 px-4 py-2 rounded-full border focus-within:border-blue-600 focus-within:bg-transparent transition-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="15px" className="cursor-pointer fill-gray-400">
                            <path
                                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                            </path>
                        </svg>
                        <input type='text' placeholder='Search for Product'
                            className=' flex justify-center w-full text-sm bg-transparent rounded outline-none' />
                    </div>

                    <div className="flex flex-row items-center  gap-[20px]">
                        <Image src={pic_1} alt="Ecommerce icon" className="w-[24px] md:w-[32px] h-[24px] md:h-[32px]"/>
                        <Image src={pic_2} alt="contact-pic" className="hidden md:block"/>
                    </div>
                </div>
            </nav>
        </div>
    )
}
