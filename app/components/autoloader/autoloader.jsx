"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Header } from "@/app/components/header";

export default function     CNCAutoloader() {
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
        { src: "/cnc-autoloader.jpg", label: "CNC Autoloader – Installed on CNC Machine" },
        // { src: "/autoloader/cnc-auto2.jpg", label: "Pneumatic and Servo Control System" },
        // { src: "/autoloader/cnc-auto3.jpg", label: "Raw Material Loading & Finished Component Unloading" },
        // { src: "/autoloader/cnc-auto4.jpg", label: "Custom-Built CNC Autoloader Design" },
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
                        CNC AUTOLOADER
                    </h1>
                    <p className="text-blue-600 mt-2 font-semibold text-lg">
                        Fast, Reliable, and Cost-Effective CNC Loading Solution
                    </p>
                </div>
            </motion.div>

            {/* Image Carousel */}
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
                        <div className="mt-3 mb-2 bg-blue-400 rounded-xl text-white text-xs sm:text-sm px-4 py-1 sm:py-2 shadow">
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
                        className={`flex flex-col items-center cursor-pointer transition-transform ${idx === currentIndex ? "scale-110" : "scale-100"}`}
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

            {/* Product Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-7xl"
            >
                <div className="p-6 sm:p-8 border-2 space-y-10">

                        {/* Intro Section */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Overview</h2>
                            <p className="leading-relaxed">
                                We are one of India’s leading manufacturers and installers of
                                standalone <b>CNC Autoloaders</b>. Our systems provide fast,
                                accurate, and reliable automation for CNC machines, improving
                                productivity while reducing manual labor.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                We have successfully installed CNC Autoloaders across industries
                                like automobile parts, submersible pump parts, hydraulic parts,
                                and brass component manufacturing. Our autoloaders are designed
                                to seamlessly integrate with <b>Ace Micromatic, Jyoti CNC, LMW,
                                Macpower CNC, and Realtech CNC</b> machines.
                            </p>
                        </section>

                        {/* Special Features */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Special Features</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Customizable design to match any CNC machine model.</li>
                                <li>Pneumatic and servo-based control panel system for precision.</li>
                                <li>Easy-to-use HMI for operation and diagnostics.</li>
                                <li>Automatic raw material loading and finished part unloading.</li>
                                <li>Quick interface with existing CNC systems for minimal downtime.</li>
                                <li>Air purging system to remove burrs from components.</li>
                            </ul>
                        </section>

                        {/* Advantages */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                                Advantages of Motion Automation CNC Autoloader
                            </h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>One unskilled helper can manage 3–4 CNC machines efficiently.</li>
                                <li>Compact design requires very little floor space.</li>
                                <li>Fast loading/unloading — less than 8 seconds per cycle.</li>
                                <li>No downtime during lunch or breaks with predefined parameters.</li>
                                <li>15–20% increase in productivity guaranteed.</li>
                                <li>On-time delivery and excellent customer support service.</li>
                            </ul>
                        </section>

                        {/* Why Choose Us */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Why Choose Us</h2>
                            <p className="leading-relaxed">
                                At <b>Motion Automation</b>, we focus on providing innovative,
                                durable, and efficient CNC automation solutions at a fraction of
                                the cost of robotic or gantry systems. Our CNC Autoloaders are the
                                perfect low-cost automation alternative for manufacturers looking
                                to maximize productivity and reduce manual intervention.
                            </p>
                        </section>
                </div>
            </motion.div>
        </motion.div>
    );
}
