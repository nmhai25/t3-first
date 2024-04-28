import React from "react";
import { SignInSheet } from "./sheets/signInSheet";
import BasketSheet from "./sheets/BasketSheet";
import {
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex h-[60px] w-full items-center  justify-between border-b border-border pl-6 pr-6">
      <a
        className="flex h-1/3 w-20 items-center justify-center rounded-xl border"
        href="/"
      >
        HOME
      </a>
      <div className="flex items-center justify-center gap-6 ">
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <BasketSheet />
      </div>
    </div>
  );
};

export default Header;
