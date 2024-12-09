// import Image from "next/image"
// import pic_1 from "../public/Rectangle 2.png";
// import pic_2 from "../public/Vector.png";
// import pic_3 from "../public/Vector.png";
// import HeadLine from "./HeadLine";

// export default function HeroSection(){
//     return(
//         <div className="flex flex-row w-auto h-[663px]  space-y-6">
            
                

//             <div className="flex flex-col relative ">
//                <Image src={pic_1} alt="main-pic" width={1000} height={1000} className="w-screen"/>
//                <Image src={pic_2} alt="star-1" className="absolute w-[104px] h-[104px] right-4 top-4" />
//                <Image src={pic_3} alt="star-2" className="absolute w-[56px] h-[56px] top-[20%] left-[50%]"/>

//                <h1 className="text-5xl  absolute top-[5%] right-[69%] font-bold ">
//                   <b>FIND CLOTHES</b><br />
//                   <b>THAT MACHES</b><br />
//                   <b>YOUR STYLE</b></h1>
//                 <p className="text-[14px] absolute top-[30%] left-[5%] ">Browse throgh our diverce rang of maticulously crafted garments.Designed <br />
//                      to bring out your individuality and cater to yuor sence of style</p>
//                  <button className="bg-black absolute text-white rounded-full pt-[5px] pl-[30px] pb-[5px] pr-[30px] w-[200px] h-[50px] top-[40%] left-[5%]">Shop Now</button>
            
//              < HeadLine />
//             </div>
            

            
            
//         </div>
//     )
// }
import Image from "next/image";
import pic_1 from "../public/Rectangle 2.png";
import pic_2 from "../public/Vector.png";
import pic_3 from "../public/Vector.png";
import HeadLine from "./HeadLine";

export default function HeroSection() {
    return (
        <div className="md:relative w-full h-auto">
            {/* Main Image */}
            <div className="md:relative">
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
                    className="md:absolute top-4 right-4 w-[80px] h-[80px] md:w-[104px] md:h-[104px]"
                />
                <Image
                    src={pic_3}
                    alt="Star Icon 2"
                    width={56}
                    height={56}
                    className="md:absolute top-[20%] left-[50%] transform -translate-x-1/2 w-[40px] h-[40px] md:w-[56px] md:h-[56px]"
                />

                {/* Text Content */}
                <div className="md:absolute top-[10%] left-[5%] md:top-[15%] md:left-[10%] text-left">
                    <h1 className="text-3xl md:text-5xl text-center md:text-start font-bold">
                        <b>FIND CLOTHES</b>
                        <br />
                        <b>THAT MATCH</b>
                        <br />
                        <b>YOUR STYLE</b>
                    </h1>
                    <p className="mt-4 text-sm text-center md:text-start md:text-base">
                        Browse through our diverse range of meticulously crafted garments. 
                        Designed to bring out your individuality and cater to your sense of style.
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

