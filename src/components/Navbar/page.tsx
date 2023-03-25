"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navVariants, coverVariants, navChildVar } from "@/utils/motion";
import { NavItems } from "./NavItems";
import { useState } from "react";
import { FaAlignJustify, FaWindowClose } from "react-icons/fa";
function Navbar() {
  const [line1, setLine1] = useState(false);
  const [line2, setLine2] = useState(false);
  const [line3, setLine3] = useState(false);
  const [line4, setLine4] = useState(false);
  const [cover, setCover] = useState(false);
  const setStateArray = [setLine1, setLine2, setLine3, setLine4];
  const setArray = [line1, line2, line3, line4];
  return (
    <div className="relative z-50 py-[50px] mt-[12px]">
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="px-[25px] md:px-[75px] py-[15px] flex justify-between items-center absolute top-0 left-0 w-full "
      >
        <p className="text-white text-3xl font-bold">Portfolio</p>
        {/* Mobile nav */}
        <div>
          <FaAlignJustify
            size={20}
            color="cyan"
            onClick={() => setCover(!cover)}
            className="md:hidden"
          />
        </div>
        {/* Nav cover */}
        <AnimatePresence>
          {cover && (
            <motion.div
              variants={coverVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="bg-cyan-400 absolute top-0 right-0 w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-[25px]"
            >
              <AnimatePresence>
                {NavItems.map((item) => {
                  return (
                    <motion.div variants={navChildVar} key={item.label}>
                      <Link
                        className="text-gray-800 font-semibold text-2xl"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <FaWindowClose
                  color="black"
                  size={35}
                  onClick={() => setCover(!cover)}
                />
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Desktop Nav */}
        <div className="md:flex hidden gap-[60px] text-lg">
          {NavItems.map((item, index) => {
            return (
              <div
                className="relative"
                key={index}
                onMouseEnter={() => setStateArray[index](true)}
                onMouseLeave={() => setStateArray[index](false)}
              >
                <Link href={item.href} className="text-dimWhite">
                  <motion.p
                    whileHover={{ color: "rgb(103 232 249)" }}
                    transition={{ duration: 0.6 }}
                  >
                    {" "}
                    {item.label}
                  </motion.p>
                </Link>
                <AnimatePresence>
                  {setArray[index] && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                      exit={{ width: 0 }}
                      className="absolute bg-cyan-400 w-full h-1 rounded-2xl"
                    ></motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
export default Navbar;
