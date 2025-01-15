import Image from "next/image";
import pic_1 from "../../public/Frame 07.png";
import pic_2 from "../../public/Frame 33.1.png";
import pic_3 from "../../public/Frame 33.2.png";
import Dlete_1 from "../../public/Frame 00.png";
import box_1 from "../../public/Frame 17.png";
import img_4 from "../../public/Frame 3.png";
import img_5 from "../../public/arrow-down-bold 1.png";

export default function Cartes() {
  return (
    <div className="w-full max-w-[1250px] mx-auto mt-10 px-4">
      <h1 className="text-[40px] sm:text-[30px] md:text-[35px] font-bold">
        <b>Your cart</b>
      </h1>

      <div className="flex flex-col px-5 xl:flex-row gap-6 ">
        {/* Section One */}
        <div className="flex flex-col w-full h-auto lg:space-y-2 lg:w-[715px] space-y-4 px-4 py-4 lg:h-[508px] lg:p-[10px] border-[1px]  border-gray-200 rounded-lg">
          {/* Card 01 */}
          <div className="flex flex-row  justify-between  lg:m-[10px] lg:w-[667px] lg:h-[124px] w-full h-[99px]">
            <div>
              <Image src={pic_1} alt="img-01" width={1000} height={1000} className="lg:w-[124px] lg:h-[124px] w-[99px] h-[99px]" />
            </div>
            <div className="flex flex-col lg:space-y-1 space-y-1 ml-[10px]">
              <p className="lg:text-[25px] text-[10px]"><b>Gradient Graphic T-shirt</b></p>
              <ul className="flex flex-col ">
                <li className="text-[12px]">Size: Large</li>
                <li className="text-[12px]">Color: White</li>
              </ul>
              <p className="lg:text-xl text-[12px]  font-bold">$145</p>
            </div>
            <div className="flex flex-col  justify-between ">
              <Image src={Dlete_1} alt="delete-01" className="lg:ml-[130px] ml-[50px]  lg:w-[24px] lg:[24px] w-[20px] h-[20px] " />
              <Image src={box_1} alt="box-01" className="lg:ml-[30px] ml-[5px] lg:w-[126px] lg:h-[44px] w-[105px] h-[31px]" />
            </div>
          </div>
          <div className="w-full sm:w-[667px] h-[1px] bg-gray-300" />

          {/* Card 02 */}
          <div className="flex flex-row justify-between   lg:m-[10px]  lg:w-[667px] lg:[124px]  w-full h-[99px]">
            <div>
              <Image src={pic_2} alt="img-02" width={1000} height={1000} className="lg:w-[124px] lg:h-[124px] w-[99px] h-[99px]" />
            </div>
            <div className="flex flex-col lg:space-y-1 space-y-1 ml-[10px]">
              <p className="lg:text-[25px] text-[10px]"><b>Gradient Graphic T-shirt</b></p>
              <ul className="flex flex-col">
                <li className="text-[12px]">Size: Large</li>
                <li className="text-[12px]">Color: White</li>
              </ul>
              <p className="lg:text-xl  text-[12px] font-bold">$145</p>
            </div>
            <div className="flex flex-col justify-between">
              <Image src={Dlete_1} alt="delete-01" className="lg:ml-[130px] ml-[50px]  lg:w-[24px] lg-[24px] w-[20px] h-[20px]" />
              <Image src={box_1} alt="box-01" className="lg:ml-[30px]  lg:w-[126px] lg:h-[44px] w-[105px] h-[31px]" />
            </div>
          </div>
          <div className="w-full sm:w-[667px] h-[1px] bg-gray-300" />

          {/* Card 03 */}
          <div className="flex flex-row justify-between  m-[10px]  lg:w-[667px] lg:h-[124px]  w-full h-[99px]">
            <div>
              <Image src={pic_3} alt="img-03" width={1000} height={1000} className="lg:w-[124px] lg:h-[124px] w-[99px] h-[99px]" />
            </div>
            <div className="flex flex-col lg:space-y-1 space-y-1 ml-[10px]">
              <p className="lg:text-[25px] text-[10px]"><b>Gradient Graphic T-shirt</b></p>
              <ul className="flex flex-col">
                <li className="text-[12px]">Size: Large</li>
                <li className="text-[12px]">Color: White</li>
              </ul>
              <p className="lg:text-xl  text-[12px] font-bold">$145</p>
            </div>
            <div className="flex flex-col justify-between">
              <Image src={Dlete_1} alt="delete-01" className="lg:ml-[130px] ml-[50px] lg:w-[24px] lg-[24px] w-[20px] h-[20px]" />
              <Image src={box_1} alt="box-01" className="lg:ml-[30px]  lg:w-[126px] lg:h-[44px] w-[105px] h-[31px]" />
            </div>
          </div>
        </div>

        {/* Section Two */}
        <div className="flex flex-col lg:pl-[30px] lg:w-full sm:w-[505px] w-full h-auto px-6 py-2 space-y-6 border-[1px] border-gray-200 rounded-lg">
          <h1 className="text-[24px] sm:text-[20px] font-bold">Order Summary</h1>
          <ul className="w-full sm:w-[457px] h-[197px] flex flex-col space-y-5">
            <li className="flex justify-between">
              <p className="text-[20px] text-gray-500">Subtotal</p>
              <p className="text-[20px] font-bold">$560</p>
            </li>
            <li className="flex justify-between">
              <p className="text-[20px] text-gray-500">Discount (-20%)</p>
              <p className="text-[20px] font-bold text-red-500">-$113</p>
            </li>
            <li className="flex justify-between">
              <p className="text-[20px] text-gray-500">Delivery Fee</p>
              <p className="text-[20px] font-bold">$15</p>
            </li>
            <hr />
            <li className="flex justify-between">
              <p className="text-[20px] text-black">Total</p>
              <p className="text-[20px] font-bold">$467</p>
            </li>
          </ul>
          <div className="flex flex-row  lg:justify-around gap-2 ">
            <Image src={img_4} alt="img-04" className=" lg:w-[326px] lg:h-[48px] w-[218px] h-[48px]" />
            <button className="bg-black text-white lg:w-[119px] lg:h-[48px] w-[88px] h-[48px] rounded-full hover:scale-105  transition-all cursor-pointer">
              Apply
            </button>
          </div>
          <div className="flex flex-row justify-center items-center  gap-[4px] relative">
            <button className="bg-black text-white rounded-full lg:w-[457px] lg:h-[60px] w-full h-[52px] flex-row hover:scale-105   transition-all cursor-pointer">
              Go to Checkout
            </button>
            <Image src={img_5} alt="img-05" className="absolute ml-[140px] " />
          </div>
        </div>
      </div>
    </div>
  );
}
