import React from "react";
import BasketSheet from "./sheets/BasketSheet";
import {
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { AddProductSheet } from "./sheets/AddProduct";

const Header = () => {
  return (
    <div className="flex h-[60px] w-full items-center justify-between   bg-white pl-6 pr-8">
      <img
        className="w-100px] h-8"
        src="https://qph.cf2.quoracdn.net/main-qimg-4fceb4d6b46928a860a08fa2f1fbcf10"
        alt="image"
      />
      <div className="flex items-center justify-center gap-6 ">
        <button className="flex flex-col items-center justify-center">
          <SignedOut>
            <SignInButton>
              <SignInButton>
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
              </SignInButton>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </button>
        <AddProductSheet />
        <BasketSheet />
      </div>
    </div>
  );
};

export default Header;
