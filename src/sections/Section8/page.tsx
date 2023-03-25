"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
function Section8() {
  return (
    <motion.div
      variants={fadeIn(100, "left", "tween", 0.7, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="md:mx-[80px] mx-[20px] rounded-md mt-[140px] px-[30px] md:px-[75px] flex md:flex-row flex-col justify-between items-center p-5 bg-gray-600/50"
    >
      {/* left section */}
      <div className="max-w-[600px] ">
        <p className="font-bold text-white text-2xl md:text-4xl">
          Try my service now!
        </p>
        <p className="text-dimWhite mt-6">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      {/* right */}
      <div className="mt-[10px]">
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring" }}
          className="bg-cyan-400 p-2 text-sm  md:text-lg rounded-md"
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
}
export default Section8;
