
import Image from "next/image"
import Twitter from "../../public/1 (1).png";
import Facebook from "../../public/2.png";
import Instagram from "../../public/3.png";
import Githhub from "../../public/4.png";
import { TbCopyrightFilled } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import Mutiple_box from "../../public/Frame 53.png";

export default function Footer(){
    return(             

                  
        
        <div className=" w-full h-auto lg:h-[589px] items-center bg-gray-200 mt-10">

                <main className="w-full flex justify-center items-center">
                    
                    <div className="w-[80%] sm:h-[150px] h-full bg-black text-white flex flex-col sm:flex-row items-center p-5 rounded-[20px] ">

                        <h1 className="text-2xl sm:text-54xl font-extrabold ">STAY UPTO DATE ABOUT 
                         OUR LATEST OFFERS</h1>

                        <div className="space-y-3 sm:ml-20">
                            <div className="flex justify-center items-center gap-6 sm:w-[330px] h-[40px] rounded-[62px] bg-[#f0f0f0]">
                            <MdOutlineEmail className="text-xl  ml-4 text-black"/>
                              <input type="text" placeholder="search item..." className="w-full ml-4 outline-none h-full rounded-[62px] text-black bg-[#f0f0f0]"></input>
                            </div>

                            <div className="flex justify-center items-center sm:w-[330px] h-[40px] rounded-[62px] bg-[#f0f0f0]">
                                <p className="text-black">Subscribe to Newsletter</p>
                           </div>
                            
                        </div>

                    </div>


                </main>
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

