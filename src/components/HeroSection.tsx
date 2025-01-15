
import Image from "next/image";
import pic_1 from "../../public/Rectangle 2.png";
import pic_2 from "../../public/Vector.png";
import pic_3 from "../../public/Vector.png";
import pic_01 from "../../public/Rectangle 2.1.png";

import HeadLine from "./HeadLine";

export default function HeroSection() {
    return (
        <div>
           <div className=" relative h-auto w-full">

              <Image 
                src={pic_1}
                alt="main img"
                width={1000}
                height={1000}
                className="w-full hidden md:block h-[663px]"     
              />

                {/* Text Content */}
                <div className="md:absolute top-[10%] bg-gray-100 md:bg-transparent left-[5%] md:ml-1 md:top-[15%] lg:left-[7%] text-left space-y-4">
                    <h1 className="text-[30px]  md:text-5xl text-center md:text-start font-bold left-[16px] top-[138px]">
                        <b>FIND CLOTHES</b>
                        <br />
                        <b>THAT MATCH</b>
                        <br />
                        <b>YOUR STYLE</b>
                    </h1>
                    <p className="lg:mt-4 text-[12px]  text-center md:text-start md:text-base left-[16px] top-[251px]">
                        Browse through our diverse range of meticulously crafted garments.Designed<br/>
                        to bring out your individuality and cater to your sense of style.<br/>
                    </p>
                    <button className="bg-black text-white rounded-full md:mt-4 lg:w-[210px] lg:h-[52px] md:text-center text-sm md:text-base w-[358px] h-[52px]  ml-[20px] hover:scale-105   transition-all cursor-pointer">
                        Shop Now
                    </button>
                    <div className="grid grid-cols-2 grid-rows-2 gap-[55px] p-[56px]  md:hidden bloc">
                        <div className="flex flex-col w-[103px] h-[34px]">
                            <p className="text-[32px] font-bold">200+</p>
                            <p className="text-[10px] text-gray-400">International Brands</p>
                        </div>
                        <div  className="flex flex-col w-[103px] h-[34px]">
                            <p className="text-[32px] font-bold ">2,000+</p>
                            <p className="text-[10px] text-gray-400">High-Quality Products</p>
                        </div>
                        <div  className="grid grid-cols-1 grid-row-2 items-center ml-20 w-[103px] h-[34px]">
                            <p className="text-[32px]  font-bold">30,000+</p>
                            <p className="text-[12px] text-gray-400">Happy Customers</p>
                        </div>
                    </div>
                </div> 

                <Image 
                    src={pic_01}
                    alt="secound img"
                    width={1000}
                    height={1000}
                    className="w-full h-[448px] md:hidden block"/>

                {/* Decorative Images */}
                 <Image
                    src={pic_2}
                    alt="Star Icon 1"
                    width={104}
                    height={104}
                    className=" absolute md:top-[50px] md:left-[85%]  hover:animate-spin  top-[550px] left-[75%] w-[76px] h-[76px] md:w-[104px]  md:h-[104px]"
                />
                <Image
                    src={pic_3}
                    alt="Star Icon 2"
                    width={56}
                    height={56}
                    className="  absolute md:top-[45%] top-[68%] left-[12%] hover:animate-spin md:left-[50%] w-[40px] h-[40px] md:w-[70px] md:h-[70px]"
                />

            </div> 

            {/* Headline Section */}
            <HeadLine />
        </div>
    );
}

