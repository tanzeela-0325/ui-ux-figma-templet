import Image from "next/image";
import pic_1 from "../public/Frame 32.png";
import pic_2 from "../public/Frame 33.png";
import pic_3 from "../public/Frame 34.png";
import pic_4 from "../public/Frame 38.png";
import stars from "../public/Frame 35.png";
import price from "../public/Frame 59 (1).png";
import price_2 from "../public/Frame 44.png";

export default function NewArrival() {
    return (
        <div className="w-full max-w-[1240px] mx-auto mt-5 px-4">
            <h1 className="text-[28px] md:text-[35px] lg:text-[40px] flex justify-center font-bold">
                <b>NEW ARRIVALS</b>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {/* Card 01 */}
                <div className="flex flex-col space-y-4 border-[1px] rounded-3xl border-stone-400">
                    <Image src={pic_1} alt="img-01" width={1000} height={1000} className="w-full h-auto " />
                    <div className="flex flex-col space-y-2 px-4">
                        <p className="text-sm md:text-xs">T-SHIRT WITH TAPE DETAILS</p>
                        <Image src={stars} alt="img-02" className="w-[80%]" />
                        <p className="text-lg md:text-xl">$120</p>
                    </div>
                </div>

                {/* Card 02 */}
                <div className="flex flex-col space-y-4 border-[1px] rounded-3xl border-stone-400">
                    <Image src={pic_2} alt="img-02" width={1000} height={1000} className="w-full h-auto" />
                    <div className="flex flex-col space-y-2 px-4">
                        <p className="text-sm md:text-xs">SKINNY FIT JEANS</p>
                        <Image src={stars} alt="img-02" className="w-[80%]" />
                        <Image src={price} alt="prices" className="w-[80%]" />
                    </div>
                </div>

                {/* Card 03 */}
                <div className="flex flex-col space-y-4 border-[1px] rounded-3xl border-stone-400">
                    <Image src={pic_3} alt="img-03" width={1000} height={1000} className="w-full h-auto " />
                    <div className="flex flex-col space-y-2 px-4">
                        <p className="text-sm md:text-xs">CHECKERED SHIRT</p>
                        <Image src={stars} alt="img-02" className="w-[80%]" />
                        <p className="text-lg md:text-xl">$120</p>
                    </div>
                </div>

                {/* Card 04 */}
                <div className="flex flex-col space-y-4 border-[1px] rounded-3xl border-stone-400">
                    <Image src={pic_4} alt="img-04" width={1000} height={1000} className="w-full h-auto"/>
                    <div className="flex flex-col space-y-2 px-4">
                        <p className="text-sm md:text-xs">SLEEVE STRIPED T-SHIRT</p>
                        <Image src={stars} alt="img-02" className="w-[80%]" />
                        <Image src={price_2} alt="price-02" className="w-[80%]" />
                    </div>
                </div>
            </div>

            <button className="flex justify-center items-center border-[1px] border-slate-400 rounded-full px-6 py-2  mt-8 mx-auto text-sm md:text-base">
                View All
            </button>
        </div>
    );
}
