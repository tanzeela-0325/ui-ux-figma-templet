export default function HeadLine() {
    return (
        <div className="h-[80px] max-w-[1440px]  bg-black text-white">
            <ul className="flex flex-row gap-[20px] md:gap-[50px] lg:gap-[100px] items-center justify-center text-center pt-[20px] pl-[10px] md:pl-[25px]">
                <li className="text-[18px] md:text-[25px] lg:text-[30px]">VERSACE</li>
                <li className="text-[18px] md:text-[25px] lg:text-[30px]">ZARA</li>
                <li className="text-[18px] md:text-[25px] lg:text-[30px]">GOCCI</li>
                <li className="text-[18px] md:text-[25px] lg:text-[30px] font-bold">PRADA</li>
                <li className="text-[16px] md:text-[20px] lg:text-[25px]">Calvin Klein</li>
            </ul>
        </div>
    );
}
