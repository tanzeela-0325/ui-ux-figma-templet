import Image from "next/image";
import fram_1 from "../../public/Frame 35.png";
import img_2 from "../../public/image 2.png";
import img_5 from "../../public/image 5.png";
import img_6 from "../../public/image 6.png";
import img_1 from "../../public/image 1.png";
import box_3 from "../../public/Frame 17.png";
import { TiTick } from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import { BsSliders2Vertical } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import pic_1 from "../../public/Frame 32 (2).png";
import pic_2 from "../../public/Frame 33 (2).png";
import pic_3 from "../../public/Frame 34(1).png";
import pic_4 from "../../public/Frame 38.(1).png";
import { FaStar } from "react-icons/fa";
import { ProductData_3 } from "@/app/data/cart-detail";


const star =[<FaStar size={20} key={1} />, <FaStar size={20}  key={2}/>, <FaStar size={20} key={3} />, <FaStar size={20} key={4}/>]

export default function Products() {
  return (
    <div className="w-full max-w-[1250px] mx-auto mt-10 px-8">
      {/* Section One */}
      <div className="w-full h-auto  max-w-[1240px] mx-auto mt-12 px-6">
        <div className="flex flex-col lg:flex-row lg:gap-[40px] gap-6 ">
          <div className="flex flex-row lg:flex-col gap-[5px]">
            <Image
              src={img_2}
              alt="img-02"
              width={1000}
              height={1000}
              className="w-[111px] h-[106px]  lg:w-[152px] lg:h-[167px]"
            />
            <Image
              src={img_5}
              alt="img-05"
              width={1000}
              height={1000}
              className="w-[111px] h-[106px] lg:w-[152px] lg:h-[167px] hover:border-[1px] border-gray-900 rounded-2xl"
            />
            <Image
              src={img_6}
              alt="img-06"
              width={1000}
              height={1000}
              className="w-[111px] h-[106px] lg:w-[152px] lg:h-[167px] hover:border-[1px] border-gray-900 rounded-2xl"
            />
          </div>

          <div>
            <Image
              src={img_1}
              alt="img-01"
              width={1000}
              height={1000}
              className=" w-full lg:w-[444px] h-[530px] hover:border-[1px] border-gray-900 rounded-2xl "
            />
          </div>

          <div className="space-y-9">
            <h1 className="lg:text-[40px] text-[24px] flex justify-center font-bold">
              <b>One Life Graphic T-Shirt</b>
            </h1>
            <div className="w-full lg:w-[509px]">

              <ul className="space-y-3">
                <li>
                  <Image src={fram_1} alt="img-01" className="" />
                </li>

                <li className="flex flex-row gap-[10px]">
                  <p className="text-3xl font-bold">$260</p>
                  <p className="text-3xl text-gray-400 line-through">$300</p>
                  <button className="text-[18px] font-bold text-[#e64949]  bg-red-100 rounded-full px-[20px] py-[5px]">
                    - 40%
                  </button>
                </li>

                <li>
                  This graphic t-shirt which is perfect for any occasion. Crafted
                  from a soft <br /> and breathable fabric, it offers superior
                  comfort and style.
                </li>

                <li>Select Colors</li>
                
                <li className="flex gap-4">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#4b4435]"></div>
                  <div className="w-[40px] h-[40px] rounded-full bg-[#314f3e]"></div>
                  <div className="w-[40px] h-[40px] rounded-full bg-[#31344F]"></div>
                  
                </li>

              </ul>
            </div>
            <div className="lg:space-y-8 space-y-4 mt-3">
              <h1 className="text-slate-400">Choose Size</h1>
              <div className="flex flex-row gap-[10px]">
                <button className="bg-gray-200 text-slate-400 hover:text-white hover:bg-black rounded-full lg:w-[86px] lg:h-[46px] w-[74px] h-[39px]">
                  Small
                </button>
                <button className="bg-gray-200 text-slate-400 hover:text-white hover:bg-black rounded-full lg:w-[105px] lg:h-[46px] w-[90px] h-[39px]">
                  Medium
                </button>
                <button className="bg-gray-200 text-slate-400 hover:text-white  hover:bg-black rounded-full lg:w-[89px] lg:h-[46px] w-[76px] h-[39px]">
                  Large
                </button>
                <button className="bg-gray-200 text-slate-400 hover:text-white hover:bg-black rounded-full lg:w-[104px] lg:h-[46px] w-[89px] h-[39px]">
                  X-Large
                </button>
              </div>
              <div className="flex flex-row gap-[10px]">
                <Image
                  src={box_3}
                  alt="box-03"
                  className="lg:w-[170px] w-[110px] lg:h-[52px] h-[44px]"
                />
                <button className="bg-black text-white rounded-full lg:w-[400px] lg:h-[52px] w-[236px] h-[44px]  hover:scale-105   transition-all cursor-pointe">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b-[1px] border-gray-200 ">
          <ul className="grid grid-rows-1 grid-cols-3  lg:justify-around justify-center  items-center mt-[40px]">
            <li
              id="homeTab"
              className="tab text-gray-600 font-bold tracking-wide w-full text-center  lg:py-3 lg:px-6 "
            >
              Product Details
            </li>
            <li
              id="settingTab"
              className="tab text-gray-800 font-semibold border-b-[2px] border-gray-700 tracking-wide w-full text-center text-base py-3 px-6 cursor-pointer"
            >
              Rating & Reviews
            </li>
            <li
              id="profileTab"
              className="tab text-gray-600 font-semibold tracking-wide w-full text-center text-base py-3 px-6 cursor-pointer"
            >
              FAQs
            </li>
          </ul>
        </div>

        <div className=" flex lg:justify-between justify-between md:justify-startgap-[650px] mt-[20px]">
          <div className="flex flex-row gap-[12px] items-center">
            <h1 className="lg:text-[20px]  text-start text-[12px] text-black">
              <b>All Reviews</b>
            </h1>
            <p className="text-gray-400">(451)</p>
          </div>
          <div className="flex flex-row justify-end lg:gap-[10px] gap-1 ">
            <button className="bg-gray-300 rounded-full lg:p-[15px] p-[10px]  hover:scale-105   transition-all cursor-pointe">
              <BsSliders2Vertical />
            </button>
            <button className="lg:flex flex-row justify-center items-center gap-[4px] w-[120px] h-[48px] md:block hidden bg-gray-300 hover:bg-black hover:text-white rounded-full">
              <p>Latest</p>
              <p>
                <RiArrowDropDownLine size={30} />
              </p>
            </button>
            <button className="lg:w-[166px] lg:h-[46px] bg-black text-white  rounded-full w-[125px] h-[40px]  hover:scale-105   transition-all cursor-pointe">
              Write a Review
            </button>
          </div>

        </div>
      </div>

      {/* Section Two */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[20px] w-full h-auto mt-[24px] max-w-[1240px] mx-auto">

        {ProductData_3.map((product)=>(

          <div key={product.id} className="flex flex-col h-auto w-full md:h-[241.58px] border-[1px] border-gray-200 rounded-3xl hover:scale-105  hover:bg-slate-50 transition-all cursor-pointer">
          <div className="space-y-4 mt-[20px] ml-[30px]">
            <div className="flex justify-between mr-[10px]">
             <p className="flex text-yellow-400 gap-2">{star}</p>
              <BsThreeDots size={24} className=" text-gray-400" />
            </div>
            <div className="flex flex-row gap-1">
              <h1 className="text-lg ">
                <b>{product.product_name}</b>
              </h1>
              <div className="bg-green-600 w-[20px] h-[20px] rounded-full">
                <span>
                  <TiTick size={20} color="white" />
                </span>
              </div>
            </div>

            <p className="text-gray-400">
              {product.description}
            </p>

            <div className="flex flex-row mb-[5px] justify-between text-gray-400">
              Posted on August 14, 2023
            </div>
          </div>
        </div>

          

        ))}  
        
        </div>

        <div className="flex justify-center mt-[37px]">
          <button className="border-[1px] text-slate-500 border-gray-200 rounded-full w-[230px] h-[52px]">
            mLoad More Reviews
          </button>
        </div>

      {/* Section Three */}
      <div className="w-full justify-center max-w-[1240px] mx-auto mt-[30px]">
        <h1 className="flex justify-center lg:text-[40px] text-[20px] font-bold">
          <b>YOU MIGHT ALSO LIKE</b>
        </h1>

        <div className="flex lg:flex-row flex-col gap-[20px] mt-[20px] lg:ml-0 ml-8">
          <Image
            src={pic_1}
            alt="pic-01"
            width={1000}
            height={1000}
            className="w-[295px] h-[298px]"
          />
          <Image
            src={pic_2}
            alt="pic-02"
            width={1000}
            height={1000}
            className="w-[295px] h-[298px]"
          />
          <Image
            src={pic_3}
            alt="pic-03"
            width={1000}
            height={1000}
            className="w-[295px] h-[298px]"
          />
          <Image
            src={pic_4}
            alt="pic-04"
            width={1000}
            height={1000}
            className="w-[295px] h-[298px]"
          />
        </div>
      </div>
    </div>
  );
}
