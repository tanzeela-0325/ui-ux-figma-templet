"use client"
import Link from "next/link";
import { TiThMenu } from "react-icons/ti"
import { RiArrowDropDownLine } from "react-icons/ri";


import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid  gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            
           <p className="sm:hidden block"> <TiThMenu  size={20}/></p>
            
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              
              <SheetTitle>Shop.co</SheetTitle>
             
            </SheetHeader>
              
            <ul className="md:flex sm:flex-row flex-col sm:gap-[10px] md:gap-8 space-x-2 items-center sm:text-[30px] text-xl text-gray-500 md:text-[16px]">
                    <Link href="/">
                        <li className=" hover:text-blue-900 flex items-center">Shop <RiArrowDropDownLine size={25} /></li>
                    </Link>
                    <Link href="products">
                        <li className="hover:text-blue-900">Products</li>
                    </Link>
                    <Link href="catagorys">
                        <li className="hover:text-blue-900">Catagorys</li>
                    </Link>
                    <Link href="carts">
                        <li className="hover:text-blue-900">carts</li>
                    </Link>
                </ul>
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
