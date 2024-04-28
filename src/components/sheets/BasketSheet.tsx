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
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 7.48977H16.21L11.83 0.929766C11.64 0.649766 11.32 0.509766 11 0.509766C10.68 0.509766 10.36 0.649766 10.17 0.939766L5.79 7.48977H1C0.45 7.48977 0 7.93977 0 8.48977C0 8.57977 0.00999996 8.66977 0.04 8.75977L2.58 18.0298C2.81 18.8698 3.58 19.4898 4.5 19.4898H17.5C18.42 19.4898 19.19 18.8698 19.43 18.0298L21.97 8.75977L22 8.48977C22 7.93977 21.55 7.48977 21 7.48977ZM11 3.28977L13.8 7.48977H8.2L11 3.28977ZM17.5 17.4898L4.51 17.4998L2.31 9.48977H19.7L17.5 17.4898ZM11 11.4898C9.9 11.4898 9 12.3898 9 13.4898C9 14.5898 9.9 15.4898 11 15.4898C12.1 15.4898 13 14.5898 13 13.4898C13 12.3898 12.1 11.4898 11 11.4898Z"
              fill="black"
            />
          </svg>
          <p className="mb-3 flex h-[15px] w-[15px] items-center justify-center rounded-xl bg-black text-xs text-white">
            0
          </p>
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
