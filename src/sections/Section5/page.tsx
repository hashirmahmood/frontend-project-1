"use client";
import { motion } from "framer-motion";
import { parentVar, fadeIn } from "@/utils/motion";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Image from "next/image";
function Section5() {
  return (
    <motion.div
      variants={parentVar}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative mt-[150px] px-[25px] md:px-[75px] flex md:flex-row flex-col justify-between"
    >
      <div className="absolute blue__gradient w-[60%] h-[60%] rounded-full" />
      {/* Left text */}
      <motion.div
        variants={fadeIn(100, "right", "spring", 0.7, 0.2)}
        className=" md:max-w-[490px] flex flex-col justify-center  gap-5 pt-[20px]"
      >
        <p className="font-bold text-4xl text-white">Full Stack Website</p>
        <p className="font-bold text-4xl text-white">With Designe</p>
        <p className="text-dimWhite">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Totam odio id harum,
          voluptatibus, nostrum, modi soluta doloremque aliquid porro libero
          veniam assumenda! Simi
        </p>
        <div className="text-cyan-400 flex gap-4">
          <FaReact size={30} />
          <SiNextdotjs size={30} />
          <FaFigma size={30} />
        </div>
      </motion.div>
      {/* Right Image */}
      <motion.div
        variants={fadeIn(100, "left", "spring", 0.7, 0.2)}
        className="mt-[20px]"
      >
        <Image src="/card2.png" alt="image" width={480} height={10} />
      </motion.div>
    </motion.div>
  );
}
export default Section5;
