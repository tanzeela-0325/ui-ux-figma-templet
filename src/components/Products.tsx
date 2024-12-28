import Image from "next/image";
import fram_1 from "../public/Frame 35.png";
import pointer from "../public/Frame 3.1.png";
import Colors_3 from "../public/Frame 77.png";
import img_2 from "../public/image 2.png";
import img_5 from "../public/image 5.png";
import img_6 from "../public/image 6.png";
import img_1 from "../public/image 1.png";
import box_3 from "../public/Frame 17.png";
import stars_1 from "../public/Frame 10.png";
import { TiTick } from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import { BsSliders2Vertical } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import pic_1 from "../public/Frame 32 (2).png";
import pic_2 from "../public/Frame 33 (2).png";
import pic_3 from "../public/Frame 34(1).png";
import pic_4 from "../public/Frame 38.(1).png";

export default function Products() {
  return (
    <div className="w-full max-w-[1250px] mx-auto mt-10 px-8">
      {/* Section One */}
      <div className="w-full h-auto  max-w-[1240px] mx-auto mt-12 px-6">
        <div className="flex flex-col lg:flex-row lg:gap-[40px] gap-6 ">
          <div className="flex flex-row lg:flex-col gap-[5px]">
            <Image
              src={img_2}
              alt="img-02"
              width={1000}
              height={1000}
              className="w-[111px] h-[106px]  lg:w-[152px] lg:h-[167px]"
            />
            <Image
              src={img_5}
              alt="img-05"
              width={1000}
              height={1000}
              className="w-[111px] h-[106px] lg:w-[152px] lg:h-[167px]"
            />
            <Image
              src={img_6}
              alt="img-06"
              width={1000}
              height={1000}
              className="w-[111px] h-[106px] lg:w-[152px] lg:h-[167px]"
            />
          </div>

          <div>
            <Image
              src={img_1}
              alt="img-01"
              width={1000}
              height={1000}
              className=" w-full lg:w-[444px] h-[530px]"
            />
          </div>

          <div className="space-y-9">
            <h1 className="lg:text-[40px] text-[24px] flex justify-center font-bold">
              <b>One Life Graphic T-Shirt</b>
            </h1>
            <div className="w-full lg:w-[509px]">
              <ul className="space-y-3">
                <li>
                  <Image src={fram_1} alt="img-01" className="" />
                </li>
                <li className="flex flex-row gap-[10px]">
                  <p className="text-3xl font-bold">$260</p>
                  <p className="text-3xl text-gray-400 line-through">$300</p>
                  <p>
                    <Image
                      src={pointer}
                      alt="persetage-p"
                      className="w-[72px] h-[34px]"
                    />
                  </p>
                </li>
                <li>
                  This graphic t-shirt which is perfect for any occasion. Crafted
                  from a soft <br /> and breathable fabric, it offers superior
                  comfort and style.
                </li>
                <li>Select Colors</li>
                <li>
                  <Image
                    src={Colors_3}
                    alt="3-colors"
                    className="w-[143px] h-[37px]"
                  />
                </li>
              </ul>
            </div>
            <div className="lg:space-y-8 space-y-4 mt-3">
              <h1 className="text-slate-400">Choose Size</h1>
              <div className="flex flex-wrap gap-[10px]">
                <button className="bg-slate-300 text-slate-400 rounded-full pt-[10px] pr-[30px] pb-[10px] pl-[30px]">
                  Small
                </button>
                <button className="bg-slate-300 text-slate-400 rounded-full pt-[10px] pr-[30px] pb-[10px] pl-[30px]">
                  Medium
                </button>
                <button className="bg-black text-white rounded-full pt-[10px] pr-[30px] pb-[10px] pl-[30px]">
                  Large
                </button>
                <button className="bg-slate-300 text-slate-400 rounded-full pt-[10px] pr-[30px] pb-[10px] pl-[30px]">
                  X-Large
                </button>
              </div>
              <div className="flex flex-wrap gap-[10px]">
                <Image
                  src={box_3}
                  alt="box-03"
                  className="w-[170px] h-[52px]"
                />
                <button className="bg-black text-white rounded-full pt-[10px] pr-[100px] pb-[10px] pl-[100px]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b-[1px] border-gray-200">
          <ul className="flex items-center mt-[40px]">
            <li
              id="homeTab"
              className="tab text-gray-600 font-bold tracking-wide w-full text-center text-base py-3 px-6 cursor-pointer"
            >
              Product Details
            </li>
            <li
              id="settingTab"
              className="tab text-gray-800 font-semibold border-b-[2px] border-gray-700 tracking-wide w-full text-center text-base py-3 px-6 cursor-pointer"
            >
              Rating & Reviews
            </li>
            <li
              id="profileTab"
              className="tab text-gray-600 font-semibold tracking-wide w-full text-center text-base py-3 px-6 cursor-pointer"
            >
              FAQs
            </li>
          </ul>
        </div>

        <div className=" flex lg:justify-between md:justify-startgap-[650px] mt-[20px]">
          <div className="flex flex-row gap-[12px] items-center">
            <h1 className="lg:text-[12px] text-start text-[8px] text-black">
              <b>All Reviews</b>
            </h1>
            <p className="text-gray-400">(451)</p>
          </div>
          <div className="flex flex-row gap-[10px]">
            <button className="bg-gray-300 rounded-full p-[15px]">
              <BsSliders2Vertical />
            </button>
            <button className="flex flex-row items-center gap-[4px] pt-[10px] pl-[20px] pb-[10px] pr-[20px] bg-gray-300 rounded-full">
              <p>Latest</p>
              <p>
                <RiArrowDropDownLine size={30} />
              </p>
            </button>
            <button className="pt-[5px] pl-[35px] pb-[5px] pr-[35px] bg-black text-white rounded-full">
              Write a Review
            </button>
          </div>
        </div>
      </div>

      {/* Section Two */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[20px] w-full h-auto mt-[24px] max-w-[1240px] mx-auto">
        {/* Box 01 */}
        <div className="flex flex-col h-auto w-full md:h-[241.58px] border-[1px] border-gray-200 rounded-3xl">
          <div className="space-y-4 mt-[20px] ml-[30px]">
            <div className="flex justify-between mr-[10px]">
              <Image src={stars_1} alt="star-01" />
              <BsThreeDots size={30} className=" text-gray-400" />
            </div>
            <div className="flex flex-row gap-1">
              <h1 className="font-bold">
                <b>Samantha D.</b>
              </h1>
              <div className="bg-green-600 w-[20px] h-[20px] rounded-full">
                <span>
                  <TiTick size={20} color="white" />
                </span>
              </div>
            </div>

            <p className="text-gray-400">
              I absolutely love this t-shirt! The design is unique and the fabric
              feels so <br /> comfortable. As a fellow designer, I appreciate the
              attention to detail. It is <br /> become my favorite go-to shirt.
            </p>

            <div className="flex flex-row mb-[5px] justify-between text-gray-400">
              Posted on August 14, 2023
            </div>
          </div>
        </div>

        {/* Box 02 */}
        <div className="flex flex-col w-full h-auto md:h-[241.58px] border-[1px] border-gray-200 rounded-3xl">
          <div className="space-y-4 mt-[20px] ml-[30px]">
            <div className="flex justify-between mr-[10px]">
              <Image src={stars_1} alt="star-01" />
              <BsThreeDots size={30} className=" text-gray-400" />
            </div>
            <div className="flex flex-row gap-1">
              <h1 className="font-bold">
                <b>Ethan R.</b>
              </h1>
              <div className="bg-green-600 w-[20px] h-[20px] rounded-full">
                <span>
                  <TiTick size={20} color="white" />
                </span>
              </div>
            </div>

            <p className="text-gray-400">
              This t-shirt is a must-have for anyone who appreciates good design.
              The <br /> minimalistic yet stylish pattern caught my eye, and the
              fit is perfect. I can <br /> see the designer,s touch in every aspect
              of this shirt.
            </p>

            <div className="flex flex-row mb-[5px] justify-between text-gray-400">
              Posted on August 14, 2023
            </div>
          </div>
        </div>

        
          {/* Box 03 */}
          <div className="flex flex-col w-full h-auto border-[1px]  border-gray-200 rounded-3xl">

            <div className="space-y-4 mt-[20px] ml-[30px]">
              <div className="flex justify-between  mr-[10px]">
                <Image src={stars_1} alt="star-01" />
                <BsThreeDots  size={30}  className=" text-gray-400"/>
              </div>
              <div className="flex flex-row gap-1">
                <h1 className="font-bold"><b>Liam K.</b></h1>
                <div className="bg-green-600 w-[20px] h-[20px] rounded-full"><span><TiTick size={20} color="white"/></span></div>
              </div>

              <p className="text-gray-400">This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the <br />
              design speaks volumes about the designers skill. It is like wearing a piece <br /> 
              of art that reflects my passion for both design and fashion.</p>

              <div className=" flex flex-row mb-[5px] justify-between  text-gray-400">Posted on August 14, 2023</div>

            </div>
          </div>

           
          {/* Box 04 */}
          <div className="flex flex-col w-full h-auto border-[1px] border-gray-200 rounded-3xl">

            <div className="space-y-4 mt-[20px] ml-[30px]">
              <div className="flex justify-between  mr-[10px]">
                <Image src={stars_1} alt="star-01" />
                <BsThreeDots  size={30} className=" text-gray-400" />
              </div>
              <div className="flex flex-row gap-1">
                <h1 className="font-bold"><b>Alex M.</b></h1>
                <div className="bg-green-600 w-[20px] h-[20px] rounded-full"><span><TiTick size={20} color="white"/></span></div>
              </div>

              <p className="text-gray-400">The t-shirt exceeded my expectations! The colors are vibrant and the print <br />
                 quality is top-notch. Being a UI/UX designer myself, I am quite picky about <br />
                 aesthetics, and this t-shirt definitely gets a thumbs up from me.</p>

              <div className=" flex flex-row mb-[5px] justify-between  text-gray-400">Posted on August 14, 2023</div>

            </div>
          </div>

          {/* Box 05 */}
          <div className="flex flex-col w-full h-auto border-[1px]  border-gray-200 rounded-3xl">

            <div className="space-y-4 mt-[20px] ml-[30px]">
              <div className="flex justify-between  mr-[10px]">
                <Image src={stars_1} alt="star-01" />
                <BsThreeDots  size={30} className=" text-gray-400"  />
              </div>
              <div className="flex flex-row gap-1">
                <h1 className="font-bold"><b>Olivia P.</b></h1>
                <div className="bg-green-600 w-[20px] h-[20px] rounded-full"><span><TiTick size={20} color="white"/></span></div>
              </div>

              <p className="text-gray-400">As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not <br />
              only represents those principles but also feels great to wear. It is evident <br />
              that the designer poured their creativity into making this t-shirt stand out.</p>

              <div className=" flex flex-row mb-[5px] justify-between  text-gray-400">Posted on August 14, 2023</div>

            </div>
          </div>

          {/* Box 06 */}
          <div className="flex flex-col w-full h-auto border-[1px] border-gray-200 rounded-3xl">

            <div className="space-y-4 mt-[20px] ml-[30px]">
              <div className="flex justify-between  mr-[10px]">
                <Image src={stars_1} alt="star-01" />
                <BsThreeDots  size={30} className=" text-gray-400"  />
              </div>
              <div className="flex flex-row gap-1">
                <h1 className="font-bold"><b>Ava H.</b></h1>
                <div className="bg-green-600 w-[20px] h-[20px] rounded-full"><span><TiTick size={20} color="white"/></span></div>
              </div>

              <p className="text-gray-400">I am not just wearing a t-shirt; I am wearing a piece of design philosophy. <br />
                 The intricate details and thoughtful layout of the design make this shirt a <br />
                 conversation starter.</p>

              <div className=" flex flex-row mb-[5px] justify-between  text-gray-400">Posted on August 14, 2023</div>

            </div>
          </div>

        
        </div>

        <div className="flex justify-center mt-[37px]">
          <button className="border-[1px] text-slate-500 border-gray-200 rounded-full w-[230px] h-[52px]">
            mLoad More Reviews
          </button>
        </div>

      {/* Section Three */}
      <div className="w-full justify-center max-w-[1240px] mx-auto mt-[30px]">
        <h1 className="flex justify-center lg:text-[40px] text-[20px] font-bold">
          <b>YOU MIGHT ALSO LIKE</b>
        </h1>

        <div className="flex flex-wrap gap-[20px] mt-[20px] lg:ml-0 ml-8">
          <Image
            src={pic_1}
            alt="pic-01"
            width={1000}
            height={1000}
            className="w-[295px] h-[298px]"
          />
          <Image
            src={pic_2}
            alt="pic-02"
            width={1000}
            height={1000}
            className="w-[295px] h-[298px]"
          />
          <Image
            src={pic_3}
            alt="pic-03"
            width={1000}
            height={1000}
            className="w-[295px] h-[298px]"
          />
          <Image
            src={pic_4}
            alt="pic-04"
            width={1000}
            height={1000}
            className="w-[295px] h-[298px]"
          />
        </div>
      </div>
    </div>
  );
}
