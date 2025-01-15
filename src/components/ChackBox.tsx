"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const checkboxColors = [
  "bg-[#00C12B]",
  "bg-[#F50606]",
  "bg-[#F5DD06]",
  "bg-[#F57906]",
  "bg-[#06CAF5]",
  "bg-blue-800",
  "bg-[#7D06F5]",
  "bg-[#F506A4]",
  "bg-[#FFFFFF]",
  "bg-[#000000]",
  
];

export function CheckboxDemo() {
  return (
    <div className="grid lg:grid-rows-2 grid-rows-2 lg:grid-cols-5 grid-cols-7 gap-4 sm:gap-[25px] sm:grid-cols-3 md:grid-cols-4">
        
      {checkboxColors.map((color, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Checkbox
            id={`checkbox-${index}`}
            className={`h-[37px] w-[37px] rounded-full ${color}`}
          />
          <label
            htmlFor={`checkbox-${index}`}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
        
          </label>
        </div>
      ))}
    </div>
  );
}