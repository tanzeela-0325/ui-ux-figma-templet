import Image from "next/image"
import pic_1 from "../public/Frame 07.png";
import pic_2 from "../public/Frame 33.1.png";
import pic_3 from "../public/Frame 33.2.png";
import Dlete_1 from "../public/Frame 00.png";
import box_1 from "../public/Frame 17.png";
import img_4 from  "../public/Frame 3.png";
import img_5 from "../public/arrow-down-bold 1.png";

export default function Cardes(){  
  return(
    <div className="w-full max-w-[1250px] mx-auto  mt-10">

      <h1 className="text-[40px] flex  font-bold "><b>Your cart</b></h1>

      <div className="flex flex-row ">

        <div className="flex flex-col gap-[10px] w-[715px] h-[508px] mt-[30px]">
          {/* Card 01 */}
          <div className=" flex flex-row justify-between gap-[20px] space-y-4 w-[667px] h-[124px] border-[1px] rounded-2xl border-l-stone-400">
                
            <div className="flex gap-[20px] ">      
              <Image src={pic_1} alt="img-01" width={1000} height={1000} className="w-[124px] h-[124px] "/>
             
  
              <div className="flex flex-col space-y-1">
                <p className="text-[25px]">Gradient Graphic T-shirt</p>
                  <ul className="flex flex-col">
                   <li>Size: Large</li>
                   <li>Color: White</li>
                  </ul>
                <p className="text-xl font-bold">$145</p>
              </div>
            </div>
  
              <div className="flex flex-col gap-10">
                <Image src={Dlete_1} alt="delet-01 " className="ml-[130px]  "/>
                <Image src={box_1} alt="box-01" className="ml-[30px] " />
              </div>
          </div>...
           
           
          {/* Card 02 */}
          <div className=" flex flex-row justify-between gap-[20px] space-y-4 w-[667px] h-[124px] border-[1px] rounded-2xl border-l-stone-400">
                
            <div className="flex gap-[20px] ">      
              <Image src={pic_2} alt="img-02" width={1000} height={1000} className="w-[124px] h-[124px] "/>
               
    
              <div className="flex flex-col space-y-1">
               <p className="text-[25px]">Gradient Graphic T-shirt</p>
                  <ul className="flex flex-col">
                        <li>Size: Large</li>
                        <li>Color: White</li>
                      </ul>
               <p className="text-xl font-bold">$145</p>
    
              </div>
            </div>
    
            <div className="flex flex-col gap-10">
              <Image src={Dlete_1} alt="delet-01 " className="ml-[130px]  "/>
              <Image src={box_1} alt="box-01" className="ml-[30px] " />
            </div>
          </div>...
                

          {/* Card 03 */}
          <div className=" flex flex-row justify-between gap-[20px] space-y-4 w-[667px] h-[124px] border-[1px] rounded-2xl border-l-stone-400">
                
            <div className="flex gap-[20px] ">      
              <Image src={pic_3} alt="img-03" width={1000} height={1000} className="w-[124px] h-[124px] "/>
               
    
              <div className="flex flex-col space-y-1">
                <p className="text-[25px]">Gradient Graphic T-shirt</p>
                  <ul className="flex flex-col">
                    <li>Size: Large</li>
                    <li>Color: White</li>
                  </ul>
                <p className="text-xl font-bold">$145</p>
    
              </div>
            </div>
    
            <div className="flex flex-col gap-10]">
             <Image src={Dlete_1} alt="delet-01 " className="ml-[130px]  "/>
             <Image src={box_1} alt="box-01" className="ml-[30px] " />
            </div>
          </div>...
        </div>

        <div className="flex flex-col mt-[30px] pl-[30px] pt-[20px] pr-[5px] w-[505px] h-[458px] space-y-6 border-[1px] border-gray-200 rounded-lg">
          <h1 className="text-[24px] font-bold">Order Summary</h1>
          <ul className="w-[457] h-[197px] flex flex-col space-y-5">
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
          <div className="flex flex-row justify-around w-[457px] h-[48px]">
             <Image src={img_4} alt="img-04" className=""/>
             <button className="bg-black text-white pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-full">Apply</button>
          </div>
          <div className="flex flex-row justify-center gap[2px] relative">
            <button className="bg-black text-white rounded-full pt-[10px] pr-[100px] pb-[10px] pl-[100px] flex-row">Go to Checkout</button>
            <Image src={img_5} alt="img-05" className="absolute ml-[140px] mt-[10px]"/>
          </div>
          
        </div>

      </div>
    </div>
  )
      
}


          

      