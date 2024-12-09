import Image from "next/image";
import pic_man1 from "../public/Frame 61.png";
import pic_man2 from "../public/Frame 62.png";
import pic_woman from "../public/Frame 64.png";
import pic_man3 from "../public/Frame 63.png";

export default function DressStyle() {
    return (
        <div className="w-full max-w-[1240px] mx-auto mt-10">
            <h1 className="text-[40px] flex justify-center font-bold">
                <b>BROWSE BY DRESS STYLE</b>
            </h1>
            <div className="flex flex-col gap-[20px]">

                {/* First Row */}
                <div className="flex flex-col sm:flex-row gap-[20px] mt-[25px]">
                    <Image
                        src={pic_man1}
                        alt="img-01"
                        width={1000}
                        height={1000}
                        className="w-full sm:w-[407px] sm:h-[289px] object-cover"
                    />
                    <Image
                        src={pic_man2}
                        alt="img-02"
                        width={1000}
                        height={1000}
                        className="w-full sm:w-[684px] sm:h-[289px] object-cover"
                    />
                </div>

                {/* Second Row */}
                <div className="flex flex-col sm:flex-row gap-[20px]">
                    <Image
                        src={pic_woman}
                        alt="img-03"
                        width={1000}
                        height={1000}
                        className="w-full sm:w-[684px] sm:h-[289px] object-cover"
                    />
                    <Image
                        src={pic_man3}
                        alt="img-04"
                        width={1000}
                        height={1000}
                        className="w-full sm:w-[407px] sm:h-[289px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
}