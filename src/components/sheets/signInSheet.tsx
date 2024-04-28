"use client";

import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";

export const SignInSheet = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="h-4 w-4">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00003 2.54145C10.1841 2.54145 11.1528 3.5102 11.1528 4.69423C11.1528 5.87825 10.1841 6.847 9.00003 6.847C7.816 6.847 6.84725 5.87825 6.84725 4.69423C6.84725 3.5102 7.816 2.54145 9.00003 2.54145ZM9.00003 12.2289C11.9063 12.2289 15.2431 13.6175 15.4584 14.3817V15.4581H2.54169V14.3925C2.75697 13.6175 6.09378 12.2289 9.00003 12.2289ZM9.00003 0.388672C6.62121 0.388672 4.69447 2.31541 4.69447 4.69423C4.69447 7.07305 6.62121 8.99978 9.00003 8.99978C11.3788 8.99978 13.3056 7.07305 13.3056 4.69423C13.3056 2.31541 11.3788 0.388672 9.00003 0.388672ZM9.00003 10.0762C6.12607 10.0762 0.388916 11.5185 0.388916 14.3817V17.6109H17.6111V14.3817C17.6111 11.5185 11.874 10.0762 9.00003 10.0762Z"
              fill="black"
            />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent className="w-screen bg-white">
        <div className="h-full w-full">
          <div className="absolute right-0 flex h-full flex-col gap-14 p-10 text-black ">
            <div className="flex flex-col gap-2">
              <p className="text-bold text-[20px]">EXISTING MEMBER </p>
              <p className="text-[17px] text-xs">Welcome Back!</p>
            </div>
            <form className="flex w-auto flex-col items-center justify-center gap-4">
              <div className="flex w-auto items-center gap-3">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter Email"
                  className="h-10 w-[300px] rounded-3xl bg-black bg-opacity-30 pl-4 outline-0"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="h-10 w-[280px] rounded-3xl bg-black bg-opacity-30 pl-4 outline-0"
                />
                <button type="button" onClick={togglePasswordVisibility}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_1234)">
                      <path
                        d="M9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003L17.94 17.94Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 1L23 23"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1234">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <SheetClose
                asChild
                className="fexl-col mt-[100px] flex h-full w-full items-center justify-center p-2"
              >
                <button
                  type="submit"
                  className="flex h-[50px] w-[300px] border-spacing-6 cursor-pointer  items-center justify-center rounded-3xl border bg-white p-3 text-black hover:bg-black hover:text-white"
                >
                  <p className="font-semibold">Continue</p>
                </button>
              </SheetClose>
            </form>
            <div className="flex  h-full w-full items-center justify-center gap-1 pl-10 pr-10">
              <p className="w-full border-b"></p>
              <p>OR</p>
              <p className="w-full border-b"></p>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <button className="flex justify-center gap-1">
                  <p className="font-light">Didn't have account?</p>
                  <a href="/signUp">Create Account</a>
                </button>
              </SheetClose>
            </SheetFooter>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
