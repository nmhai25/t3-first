import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const BasketSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center justify-center gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5461 11C15.2961 11 15.9561 10.59 16.2961 9.97L19.8761 3.48C20.2461 2.82 19.7661 2 19.0061 2H4.20609L3.26609 0H-0.00390625V2H1.99609L5.59609 9.59L4.24609 12.03C3.51609 13.37 4.47609 15 5.99609 15H17.9961V13H5.99609L7.09609 11H14.5461ZM5.15609 4H17.3061L14.5461 9H7.52609L5.15609 4ZM5.99609 16C4.89609 16 4.00609 16.9 4.00609 18C4.00609 19.1 4.89609 20 5.99609 20C7.09609 20 7.99609 19.1 7.99609 18C7.99609 16.9 7.09609 16 5.99609 16ZM15.9961 16C14.8961 16 14.0061 16.9 14.0061 18C14.0061 19.1 14.8961 20 15.9961 20C17.0961 20 17.9961 19.1 17.9961 18C17.9961 16.9 17.0961 16 15.9961 16Z"
              fill="#1C1C1C"
            />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent className="w-full bg-white p-5 lg:min-w-[800px]">
        <SheetHeader>
          <SheetTitle> MY ORDER</SheetTitle>
        </SheetHeader>
        <div className="flex gap-4 py-4"></div>
        <hr />
        <div className="flex w-auto justify-end pr-10 pt-2">
          <p>TOTAL :</p>&nbsp;
          <p>{}$</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BasketSheet;
