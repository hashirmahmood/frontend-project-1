"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
function Footer() {
  return (
    <motion.div
      variants={fadeIn(100, "up", "tween", 0.7, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="bg-[#0B0A0C] px-[80px] pb-10 mt-[30px]"
    >
      <div className="bg-dimWhite w-full h-[2px] mb-8"></div>
      {/* Upper section */}
      <div className="grid items-center justify-center grid-flow-row md:grid-flow-col md:gap-24 gap-12">
        <div className="flex flex-col gap-3">
          <p className="text-white text-lg font-semibold mb-4 ">
            Social Media:
          </p>
          <div className="text-cyan-400 flex items-center gap-4 ">
            <FaFacebook size={30} /> <span>FaceBook</span>
          </div>
          <div className="text-cyan-400 flex items-center gap-4">
            <FaInstagram size={30} /> <span>Instagram</span>
          </div>
          <div className="text-cyan-400 flex items-center gap-4">
            <FaTwitter size={30} /> <span>Twitter</span>
          </div>
          <div className="text-cyan-400 flex items-center gap-4">
            <FaLinkedinIn size={30} /> <span>LinkedIn</span>
          </div>
        </div>
        <div className="text-dimWhite flex flex-col gap-3">
          <p className="text-white font-semibold text-lg mb-4">Usefull Links</p>
          <p>Content</p>
          <p>How it works</p>
          <p>Create</p>
          <p>Explore</p>
          <p>Terms & Services</p>
        </div>
        <div className="text-dimWhite flex flex-col gap-3">
          <p className="text-white font-semibold text-lg mb-4">Community</p>
          <p>Help Center</p>
          <p>Partners</p>
          <p>Suggestions</p>
          <p>Blog</p>
          <p>Newsletters</p>
        </div>
        <div className="text-dimWhite flex flex-col gap-3">
          <p className="text-white font-semibold text-lg mb-4">Partner</p>
          <p>Our Partner</p>
          <p>Become a Partner</p>
        </div>
      </div>
    </motion.div>
  );
}
export default Footer;
