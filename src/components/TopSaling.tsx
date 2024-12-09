import Image from "next/image";
import img_1 from "../public/Frame 32 (1).png";
import img_2 from "../public/Frame 90.png";
import img_3 from "../public/frem 91.png";
import img_4 from "../public/Frame 92.png";
import stars from "../public/Frame 35.png";
import price from "../public/Frame 59 (1).png";

export default function TopSalling() {
  return (
    <div className="w-full max-w-[1240px] mx-auto mt-24">
      <h1 className="text-[40px] flex justify-center font-bold">
        <b>TOP SELLING</b>
      </h1>

      <div className="flex flex-wrap gap-[25px] mt-6 justify-center">
        {/* Card 01 */}
        <div className="flex flex-col space-y-4 w-full sm:w-[295px] h-[444px] border-[1px] rounded-2xl border-l-stone-400">
          <Image
            src={img_1}
            alt="img-01"
            width={1000}
            height={1000}
            className="w-full h-[298px] object-cover"
          />
          <div className="flex flex-col space-y-2">
            <p className="text-xs">VERTICAL STRIPED SHIRT</p>
            <Image src={stars} alt="stars" />
            <Image src={price} alt="prices" />
          </div>
        </div>

        {/* Card 02 */}
        <div className="flex flex-col space-y-4 w-full sm:w-[295px] h-[444px] border-[1px] rounded-2xl border-l-stone-400">
          <Image
            src={img_2}
            alt="img-02"
            width={1000}
            height={1000}
            className="w-full h-[298px] object-cover"
          />
          <div className="flex flex-col space-y-2">
            <p className="text-xs">VERTICAL STRIPED SHIRT</p>
            <Image src={stars} alt="stars" />
            <Image src={price} alt="prices" />
          </div>
        </div>

        {/* Card 03 */}
        <div className="flex flex-col space-y-4 w-full sm:w-[295px] h-[444px] border-[1px] rounded-2xl border-l-stone-400">
          <Image
            src={img_3}
            alt="img-03"
            width={1000}
            height={1000}
            className="w-full h-[298px] object-cover"
          />
          <div className="flex flex-col space-y-2">
            <p className="text-xs">VERTICAL STRIPED SHIRT</p>
            <Image src={stars} alt="stars" />
            <Image src={price} alt="prices" />
          </div>
        </div>

        {/* Card 04 */}
        <div className="flex flex-col space-y-4 w-full sm:w-[295px] h-[444px] border-[1px] rounded-2xl border-l-stone-400">
          <Image
            src={img_4}
            alt="img-04"
            width={1000}
            height={1000}
            className="w-full h-[298px] object-cover"
          />
          <div className="flex flex-col space-y-2">
            <p className="text-xs">VERTICAL STRIPED SHIRT</p>
            <Image src={stars} alt="stars" />
            <Image src={price} alt="prices" />
          </div>
        </div>
      </div>

      <button className="flex justify-center items-center border-[1px] border-x-slate-400 rounded-full pl-[45px] pt-[10px] pb-[10px] pr-[45px] mt-[25px] ml-[45%]">
        View All
      </button>
    </div>
  );
}
