"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { section7Cover, navChildVar } from "@/utils/motion";
function HoverCard({ imgUrl }: any) {
  const [cover, setCover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setCover(true)}
      onMouseLeave={() => setCover(false)}
      className="relative border border-cyan-400 m-6 md:max-w-[350px] flex flex-col gap-5 items-center bg-cyan-700/20 rounded-md overflow-hidden "
    >
      <Image src={imgUrl} alt="" width={350} height={10} />
      <p className="text-white font-semibold text-2xl">Dummy Text</p>
      <p className="text-dimWhite px-4 py-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo aspernatur
        ut ipsa consequuntur sint libero sed nemo itaque ex eius.
      </p>
      <AnimatePresence>
        {cover && (
          <motion.div
            variants={section7Cover}
            initial="hidden"
            animate="show"
            exit="exit"
            className="bg-cyan-400 absolute w-full h-full "
          >
            <motion.div
              variants={navChildVar}
              className="flex flex-col items-center justify-around w-full h-full"
            >
              <h2 className="text-gray-800 text-xl md:text-3xl font-semibold">
                Lorem
              </h2>
              <p className="text-gray-800 px-4 text-sm md:text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos beatae laborum dicta cupiditate, eius officiis quos
                impedit consequatur ipsa? Fugiat rerum cum asperiores nobis
                illum praesentium eligendi placeat quam in dolor consequuntur
                autem, quae voluptatum dolores. Atque, animi. Cumque accusamus,
                voluptate tempore assumenda iste voluptas atque maxime deleniti.
                Tempore, ipsam.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
export default HoverCard;
