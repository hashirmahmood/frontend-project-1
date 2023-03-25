"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { fadeIn, parentVar } from "@/utils/motion";
function Section4() {
  return (
    <motion.div
      variants={parentVar}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative mt-[120px] md:mt-[250px] px-[25px] md:px-[75px] flex md:flex-row flex-col items-center justify-between"
    >
      <div className="absolute pink__gradient w-[50%] h-[50%] -top-[100px]" />
      {/* Left iamge */}
      <motion.div
        variants={fadeIn(100, "right", "spring", 0.7, 0.2)}
        className="mb-[20px]"
      >
        <Image src="/card1.png" alt="" width={370} height={10} />
      </motion.div>
      {/* Right texts */}
      <motion.div
        variants={fadeIn(100, "left", "spring", 0.7, 0.2)}
        className="md:max-w-[460px] flex flex-col gap-6"
      >
        <p className="text-bold text-4xl font-bold text-white">
          Latest Technologies
        </p>
        <p className="text-bold text-4xl font-bold text-white">
          Fast & Secure Websites
        </p>
        <p className="text-dimWhite">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minus quas dignissimos dele
        </p>
        <div className="flex gap-6 text-cyan-400">
          <FaHtml5 size={30} />
          <FaCss3 size={30} />
          <FaNodeJs size={30} />
        </div>
      </motion.div>
    </motion.div>
  );
}
export default Section4;
