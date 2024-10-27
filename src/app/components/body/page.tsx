import React from "react";
import Image from "next/image";
import Bg from "@/app/components/doctorbg.jpg";
import Link from "next/link";

const Body = () => {
  return (
    <>
      <div className="text-center justify-center mt-11">
        <h1 className="font-serif text-2xl">We Listen and act</h1>
        <div className="mt-11">
          <Image src={Bg} height={20} width={1400} alt="blur"></Image>
        </div>
        <div>
          <h1 className="font-serif text-2xl m-10">
            From us, you can enjoy the following:
          </h1>
          <div className="flex justify-between m-10">
            <div><h2 className="font-sans font-semibold text-left">
              A great working Environment
            </h2>
            <p className="text-justify pr-16">
              We don't want you dread Mondays or coming to work daily. That's
              why we create a safe and productive environment where we can
              achieve your full potential
            </p>
            </div>
            
            <div><h2 className="font-sans font-semibold text-left">
              A great working Environment
            </h2>
            <p className="text-justify pr-16">
              We don't want you dread Mondays or coming to work daily. That's
              why we create a safe and productive environment where we can
              achieve your full potential
            </p>
            </div>

            <div><h2 className="font-sans font-semibold text-left">
              A great working Environment
            </h2>
            <p className="text-justify pr-16">
              We don't want you dread Mondays or coming to work daily. That's
              why we create a safe and productive environment where we can
              achieve your full potential
            </p>
            </div>
          </div>
          <div className="m-10">
            <button className="bg-cyan-800 text-xl text-gray-100 text-center justify-center h-11 w-40 rounded-md">Our Offering</button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Body;
