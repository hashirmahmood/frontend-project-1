"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
function Section2() {
  return (
    <motion.div
      variants={fadeIn(70, "left", "spring", 1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col gap-6 md:flex-row justify-between px-[25px] md:px-[75px] mt-[370px] relative "
    >
      <div className="absolute pink__gradient w-[60%] h-[60%] rounded-full" />
      <div className="flex gap-3">
        <p className="font-bold text-white text-xl">3800+</p>
        <p className="text-gradient text-lg">USER ACTIVE</p>
      </div>
      <div className="text-gradient hidden md:block">|</div>
      <div className="flex gap-3">
        <p className="font-bold text-white text-xl">230+</p>
        <p className="text-gradient text-lg">TRUSTED BY COMPANY</p>
      </div>
      <div className="text-gradient hidden md:block">|</div>
      <div className="flex gap-3">
        <p className="font-bold text-white text-xl">$230M+</p>
        <p className="text-gradient text-lg">TRANSACTIONS</p>
      </div>
    </motion.div>
  );
}
export default Section2;
