"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent} from "@/app/components/ui/card";
import { Header} from "@/app/components/header";

export default function BSeriesCNC() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    // --- Carousel Images ---
    const images = [
        { src: "/finger/finger controller.jpg", label: "B Series CNC Front View" },
        { src: "/finger/cnc-2.jpg", label: "7-Inch CNC Display Panel" },
        { src: "/finger/cnc-3.jpg", label: "Milling System Controller" },
        { src: "/finger/cnc-1.jpg", label: "Milling System Controller" },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevImage = () =>
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <motion.div
            className="min-h-screen bg-white flex flex-col items-center px-4 sm:px-8 lg:px-12 py-12 space-y-16"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
        >
            <Header />

            {/* Title Section */}
            <motion.div
                className="relative flex flex-col items-center text-center mt-14 space-y-4 w-full max-w-9xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-full bg-gray-100 py-3 ">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                         Finger CNC Controller
                    </h1>
                    <p className="text-blue-600 mt-2 font-semibold text-lg">
                        Model : 300TA1-H , 400MA1-H , 600MB2-H , 800MB2-H
                    </p>
                </div>
            </motion.div>

            {/* Image Carousel Section */}
            <motion.div
                className="relative w-full max-w-5xl h-64 sm:h-80 md:h-[28rem] overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
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

                {/* Main Image Animation */}
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
            </motion.div>

            {/* Thumbnail Selector */}
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
                            <Image src={img.src} alt={img.label} fill className="object-cover" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Product Content Below Carousel */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-7xl"
            >
                <div className="p-6 sm:p-8 border-2 space-y-10">
                        {/* Product Introduction */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                                Product Introduction
                            </h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>High-definition LCD display.</li>
                                <li>Supports 3 or 4-axis CNC milling control (XYZ or XYZ + 4th axis).</li>
                                <li>Graphical conversational programming for easy operation.</li>
                                <li>
                                    Comprehensive machining modes including drilling, reaming, tapping,
                                    countersinking, boring, and milling various hole sizes.
                                </li>
                                <li>EtherCAT or MECHATROLINK-III bus for enhanced real-time control.</li>
                                <li>Optional IoT support for real-time machining data access.</li>
                            </ul>
                        </section>

                        {/* Hardware Overview */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                                Hardware Overview
                            </h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Multi-core CPU with high-performance computing capability.</li>
                                <li>Equipped with 2GB storage for smooth execution.</li>
                                <li>4.5KV EFT anti-interference design, CE certified.</li>
                                <li>Supports RS485 communication for reliable expansion.</li>
                                <li>High-speed USB 3.0 for fast data backup and import.</li>
                                <li>Power-off data retention ensures reliability.</li>
                                <li>High-resolution color display with clear visuals.</li>
                                <li>Maximum I/O support up to 32 points.</li>
                                <li>Program block pre-read speed up to 1000 Blocks/s.</li>
                                <li>
                                    Auxiliary panel with rotary feedrate switch and tool display for easy use.
                                </li>
                            </ul>
                        </section>

                        {/* Software Overview */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                                Software (Function) Overview
                            </h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>RT-Linux embedded control system platform.</li>
                                <li>Fully compiled execution modules.</li>
                                <li>Configurable IoT development and remote assistance.</li>
                                <li>Platform-based modular design.</li>
                                <li>64-bit high-speed contour control.</li>
                                <li>Graphical conversational program editing.</li>
                                <li>
                                    Constant feedrate for parabolic and spline curves for smooth finishes.
                                </li>
                                <li>Short PLC scan time for fast machining responses.</li>
                                <li>
                                    Supports labeled milling machines, tool compensation, and gantry axes.
                                </li>
                                <li>
                                    Compatible with umbrella, disc-type, and servo-driven tool changers.
                                </li>
                            </ul>
                        </section>

                        {/* Special Features */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                                Special Features
                            </h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    Adjustable tapping retract speed up to 300% for faster operation.
                                </li>
                                <li>Automatic error recovery during abnormal tapping.</li>
                                <li>Overlapping drill-tap cycle increases efficiency by 10%.</li>
                                <li>Real-time tapping monitoring for efficient setup and safety.</li>
                            </ul>
                        </section>
                </div>
            </motion.div>
        </motion.div>
    );
}
