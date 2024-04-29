"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { db } from "~/server/db";
import { product } from "~/server/db/schema";

export const AddProductSheet = () => {
  const [title, setTitle] = useState("");
  const [inch, setInch] = useState("");
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [discription, setDiscription] = useState("");
  const addProduct = async () => {
    try {
      const productInfo = {
        title,
        inch,
        status,
        color,
        price,
        discription,
      };
      console.log("object", productInfo);
      const sendData = await db.insert(product).values(productInfo);

      console.log("Product added successfully:", sendData);
      // Handle success, maybe show a success message to the user
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="h-4 w-4">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#8B96A5" />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent className="bg-white pt-11">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create your product</CardTitle>
            <CardDescription>
              Create your new product in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">Title</label>
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    id="name"
                    className="h-8 rounded-xl border pl-3 shadow-2xl outline-none"
                    placeholder="Please enter your title"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">Inch</label>
                  <select
                    onChange={(e) => setInch(e.target.value)}
                    name="inch"
                    className="h-8 rounded-xl border pl-3 shadow-2xl outline-none"
                    id="inch"
                  >
                    <option value="13">-13</option>
                    <option value="13-14">13-14</option>
                    <option value="15-15.6">15-15,6</option>
                    <option value="16-17">16-17</option>
                    <option value="18">18 Plus</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">New or Used </label>
                  <select
                    onChange={(e) => setStatus(e.target.value)}
                    name=""
                    className="h-8 w-full rounded-xl border pl-3"
                    id=""
                  >
                    <option value="new">New</option>
                    <option value="used">Used</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">Color</label>
                  <input
                    onChange={(e) => setColor(e.target.value)}
                    id="name"
                    className="h-8 rounded-xl border pl-3 shadow-2xl outline-none"
                    placeholder="Please enter color"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">Price</label>
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    id="name"
                    className="h-8 rounded-xl border pl-3 shadow-2xl outline-none"
                    placeholder="$"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">Discription</label>
                  <textarea
                    onChange={(e) => setDiscription(e.target.value)}
                    name=""
                    id=""
                    placeholder="Discription"
                    className="h-36 rounded-xl border pl-3 shadow-2xl outline-none"
                  ></textarea>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              onClick={addProduct}
              className="opacity w-full rounded-2xl border-2"
            >
              ADD PRODUCT
            </Button>
          </CardFooter>
        </Card>
      </SheetContent>
    </Sheet>
  );
};
