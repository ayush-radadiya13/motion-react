"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CardContent } from "../../ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "../../header";

export default function ServoAmplifierPage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const servoModels = [
        {
            title: "MR-JE-100A (1 kW)",
            subtitle: "Digital AC Servo Amplifier – MELSERVO-JE Series",
            images: [
                { src: "/mitsubishi/mrjea5-3.jpg", label: "MR-JE-100A Wiring Terminals" },
                { src: "/mitsubishi/mrjEA.jpg", label: "MR-JE-100A Front View" },
                { src: "/mitsubishi/mrj-2.jpg", label: "MR-JE-100A Side Profile" },
            ],
            description: `
The Mitsubishi Electric MR-JE-100A is a 1 kW AC Servo Amplifier from the MELSERVO-JE Series. 
Designed for high performance and precise motion control, it offers easy setup, built-in dynamic braking, 
and fast response ideal for compact automation machines.
      `,
            features: [
                "Rated output: 1 kW with single-axis control.",
                "3-phase 230 V AC power supply.",
                "Built-in dynamic brake for rapid stop control.",
                "Compact and lightweight body for easy panel installation.",
                "Supports real-time auto-tuning for quick setup.",
                "Ideal for packaging, material handling, and pick-and-place applications.",
            ],
            specs: {
                Series: "MELSERVO-JE",
                Type: "MR-JE",
                "Rated Capacity": "1 kW",
                "Number of Axes": "1",
                "Power Supply": "3-Phase 230 V AC",
                "Dynamic Brake": "Built-in",
                Width: "70 mm",
                Height: "168 mm",
                Depth: "185 mm",
                Weight: "1.5 kg",
            },
        },
        {
            title: "MR-J5-200A-RJ (2 kW)",
            subtitle: "Digital AC Servo Amplifier – MELSERVO-J5 Series",
            images: [
                { src: "/mitsubishi/mrj-2.jpg", label: "MR-J5-200A-RJ Front View" },
                { src: "/mitsubishi/mrj5-1.jpg", label: "MR-J5-200A-RJ Compact Design" },
                { src: "/mitsubishi/mrjea5-3.jpg", label: "MR-J5-200A-RJ Terminals" },
            ],
            description: `
The MR-J5-200A-RJ from Mitsubishi’s MELSERVO-J5 Series is a 2 kW servo amplifier supporting 
1-phase or 3-phase 230 V input and STO safety functionality. 
It provides ultra-fast response, high accuracy, and compatibility with advanced servo motors.
      `,
            features: [
                "Rated output: 2 kW single-axis amplifier.",
                "STO (Safe Torque Off) compliant safety function.",
                "1-phase/3-phase 230 V AC power input.",
                "Built-in dynamic braking resistor.",
                "Advanced vibration suppression and predictive maintenance functions.",
                "Ideal for robotics, packaging, and high-speed machine applications.",
            ],
            specs: {
                Series: "MELSERVO-J5",
                Type: "MR-J5",
                "Rated Capacity": "2 kW",
                "Number of Axes": "1",
                "Power Supply": "1 Phase/3 Phase 230 V AC",
                "Command Interface": "Generic Interface",
                "Dynamic Brake": "Built-in",
                Width: "90 mm",
                Height: "172 mm",
                Depth: "195 mm",
                Weight: "2.2 kg",
                Safety: "STO (IEC/EN 61800-5-2)",
                Conformity: "CE, UL/cUL, EAC, UKCA",
            },
        },
        {
            title: "MR-JET-200G (2 kW)",
            subtitle: "Digital AC Servo Amplifier – MELSERVO-JET Series",
            images: [
                { src: "/mitsubishi/200g.jpg", label: "MR-JET-200G Front View" },
                { src: "/mitsubishi/200g-1.jpeg", label: "MR-JET-200G CC-Link IE TSN Interface" },
            ],
            description: `
The MR-JET-200G is part of Mitsubishi’s latest MELSERVO-JET Series, featuring CC-Link IE TSN connectivity 
for high-speed, deterministic communication. With 2 kW rated capacity, it ensures exceptional precision, 
network flexibility, and reliability for advanced automation systems.
      `,
            features: [
                "Rated output: 2 kW with single-axis control.",
                "CC-Link IE TSN network interface for fast real-time communication.",
                "Supports both 1-phase and 3-phase 230 V AC input.",
                "Built-in dynamic braking for enhanced safety.",
                "Compact, robust design for machine integration.",
                "Ideal for high-performance CNC and servo-driven automation lines.",
            ],
            specs: {
                Series: "MELSERVO-JET",
                Type: "MR-JET",
                "Rated Capacity": "2 kW",
                "Number of Axes": "1",
                "Power Supply": "1 Phase/3 Phase 230 V AC",
                "Command Interface": "CC-Link IE TSN",
                "Dynamic Brake": "Built-in",
                Width: "80 mm",
                Height: "196 mm",
                Depth: "205 mm",
                Weight: "2.1 kg",
                Conformity: "CE, UL/cUL, EAC, UKCA",
            },
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

            {/* Page Header */}
            <motion.div
                className="relative flex flex-col items-center text-center mt-14 space-y-6 w-full max-w-8xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-full bg-gray-100 py-3">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                         SERVO DRIVER AND MOTOR
                    </h1>
                    <p className="text-blue-400 mt-2 font-semibold text-lg">
                        MELSERVO-JE | MELSERVO-J5 | MELSERVO-JET
                    </p>
                </div>
            </motion.div>

            {/* Render all models */}
            {servoModels.map((servo, index) => {
                const [currentIndex, setCurrentIndex] = useState(0);
                const nextImage = () =>
                    setCurrentIndex((prev) => (prev + 1) % servo.images.length);
                const prevImage = () =>
                    setCurrentIndex(
                        (prev) => (prev - 1 + servo.images.length) % servo.images.length
                    );

                return (
                    <motion.div
                        key={index}
                        className="w-full max-w-7xl space-y-10 border-b pb-10 last:border-none"
                        variants={fadeUp}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6 text-center">
                            {servo.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Left – Image Carousel */}
                            <motion.div
                                className="flex flex-col items-center w-full"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-lg">
                                    {/* Navigation Buttons */}
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md"
                                    >
                                        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md"
                                    >
                                        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                                    </button>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ opacity: 0, scale: 1.05 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.6 }}
                                            className="absolute inset-0 flex justify-center items-center"
                                        >
                                            <Image
                                                src={servo.images[currentIndex].src}
                                                alt={servo.images[currentIndex].label}
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

                            {/* Right – Description & Specs */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="w-full"
                            >
                                <div className="p-5 sm:p-6 border-gray-300 border-2 rounded-2xl">
                                    <CardContent className="space-y-4">
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            {servo.description}
                                        </p>

                                        <h3 className="text-base font-semibold text-gray-800">
                                            Key Features
                                        </h3>
                                        <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                                            {servo.features.map((f, i) => (
                                                <li key={i}>{f}</li>
                                            ))}
                                        </ul>

                                        <h3 className="text-base font-semibold text-gray-800 mt-4">
                                            Technical Specifications
                                        </h3>
                                        <div className="grid grid-cols-1 gap-2 text-sm sm:text-base text-gray-700">
                                            {Object.entries(servo.specs).map(([key, val], idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex justify-between border-b py-1"
                                                >
                                                    <span className="font-medium">{key}</span>
                                                    <span>{val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
