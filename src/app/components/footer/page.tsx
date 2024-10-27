import React from "react";
import Image from "next/image";
import Logo from "@/app/components/LOGO GREEN.png";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-300">
        <div className=" flex justify-between items-center h-36">
        <div className="ml-10">
          <Image src={Logo} height={60} width={120} alt="blur"></Image>
        </div>
        <div>
          <ul>
            <a className="text-sky-800 mr-6 hover:text-sky-600" href="">
              Privacy Policy
            </a>{" "}
            <a className="text-sky-800 mr-6 hover:text-sky-600" href="">
              Termes of Services
            </a>{" "}
            <a className="text-sky-800 mr-6 hover:text-sky-600" href="">
              Help Center
            </a>{" "}
            <a className="text-sky-800 hover:text-sky-600" href="">
              Contact
            </a>{" "}
          </ul>
        </div>
        <div className="w-64">
          <h2 className="font-sans font-semibold text-left text-sky-800">
            Simplyfy Your Life with DrChat
          </h2>
          <p className="text-justify pr-16 text-sky-800">
            We don't want you dread Mondays or coming to work daily.
          </p>
        </div>
        </div>
        <div>
        <p className="text-xs mt-1 text-center pb-1 text-sky-800 font-serif">&copy; {new Date().getFullYear()} DrChat. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
