import Image from "next/image";
import pic_1 from "../../public/Group.png";
import pic_2 from "../../public/zara-logo-1 1.png";
import pic_3 from "../../public/gucci-logo-1 1.png";
import pic_4 from "../../public/prada-logo-1 1.png";
import pic_5 from "../../public/group.1.png";

export default function HeadLine() {
    return (
        <div className="h-[80px] w-full  bg-black text-white">
            
            <div className="flex flex-row flex-wrap gap-[12px] md:gap-[50px] lg:gap-[100px] items-center justify-center text-center py-2 px-6 md:pl-[25px]">
              <Image src={pic_1} alt="versace" className="lg:w-[166.48px] w-[116px] lg:h-[33.16px] h-[23px]"/>
              <Image src={pic_2} alt="Zara" className="lg:w-[91px] w-[63px] lg:h-[38px] h-[26px]"/>
              <Image src={pic_3} alt="Gocci" className="lg:w-[156px] w-[109px] lg:h-[36px] h-[25px]"/>
              <Image src={pic_4} alt="prada" className="lg:w-[194px] w-[127px] lg:h-[32px] h-[21px]"/>
              <Image src={pic_5} alt="calvin klein" className="lg:w-[206.79px] w-[134px] lg:h-[33.35px] h-[21px]"/>
            </div>
        </div>
    );
}
