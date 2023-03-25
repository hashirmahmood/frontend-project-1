"use client";
import Card from "@/components/Card/page";
import { messages, names, images } from "./messages";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "./swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
function Slider() {
  return (
    <motion.div
      variants={fadeIn(100, "left", "spring", 0.7, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-[80px] md:mt-[250px] px-[17px] md:px-[75px]"
    >
      <div className="flex md:flex-row flex-col justify-between gap-6">
        {/* Left text */}
        <div className="text-white text-3xl md:text-5xl font-bold">
          <p>What people are</p>
          <p>saying about us</p>
        </div>
        {/* Right text */}
        <div className="mr-[100px]">
          <p className="text-dimWhite max-w-[450px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="">
        <Swiper
          className="md:px-[60px] py-12"
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={3}
          grabCursor={true}
          rewind={true}
          freeMode={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          <SwiperSlide>
            <Card message={messages[0]} imgUrl={images[0]} name={names[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <Card message={messages[1]} imgUrl={images[1]} name={names[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <Card message={messages[2]} imgUrl={images[2]} name={names[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <Card message={messages[0]} imgUrl={images[0]} name={names[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <Card message={messages[1]} imgUrl={images[1]} name={names[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <Card message={messages[2]} imgUrl={images[2]} name={names[2]} />
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
}
export default Slider;
