"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { FaSms, FaPhoneAlt, FaInbox, FaHeart } from "react-icons/fa";
const Contact = () => {
  return (
    <motion.div
      variants={fadeIn(100, "right", "tween", 0.7, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col items-center mt-[80px] md:mt-[270px]  relative"
    >
      <div className="absolute blue__gradient w-[60%] h-[60%] rounded-full" />
      <div>
        <p className="text-4xl font-bold text-white ">Contact Us</p>
      </div>
      {/* Upper text */}
      <p className=" font-poppins text-center font-semibold  text-3xl">
        Contact Us
      </p>
      {/* Section */}
      <div className="border-2 max-w-[280px] md:max-w-full md:m-8 flex flex-col md:flex-row shadow-xl">
        {/* Left */}
        <div className="bg-cyan-400 text-gray-800 md:w-[40%] md:gap-2 flex flex-col p-4 md:p-10 ">
          <p className="font-semibold text-4xl pb-4 md:mt-14">
            Contact Information
          </p>
          <p>
            Fill this form to contact us and we will respond to you within 24
            hours
          </p>
          {/* Lower Text */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex gap-4">
                <FaPhoneAlt size={30} />
                <span className="font-semibold text-lg md:text-xl">
                  092-12345678
                </span>
              </div>
              <div className="flex gap-4">
                <FaInbox size={30} />
                <span className="font-semibold text-lg md:text-xl">
                  092-98676522
                </span>
              </div>
              <div className="flex gap-4">
                <FaSms size={30} />
                <span className="font-semibold text-lg md:text-xl">
                  Dummymail989.com
                </span>
              </div>
              {/* Image of heart */}
            </div>
            <motion.div
              className="mr-10 hidden md:block"
              animate={{ scale: [1, 1.6, 1, 1.6, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <FaHeart size={40} />
            </motion.div>
          </div>
        </div>
        {/* Right */}
        <div className="px-3 md:px-8 py-2 text-cyan-400">
          <div className="grid md:grid-cols-2 grid-flow-row gap-8">
            <div className=" text-xl">
              <p>First Name:</p>
              <input
                className="max-w-[90%] border-2 border-cyan-400 rounded-md p-2 mt-2 bg-inherit"
                type="text"
                placeholder="Enter first name"
              />
            </div>
            <div className="  text-xl">
              <p>Last Name:</p>
              <input
                className="max-w-[90%] border-cyan-400 bg-inherit border-2 rounded-md p-2 mt-2"
                type="text"
                placeholder="Enter last name"
              />
            </div>
            <div className="  text-xl">
              <p>First Email:</p>
              <input
                className="max-w-[90%] border-cyan-400 bg-inherit border-2 rounded-md p-2 mt-2"
                type="text"
                placeholder="Enter email address"
              />
            </div>
            <div className="text-xl">
              <p>Phone number:</p>
              <input
                className="max-w-[90%] border-cyan-400 bg-inherit border-2 rounded-md p-2 mt-2"
                type="text"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xl">Your Message:</p>
            <textarea
              name=""
              id=""
              cols={30}
              rows={8}
              placeholder="Enter your message here"
              className="border-cyan-400 bg-inherit border-2 rounded-md p-2 mt-2 w-[100%]"
            ></textarea>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Contact;
