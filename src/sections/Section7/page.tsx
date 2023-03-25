"use client";
import HoverCard from "@/components/HoverCard/page";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
const imageUrls = ["/img1.webp", "/img2.jpg", "/img3.webp", "/img4.jpg"];
function Section7() {
  return (
    <motion.div
      variants={fadeIn(100, "right", "tween", 0.7, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative flex items-center  flex-col mt-[120px] md:mt-[200px] md:px-[75px]"
    >
      <div className="absolute blue__gradient w-[90%] h-[60%] rounded-full" />
      <p className="my-[20px] text-3xl md:text-4xl text-white font-bold">
        Lorem Section
      </p>
      <div className="flex justify-around md:flex-row flex-col">
        <HoverCard imgUrl={imageUrls[3]} />
        <HoverCard imgUrl={imageUrls[3]} />
        <HoverCard imgUrl={imageUrls[3]} />
      </div>
    </motion.div>
  );
}
export default Section7;
