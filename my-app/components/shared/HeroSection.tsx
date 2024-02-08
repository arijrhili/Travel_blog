"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-blue mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-blue-900 bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Fréquence Médicale : {" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Actualités médicales.",
                1000,
                "Transparence éditoriale",
                1000,
                "Fiabilité avec CPPAP.",
                1000,
                " partenariats savants. ",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#161b1f] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
        
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
         <div className="bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
    <Image
        src="/assets/fm.png"
        alt="hero image"
        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        width={300}
        height={300}
    />
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;