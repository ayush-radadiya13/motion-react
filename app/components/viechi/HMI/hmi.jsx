"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../../ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "../../header";

export default function SpecSheet() {
  const images = [
    { src: "/veichi/hmi-all.jpg", label: "10 inch HMI" },
    { src: "/veichi/7 inch.jpg", label: "7 inch HMI" },
    { src: "/veichi/hmi-1.jpg", label: "4.3 inch HMI" },
    { src: "/veichi/15 inch.jpg", label: "15 inch HMI" },
    { src: "/veichi/10inch-1.jpg", label: "4.3 inch HMI" },
    { src: "/veichi/10inch.jpg", label: "15 inch HMI" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center bg-white justify-center px-4 sm:px-8 lg:px-12 py-10 space-y-10"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <Header />

      {/* Heading & Description */}
      <motion.div
        className="relative flex flex-col items-center text-center mt-14 space-y-4 w-full max-w-8xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full bg-gray-100 ">
            <h1 className="text-2xl sm:text-3xl p-3 md:text-4xl font-bold">
            HMI
          </h1>
        </div>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mt-4">
          We’d love to hear from you! Whether you have questions about our
          products, need technical support, or want to discuss potential
          collaborations — our team at{" "}
          <b className="text-blue-500">MOTION AUTOMATION</b> is here to help.
          Our HMI (Human-Machine Interface) products, including 4.3”, 7”, 10”,
          and 15” high-brightness TFT LCD displays, support edge computing and
          industrial automation applications.
        </p>
      </motion.div>

      {/* Image + Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl items-center">
        {/* Left - Image Carousel */}
        <motion.div
          className="flex flex-col items-center w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-lg">
            {/* Left Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Right Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Main Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col justify-end items-center"
              >
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].label}
                  fill
                  className="object-contain rounded-2xl"
                />
                <div className="mt-3 mb-2 bg-blue-500 rounded-xl text-white text-xs sm:text-sm px-4 py-1 sm:py-2 shadow">
                  {images[currentIndex].label}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 sm:gap-4 mt-4 flex-wrap justify-center">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                className={`flex flex-col items-center cursor-pointer transition-transform ${
                  idx === currentIndex ? "scale-110" : "scale-100"
                }`}
                onClick={() => setCurrentIndex(idx)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-14 h-10 sm:w-20 sm:h-14 relative border rounded-md overflow-hidden shadow-sm">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - Overview & Features */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <Card className="p-5 sm:p-6 shadow-md rounded-2xl">
            <CardContent className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-600">
                Model: VI20-043S-F
              </h2>

              <p className="text-gray-700 text-sm sm:text-base">
                <b>Inch:</b> 4.3”, 7”, 10”, 15”
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                The <b>VI20-043S-F</b> is a 4.3” 16:9 TFT LCD high-brightness
                HMI display supporting edge computing, ideal for industrial
                automation.
              </p>

              <h3 className="text-base font-medium text-gray-800">
                Key Features
              </h3>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                <li>High-Definition Display: 800 × 480 resolution, 16-bit color</li>
                <li>Wide Viewing Angle: up to 170°</li>
                <li>Edge Computing software for local processing</li>
                <li>300+ protocol local resolution</li>
                <li>VPN & routing functions</li>
                <li>Data storage and MQTT support</li>
              </ul>

              <h3 className="text-base font-medium text-gray-800">
                UI / Display Behavior
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Supports multi-side parameter display and smooth scrolling
                interface. Designed for clear visibility and reliable
                performance.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom - Hardware Parameters */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <Card className="p-4 sm:p-6 w-full rounded-none shadow-none">
          <CardContent className="max-w-7xl mx-auto space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-gray-800">
              Hardware Parameters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-sm sm:text-base text-gray-700">
              {[
                ["Display Screen", "4.3” 16:9 TFT LCD"],
                ["Resolution", "800 × 480"],
                ["Brightness", "250 cd/m²"],
                ["Viewing Angle", "170° (max)"],
                ["Touch Screen", "4-wire resistive"],
                ["CPU", "720 MHz ARM"],
                ["Memory", "128 MB Flash"],
                ["Ethernet", "Not available"],
                ["USB Port", "1 × Type-C OTG"],
              ].map(([label, value], idx) => (
                <div
                  key={idx}
                  className="flex justify-between border-b pb-2 text-gray-800"
                >
                  <span className="font-semibold">{label}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
