import Image from "next/image";
import img_5 from "../../public/arrow-down-bold 1.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { HiPlusSmall } from "react-icons/hi2";


interface Icart
{
  id:number,
  imageurl:string,
  title:string,
  size:string,
  color:string,
  price:string

}
const CartItem:Icart[] = [
  
  {
    id:1,
    imageurl:"/Frame 07.png",
    title:"Gradient Graphic T-shirt",
    size:"Large",
    color:"White",
    price:"$145"
  },
  {
    id:2,
    imageurl:"/Frame 33.1.png",
    title:"CHECKERED SHIRT",
    size:"Medium",
    color:"Red",
    price:"$180"
  },
  {
    id:3,
    imageurl:"/Frame 33.2.png",
    title:"SKINNY FIT JEANS",
    size:"Large",
    color:"Blue",
    price:"$240"
  }
  
]

export default function Cartes() {
  return (
    <>
    <div className="w-full max-w-[1250px] px-6 mt-10 ">
      <h1 className="text-[40px] sm:text-[30px] md:text-[35px] font-bold">
        <b>Your cart</b>
      </h1>

      <div className="flex flex-col mt-4 p-4 xl:flex-row gap-6 ">
        {/* Section One */}
        <div className="flex flex-col w-full p-[24px] mb-6 border-b  lg:h-full  border-[1px]  border-gray-200 rounded-lg">
          {CartItem .map((item) =>(
            <div key={item.id} className="flex flex-row  justify-between mb-6 lg:m-[10px] lg:w-[667px] lg:h-[124px] w-full h-[99px]">
          
            <Image src={item.imageurl} alt="img-01" width={1000} height={1000} className="lg:w-[124px] lg:h-[124px] w-[99px] h-[99px] " />
            
            <div className="flex flex-col space-y-1 ">
              <p className="sm:text-[25px] text-[10px]"><b>{item.title}</b></p>
              <ul className="flex flex-col ">
                <li className="text-[12px]">Size: {item.size}</li>
                <li className="text-[12px]">Color: {item.color}</li>
              </ul>
              <p className="sm:text-xl text-[12px]  font-bold">{item.price}</p>
            </div>
            <div className="flex flex-col justify-between lg:ml-24 ">
           <div className="ml-20">  <RiDeleteBin6Line size={15} color="red" /></div>

              <div className="lg:w-[100px] lg:h-[40px] w-[105px] h-[31px] items-center flex justify-between p-3 lg:items-center rounded-[62px] bg-[#f0f0f0] text-gray-400 ">
               <FiMinus />
               1
               <HiPlusSmall />
              </div>
            </div>
           
          </div>
         
          
          
          

            
          ))}
          
         
        </div>
        

        {/* Section Two */}
        <div className="flex flex-col lg:pl-[30px] lg:w-full sm:w-[505px] w-full h-full px-6 py-2 space-y-6 border-[1px] border-gray-200 rounded-lg">
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
            <input className="bg-gray-300 px-5 lg:w-[326px] lg:h-[48px] w-[218px] h-[48px] rounded-full outline-none" placeholder="Add prome code" />
            {/* <Image src={img_4} alt="img-04" className=" lg:w-[326px] lg:h-[48px] w-[218px] h-[48px]" /> */}
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
    </>
  );
}
