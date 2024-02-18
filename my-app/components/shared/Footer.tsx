"use client";

import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareSnapchat,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import useMenuActive from "@/hooks/useMenuActive";
import { navLinks } from "@/constants";
import Route from "../ui/Route";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-white">
    <div className="wave-top w-full text-slate-700">
      <svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 64.5909H349.922C606.664 64.5909 859.771 -7.62939e-06 1080 -7.62939e-06C1300.23 -7.62939e-06 1440 64.5909 1440 64.5909V116H0V64.5909Z" fill="currentColor"></path>
      </svg>
    </div>
    <div className="bg-slate-700" style={{ backgroundImage: "url('flex-ui-assets/elements/pattern-dark.svg')", backgroundPosition: "center" }}>
      <div className="container px-4 mx-auto">
        <div className="pt-24 pb-11 mx-auto max-w-4xl">
         
          <div className="flex flex-wrap justify-center -mx-3 lg:-mx-6">
            <Link href={"/"}>
            <h1 className="text-3xl font-extrabold text-gray-600">
              <span className="text-2xl mr-2">FREQUENCE</span>
              <span className="text-blue-900">MEDICALE</span>
            </h1>
            </Link>
          </div>

          <ul className="flex item-center justify-center gap-16 flex-1 text-white max-md:flex-col max-md:gap-5">
            {navLinks.map((link, index) => {
              const isActive = useMenuActive(link.route);
              return (
                <li key={index}>
                  <Route
                    route={link.route}
                    label={link.label}
                    isActive={isActive}
                  />
                </li>
              );
            })}
          </ul>

          <div className="flex gap-5 text-white flex-1 justify-end text-2xl">
            <FaSquareXTwitter />
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaSquareSnapchat />
          </div>
        </div>

       
          </div>
        </div>
        <div className="border-b border-slate-700"></div>
        <div className="container px-4 mx-auto">
          <p className="py-10 md:pb-20 text-lg md:text-xl text-slate-600 font-medium text-center">© All Rights Reserved fréquence Médicale.com</p>
        </div>
     
    </section>
  );
};

export default Footer;
