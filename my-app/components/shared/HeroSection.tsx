import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="bg-slate-700">
        
       
      </div>
      <div className="py-20 md:py-28 bg-slate-700		" >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
             
              <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight text-white font-bold tracking-tight">Votre santé et votre bien-être, notre priorité</h1>
              <p className="mb-8 text-lg md:text-xl text-coolGray-400 font-medium">Le site santé de référence avec chaque jour toute l'actualité médicale decryptée par des médecins en exercice et les conseils des meilleurs spécialistes.</p>
              
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <img className="relative rounded-full border-2 border-white" src="https://static.shuffle.dev/uploads/files/f0/f06b07bbaa333667fb1c271d47148db58b07b467/pexels-evg-kowalievska-1170979.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-bottom w-full text-slate-700">
        <svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
