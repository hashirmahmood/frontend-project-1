"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/utils/motion";
import { TypeAnimation } from "react-type-animation";
function Landing() {
  return (
    <motion.div
      variants={fadeIn(100, "left", "tween", 0.7, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex pt-[46px] justify-between items-center md:flex-row flex-col relative "
    >
      <div className="absolute blue__gradient w-[60%] h-[60%] rounded-full" />
      {/* Left */}
      <div className="text-dimWhite px-[25px] md:px-[75px] flex flex-col ">
        <p className="text-xl">Hello, I am</p>
        <p className="md:text-[70px] text-[30px] text-cyan-400 ">
          Hashir Mahmood
        </p>
        <p className="md:text-[30px] text-[18px] md:-mt-4">
          I am{" "}
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "UI/UX Designer",
              1000,
              "Web Designer",
              1000,
              "Blockchain Developer",
              1000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </p>
        <p className="text-dimWhite max-w-[450px] mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          fuga, eos facilis rerum nisi, magni quod sapiente similique at
          molestiae possimus doloribus
        </p>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring" }}
          className="bg-cyan-400 w-[80px] md:w-[100px] py-2 rounded-md text-gray-800 font-semibold text-sm md:text-lg mt-6"
        >
          Lets Talk
        </motion.button>
      </div>
      {/* Right */}
      <motion.div
        animate={{ y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="w-[250px] md:w-[450px] mt-[60px] md:top-0 top-[350px] right-0 absolute"
      >
        <Image src="/robot.png" alt="" height={10} width={450} />
      </motion.div>
    </motion.div>
  );
}
export default Landing;
