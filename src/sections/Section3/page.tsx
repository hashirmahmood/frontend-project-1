"use client";
import Image from "next/image";
import { parentVar, fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
function Section3() {
  return (
    <motion.div
      variants={parentVar}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-[350px] md:mt-[250px] px-[30px] md:px-[75px] flex flex-col md:flex-row justify-between relative"
    >
      <div className="absolute pink__gradient w-[60%] h-[60%] rounded-full" />
      {/* Left */}
      <motion.div
        variants={fadeIn(100, "right", "spring", 0.7, 0.2)}
        className="flex flex-col gap-7 max-w-full md:max-w-[530px]"
      >
        <p className="text-white font-bold  text-2xl md:text-4xl">
          You do the buisness,
        </p>
        <p className="text-white font-bold  text-2xl md:text-4xl">
          we will handle the website.
        </p>
        <p className="text-dimWhite">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
          suscipit maxime fuga, ducimus iusto labore repellat voluptatum
          similique non culpa provident fugiat illo officia aut recusandae
          cumque, nostrum ut doloribus.
        </p>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring" }}
          className="bg-cyan-400 text-gray-800 rounded-md  max-w-[120px] font-semibold py-2"
        >
          Get Started
        </motion.button>
      </motion.div>
      {/* Right */}
      <motion.div
        variants={fadeIn(100, "left", "spring", 0.7, 0.2)}
        className="flex flex-col mt-[70px] md:mt-[0] gap-6 md:ml-[95px] md:max-w-[460px]"
      >
        <div className="flex gap-4 p-2 rounded- hovelgr:bg-gray-700/70">
          {/* left image */}
          <div className="p-[10px] bg-cyan-800/30 w-[80px] h-[60px] flex justify-center items-center  rounded-full">
            <Image src="/star.svg" alt="star" height={10} width={24}></Image>
          </div>
          {/* Right text */}
          <div className="text-dimWhite">
            <p className="font-semibold text-white">On Time Delivery</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              voluptatibus sequi
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-2 rounded-lg hover:bg-gray-700/70 ">
          {/* left image */}
          <div className="p-[10px] bg-cyan-800/30 w-[80px] h-[60px] flex justify-center items-center  rounded-full">
            <Image src="/Shield.svg" alt="star" height={10} width={24}></Image>
          </div>
          {/* Right text */}
          <div className="text-dimWhite">
            <p className="font-semibold text-white">100% Secured</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              voluptatibus sequi
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-2 rounded-lg hover:bg-gray-700/70 ">
          {/* left image */}
          <div className="p-[10px] bg-cyan-800/30 w-[80px] h-[60px] flex justify-center items-center  rounded-full">
            <Image src="/Send.svg" alt="star" height={30} width={24}></Image>
          </div>
          {/* Right text */}
          <div className="text-dimWhite">
            <p className="font-semibold text-white">Balance Transfer</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              voluptatibus sequi
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Section3;
