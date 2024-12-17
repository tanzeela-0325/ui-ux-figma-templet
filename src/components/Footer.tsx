
import Image from "next/image"
import Twitter from "../public/1 (1).png";
import Facebook from "../public/2.png";
import Instagram from "../public/3.png";
import Githhub from "../public/4.png";
import Frame from "../public/Frame 45.png";
import { TbCopyrightFilled } from "react-icons/tb";
import Mutiple_box from "../public/Frame 53.png";

export default function Footer(){
    return(             

                  
        
        <div className="w-[1440px] h-auto lg:h-[589px] items-center bg-gray-200 mt-10">

                <div className="">
                    <Image src={Frame} alt="frame" width={1000} height={1000} className="w-[1241px] h-[180px] m-auto "/>
                </div>
            <div className="flex flex-row gap-[130px] ml-[30px] mt-[20px] mb-14 flex-wrap lg:flex-nowrap">
                

                <ul className="flex flex-col space-y-7 text-center lg:text-left">
                    <li className="text-[35px] font-bold"><h1><b>SHOP.CO</b></h1></li>
                    <li className="">We have clothes that suits your style and <br />
                        which you are proud to wear. From <br />
                        women to men.</li>
                    <li className="flex flex-row gap-4 justify-center lg:justify-start">
                      <Image src={Twitter} alt="Twitter" className=""/>
                      <Image src={Facebook} alt="Facebook" className=""/>
                      <Image src={Instagram} alt="Insragram" className=""/>
                      <Image src={Githhub} alt="Githhub" className=""/>   
                    </li>
                </ul>

                <ul className="flex flex-col space-y-4 text-center lg:text-left">
                    <li className="text-[20px]">Company</li>
                    <li className="text-gray-400">About</li>
                    <li className="text-gray-400">Features</li>
                    <li className="text-gray-400">Works</li>
                    <li className="text-gray-400">Career</li>
                </ul>

                <ul className="flex flex-col space-y-4 text-center lg:text-left">
                    <li className="text-[20px]">Help</li>
                    <li className="text-gray-400">Customer Support</li>
                    <li className="text-gray-400">Customer Support</li>
                    <li className="text-gray-400">Delivery Details</li>
                    <li className="text-gray-400">Terms & Conditions</li>
                    <li className="text-gray-400">Privacy Policy</li>
                </ul>
                

                <ul className="flex flex-col space-y-4 text-center lg:text-left">
                    <li className="text-[20px]">FAQ</li>
                    <li className="text-gray-400"> Account</li>
                    <li className="text-gray-400">Manage Deliveries</li>
                    <li className="text-gray-400">Orders</li>
                    <li className="text-gray-400">Payments</li>
                </ul>

                <ul className="flex flex-col space-y-4 text-center lg:text-left">
                    <li className="text-[20px]">Resources</li>  
                    <li className="text-gray-400">Free eBooks</li>
                    <li className="text-gray-400">Development Tutorial</li>
                    <li className="text-gray-400">How to - Blog</li>
                    <li className="text-gray-400">Youtube Playlist</li>
                </ul>
            </div>

                     {/* Copyright Section */}
            <div className="flex flex-col md:flex-row items-center gap-2 border-t border-t-gray-900 pt-4">
                <h2 className="text-zinc-500">Shop.co</h2>
                <p className="text-zinc-500"><TbCopyrightFilled /></p>
                <p className="font-light text-[16px] text-zinc-500"> 2000-2023, All Rights Reserved</p>
            
            <div className="flex mt-4 md:mt-0 md:ml-auto"><Image src={Mutiple_box} alt="Boxs"/></div>
            </div>
           
        </div>
    )
}

