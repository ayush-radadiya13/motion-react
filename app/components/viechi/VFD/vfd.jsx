"use client";

import React, { useState } from "react";
import { Header } from "../../header";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollProgressCircle from "../../scrolling";

export default function VFD() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const vfdData = [
    {
      model: "AC10 Series VFD",
      description:
        "The AC10 series frequency drive is developed on VEICHI’s latest technology platform, designed for miniaturization, high reliability, and cost-effectiveness. As a narrow-body VFD, it offers convenient installation, compact size, excellent thermal management, and superior protection — all while maintaining strong performance and intelligent design.",
      specs: [
        "Smart and compact, with a narrow book design.",
        "Various installation methods: rail, side, and vertical installation.",
        "Temperature resistance — no derating at 50°C ambient temperature.",
        "Hidden wiring design for easy connection.",
        "High protection with isolated air duct for cooling and dust prevention.",
        "Comprehensive protection: over-current, over-voltage, and current-limiting safeguards.",
        "Network-ready for easy expansion and direct plug-in capability.",
        "High performance with undiminished functionality — small yet powerful.",
      ],
      images: [
        "/veichi/ac10-all.jpg",
        "/veichi/ac10-1.jpg",
        "/veichi/ac10-3.jpg",
      ],
    },
    {
      model: "AC310 Series VFD",
      description:
        "The VEICHI AC310 series is a high-performance vector drive built upon the robust AC300 platform. It combines field-oriented vector control with versatile load management, supporting both asynchronous and synchronous motor types. Designed for precision, reliability, and scalability, the AC310 delivers exceptional torque control, efficiency, and adaptability for industrial environments.",
      specs: [
        "High-performance vector platform with new motor control algorithms.",
        "Supports synchronous and asynchronous drives in both open- and closed-loop modes.",
        "Excellent dynamic response and torque excitation decoupling.",
        "Compact book-style design saves installation space.",
        "Optimized thermal layout for superior heat dissipation.",
        "Innovative grounding reduces electromagnetic interference (EMI).",
        "Modular software and hardware design with strong expansion capability.",
        "Three-layer PCB coating for superior environmental durability.",
      ],
      images: [
        "/veichi/ac310-all.jpg",
        "/veichi/ac310-1.jpg",
        "/veichi/ac310-3.jpg",
      ],
    },
  ];

  return (
      <motion.div
          className="min-h-screen flex flex-col items-center bg-white justify-center px-4 sm:px-8 lg:px-12 py-10 space-y-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
      >
          <Header />

      {/* --- Title Section --- */}
      <motion.div className="relative flex flex-col items-center text-center mt-10 space-y-4 w-full max-w-8xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
          <div className="w-full mt-4 bg-gray-100 ">
              <h1 className="text-2xl sm:text-3xl p-3 md:text-4xl font-bold">
                                    VFD 

          </h1>
        </div>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Explore <b className="text-blue-500">VEICHI’s</b> intelligent and
          compact Variable Frequency Drives — delivering reliability, advanced
          motor control, and industrial-grade performance for automation
          applications.
        </p>
      </motion.div>

      {/* --- VFD Product Sections --- */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {vfdData.map((vfd, index) => (
          <VFDSection key={index} vfd={vfd} index={index} fadeUp={fadeUp} />
        ))}
      </div>

      <ScrollProgressCircle />
    </motion.div>
  );
}

// 🔹 Individual Product Section
function VFDSection({ vfd, index, fadeUp }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % vfd.images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + vfd.images.length) % vfd.images.length);

  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      {/* --- Image Section --- */}
      <div
        className={`flex flex-col justify-center items-center ${
          index % 2 === 1 ? "md:order-2" : "md:order-1"
        }`}
      >
        {/* Carousel */}
        <div className="relative w-full max-w-lg h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-lg">
          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Animated Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={vfd.images[currentIndex]}
                alt={vfd.model}
                fill
                className="object-contain rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 sm:gap-4 mt-4 flex-wrap justify-center">
          {vfd.images.map((img, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col items-center cursor-pointer transition-transform ${
                idx === currentIndex ? "scale-110" : "scale-100"
              }`}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-16 h-12 sm:w-20 sm:h-14 relative border rounded-md overflow-hidden shadow-sm">
                <Image
                  src={img}
                  alt={`${vfd.model} ${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Text Section --- */}
      <div
        className={`space-y-4 ${
          index % 2 === 1 ? "md:order-1 text-left" : "text-left"
        }`}
      >
        <h3 className="text-3xl font-bold text-blue-500">{vfd.model}</h3>
        <p className="text-gray-700 text-lg">{vfd.description}</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {vfd.specs.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
