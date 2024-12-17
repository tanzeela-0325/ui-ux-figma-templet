
import Image from "next/image";
import pic_1 from "../public/Rectangle 2.png";
import pic_2 from "../public/Vector.png";
import pic_3 from "../public/Vector.png";
import HeadLine from "./HeadLine";

export default function HeroSection() {
    return (
        <div className="md:relative relative w-full h-auto">
            {/* Main Image */}
            <div className="md:relative relative">
                <Image
                    src={pic_1}
                    alt="Main Image"
                    layout="responsive"
                    width={1000}
                    height={663}
                    className="w-full h-auto"
                    priority
                />

                {/* Decorative Images */}
                <Image
                    src={pic_2}
                    alt="Star Icon 1"
                    width={104}
                    height={104}
                    className="md:absolute absolute sm:top-4 top-[2%] hover:animate-spin sm:right-4 left-[82%] w-[60px] h-[60px] md:w-[104px]  md:h-[104px]"
                />
                <Image
                    src={pic_3}
                    alt="Star Icon 2"
                    width={56}
                    height={56}
                    className="md:absolute  absolute sm:top-[20%] top-[10%] hover:animate-spin sm:left-[60%] right-[40%] transform -translate-x-1/2 w-[40px] h-[40px] md:w-[70px] md:h-[70px]"
                />

                {/* Text Content */}
                <div className="md:absolute top-[10%] left-[5%] md:top-[15%] md:left-[10%] text-left">
                    <h1 className="text-sm  md:text-5xl text-center md:text-start font-bold">
                        <b>FIND CLOTHES</b>
                        <br />
                        <b>THAT MATCH</b>
                        <br />
                        <b>YOUR STYLE</b>
                    </h1>
                    <p className="mt-4 text-sm text-center md:text-start md:text-base">
                        Browse through our diverse range of meticulously crafted garments.<br/>
                        Designed to bring out your individuality and cater to your sense of style.<br/>
                    </p>
                    <button className="bg-black text-white rounded-full mt-4 py-2 px-6 text-sm md:text-base">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Headline Section */}
            <HeadLine />
        </div>
    );
}

