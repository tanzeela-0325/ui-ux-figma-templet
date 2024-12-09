import Image from "next/image"
import stars_1 from "../public/Frame 10.png";
import brand_1 from "../public/Frame 31.png";
import brand_2 from "../public/Frame 05.png";
import brand_3 from "../public/Frame 06.png";

export default function HappyCustomer(){
    return(
        <div className="w-full max-w-[1240px] mx-auto mt-24">

            <h1 className="text-[40px] flex font-bold "><b>OUR HAPPY CUSTOMERS</b></h1>
            
            <div className="flex flex-row mt-4 gap-[40px]">
                <div className="flex flex-col space-y-4">
                    <Image src={stars_1} alt="star-log-01"/>
                    <Image src={brand_1} alt="brand-log-01" />
                    <p>I am blown away by the quality and style of the <br />
                        clothes I received from Shop.co. From casual <br />
                        wear to elegant dresses, every piece I have bought <br />
                        has exceeded my expectations.</p>
                </div>
                <div className="flex flex-col space-y-4">
                   <Image src={stars_1} alt="star-log-02"/>
                   <Image src={brand_2} alt="brabd-log-02" />

                   <p>Finding clothes that align with my personal <br />
                     style used to be a challenge until I discovered <br />
                     Shop.co. The range of options they offer is truly <br />
                     remarkable, catering to a variety of tastes and <br />
                     occasions.
                    </p>
                </div>

                <div className="flex flex-col space-y-4">
                   <Image src={stars_1} alt="star-log-02"/>
                   <Image src={brand_3} alt="brand-log-03" />

                   <p>As someone whos always on the lookout for <br />
                     unique fashion pieces, I am thrilled to have <br />
                     stumbled upon Shop.co. The selection of  <br />
                     clothes is not only diverse but also on-point <br />
                     with the latest trends.
                    </p>
                </div>
            </div>
        </div>
    )
}