"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Header } from "@/app/components/header";

export default function ADTECHCNCController() {
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
        { src: "/delta/cnc-3.webp", label: "Integrated Servo Control Platform" },
        { src: "/delta/cnc-1.jpg", label: "ADTECH CNC Controller Front Panel" },
        { src: "/delta/cnc-2.jpg", label: "High-Speed Industrial CNC Board" },
    ];

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

            {/* Title Section */}
            <motion.div
                className="relative flex flex-col items-center text-center mt-14 space-y-4 w-full max-w-8xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-full bg-gray-100 py-3">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        ADTECH CNC Controller
                    </h1>
                    <p className="text-blue-600 mt-2 font-semibold text-lg">
                        Model: ADT Series / High-Precision CNC Control System
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
                        {/* Features & Benefits */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                                Features & Benefits
                            </h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Powerful industrial-grade 32-bit multi-core processor.</li>
                                <li>Supports 3~6 axis simultaneous motion with high-speed interpolation.</li>
                                <li>EtherCAT and Modbus communication compatibility for flexible integration.</li>
                                <li>Built-in PLC function for customized automation control.</li>
                                <li>Large color LCD display with intuitive touch interface.</li>
                                <li>Supports G-code programming and macro commands.</li>
                                <li>Real-time diagnostics and error monitoring system.</li>
                                <li>Compact all-in-one design — reduces wiring and setup time.</li>
                            </ul>
                        </section>

                        {/* Product Overview */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                                Product Overview
                            </h2>
                            <p className="leading-relaxed">
                                The ADTECH CNC Controller Series provides high-speed, high-accuracy
                                motion control solutions for industrial machining applications.
                                With integrated motion, I/O, and communication modules, the ADTECH
                                controller ensures smooth interpolation and stable operation for
                                complex multi-axis systems.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                Designed with a user-friendly HMI and G-code compatibility, the ADTECH
                                CNC platform simplifies configuration and enhances productivity for
                                machine tools such as lathes, milling machines, and engraving systems.
                                It combines precision, flexibility, and reliability in a compact
                                industrial-grade unit.
                            </p>
                        </section>

                        {/* Communication & Compatibility */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                                Communication & Compatibility
                            </h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Supports EtherCAT, Modbus, and RS-485 communication.</li>
                                <li>Compatible with ADTECH servo drives and third-party systems.</li>
                                <li>Multi-axis synchronization with smooth path control.</li>
                                <li>Built-in spindle control with analog and pulse output modes.</li>
                                <li>Customizable PLC logic for machine-specific operations.</li>
                            </ul>
                        </section>

                        {/* Applications */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                                Applications
                            </h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>CNC turning, milling, and engraving machines.</li>
                                <li>Automatic tool changers and machining centers.</li>
                                <li>Metal cutting, drilling, and shaping machinery.</li>
                                <li>Precision mold and die manufacturing systems.</li>
                            </ul>
                        </section>
                </div>
            </motion.div>
        </motion.div>
    );
}
