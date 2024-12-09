import Image from "next/image";
import fram_1 from "../public/Frame 35.png";
import pointer from "../public/Frame 3.1.png";
import Colors_3 from "../public/Frame 77.png";
import img_2 from "../public/image 2.png";
import img_5 from "../public/image 5.png";
import img_6 from "../public/image 6.png";
import img_1 from "../public/image 1.png";
import box_3 from "../public/Frame 17.png"


export default function Products(){
    return(
        <div className="w-full max-w-[1240px] mx-auto  mt-10">
            <div>
                <div className="flex flex-row gap-[15px]">
                    <div className="flex flex-col gap-[5px]">
                      <Image src={img_2} alt="img-02" width={1000} height={1000} className="w-[152px] h-[167px]"/>
                      <Image src={img_5} alt="img-05" width={1000} height={1000} className="w-[152px] h-[168px]"/>
                      <Image src={img_6} alt="img-06" width={1000} height={1000} className="w-[152px] h-[167px]"/>
                    </div>
                    <div>
                    <Image src={img_1} alt="img-01" width={1000} height={1000} className="w-[444px] h-[530px]"/>
                    </div>

                    <div className="space-y-9"> 
                        <h1 className="text-[40px] flex justify-center font-bold"><b>One Life Graphic T-Shirt</b></h1>
                        <div className="w-[509px] ">
                          <ul className="space-y-3">
                            <li><Image src={fram_1} alt="img-01" className=""/></li>
                            <li className="flex flex-row gap-[10px]">
                                <p className="text-xl">$260</p>
                                <p className="text-xl text-gray-400 line-clamp-1">$300</p>
                                <p><Image src={pointer} alt="persetage-p" className="w-[72px] h-[34px]  "/></p>
                            </li>
                            <li>This graphic t-shirt which is perfect for any occasion. Crafted from a soft <br /> and
                                breathable fabric, it offers superior comfort and style.</li>
                            <li>Select Colors</li>
                            <li>
                                <Image src={Colors_3} alt="3-colors" className="w-[143px] h-[37px]"/>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-8 mt-3">
                           <h1 className="text-slate-400 ">Choose Size</h1>
                           <div className="flex flex-row gap-[10px]">
                             <button className="bg-slate-300 text-slate-400 rounded-full pt-[10px] pr-[30px] pb-[10px] pl-[30px] ">Small</button>
                             <button className="bg-slate-300 text-slate-400 rounded-full pt-[10px] pr-[30px] pb-[10px] pl-[30px] ">Medium</button>
                             <button className="bg-black text-white rounded-full pt-[10px] pr-[30px] pb-[10px] pl-[30px] ">Large</button>
                             <button className="bg-slate-300 text-slate-400 rounded-full pt-[10px] pr-[30px] pb-[10px] pl-[30px] ">X-Large</button>
                           </div>
                           <div className="flex flex-row gap-[10px]">
                              <Image src={box_3} alt="box-03" className="w-[143px] h-[37px]"/>
                              <button className="bg-black text-white rounded-full pt-[10px] pr-[100px] pb-[10px] pl-[100px] ">Add to Cart</button>

                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}