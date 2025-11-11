"use client";

import React, { useState } from "react";
import { Header } from "../../header";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollProgressCircle from "../../scrolling";

export default function SERVOMOTOR() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const servoData = [
    {
      model: "SD700 Series High-Performance Servo Drive",
      description:
        "VEICHI SD700 series servo drives deliver high performance, high reliability, and excellent cost-effectiveness. Designed for industrial environments and demanding automation systems, SD700 combines powerful control performance with advanced feedback technology to ensure smooth, precise, and responsive motion control.",
      specs: [
        "Speed loop response bandwidth up to 3kHz.",
        "23-bit absolute encoder with 2.5Mpps communication speed.",
        "Automatic PID loop gain calculation for quick setup.",
        "Advanced PC software with multi-channel monitoring.",
        "Automatic inertia identification and parameter optimization.",
        "Multi-stage vibration control to suppress mechanical resonance.",
        "Robust control for smooth operation (supports up to 30× load inertia).",
        "Compact, space-saving design with new industrial appearance.",
      ],
      images: [
        "/veichi/sd700-all.jpg",
        "/veichi/sd700-1.jpg",
        "/veichi/sd700-3.jpg",
      ],
    },
    {
      model: "SD710 Series General Servo System",
      description:
        "VEICHI SD710 series servo drives continue the brand’s hallmark of reliability and precision. Equipped with smart tuning, parameter copy functionality, and advanced bus communication, SD710 is optimized for integration, flexibility, and easy operation in modern automation systems.",
      specs: [
        "Upgraded PC software interface for easier configuration.",
        "Drive parameter copy for quick system duplication.",
        "Compatible with 17-bit and 23-bit absolute encoders.",
        "Maintains high dynamic response and stability.",
        "Automatic parameter adjustment and intelligent tuning.",
        "Supports powerful industrial bus communication protocols.",
        "Smart configuration options for quick commissioning.",
        "Upgraded compact structure and hardware design.",
      ],
      images: [
        "/veichi/sd710-all.jpg",
        "/veichi/sd710-2.jpg",
        "/veichi/sd710-3.jpg",
      ],
    },
    {
      model: "400KW Series Integrated Servo Drive & Motor",
      description:
        "The VEICHI 400KW integrated servo drive & motor system combines low-voltage synchronous motor, encoder, and servo drive into a single compact unit. This design minimizes wiring errors, saves installation cost, and enhances motion precision. With advanced control algorithms and efficient design, it ensures top-tier performance and fast response.",
      specs: [
        "Integrated design — servo drive, motor, and encoder combined.",
        "International-grade algorithm for superior precision.",
        "Simplified wiring reduces installation cost and errors.",
        "Compact design for space-saving industrial layouts.",
        "Rapid response and smooth torque output.",
        "Reduced cable losses and electromagnetic interference.",
        "Easy to install and maintain with fewer components.",
        "Ideal for robotics and high-speed automation systems.",
      ],
      images: [
        "/veichi/400kw.jpg",
        "/veichi/400kw-1.jpg",
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

      {/* --- Page Header --- */}
      <motion.div
          className="relative flex flex-col items-center text-center mt-14 space-y-4 w-full max-w-8xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="w-full bg-gray-100">
            <h1 className="text-2xl sm:text-3xl p-3 md:text-4xl font-bold">
            Servo Motor & Drive Series
          </h1>
        </div>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Explore <b className="text-blue-500">VEICHI’s</b> advanced servo
          motor and drive solutions — engineered for precision motion, speed
          control, and unmatched reliability in industrial automation.
        </p>
      </motion.div>

      {/* --- Servo Product Sections --- */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {servoData.map((servo, index) => (
          <ServoSection key={index} servo={servo} index={index} fadeUp={fadeUp} />
        ))}
      </div>

      <ScrollProgressCircle />
    </motion.div>
  );
}

// 🔹 Individual Servo Section (carousel + text)
function ServoSection({ servo, index, fadeUp }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % servo.images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + servo.images.length) % servo.images.length);

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
        {/* Image Carousel */}
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
                src={servo.images[currentIndex]}
                alt={servo.model}
                fill
                className="object-contain rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 sm:gap-4 mt-4 flex-wrap justify-center">
          {servo.images.map((img, idx) => (
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
                  alt={`${servo.model} ${idx}`}
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
        <h3 className="text-3xl font-bold text-blue-500">{servo.model}</h3>
        <p className="text-gray-700 text-lg">{servo.description}</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {servo.specs.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
