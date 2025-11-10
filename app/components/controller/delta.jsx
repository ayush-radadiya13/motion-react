"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Header } from "@/app/components/header";

export default function DeltaCNCController() {
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
        { src: "/delta/cnc-all.jpg", label: "User-Friendly CNC Interface" },
        { src: "/delta/cnc-1.jpg", label: "Delta CNC Controller - Front View" },
        { src: "/delta/cnc-2.jpg", label: "High-Speed Dual CPU System" },
        { src: "/delta/cnc-3.jpg", label: "Delta Servo Drive Integration" },
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
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                        Delta CNC Controller
                    </h1>
                    <p className="text-blue-600 mt-2 font-semibold text-lg">
                        Model: B-Series / General-Purpose CNC Controllers
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
                <Card className="p-6 sm:p-8 shadow-md rounded-2xl">
                    <CardContent className="space-y-10 text-gray-800">
                        {/* Features & Benefits */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                                Features & Benefits
                            </h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Built-in 32-bit high-speed dual CPU for multitasking and top performance.</li>
                                <li>Implements data transmission and noise suppression with Delta high-speed servo drives.</li>
                                <li>High-resolution encoder (up to 0.1 µm accuracy) for smooth and precise motion.</li>
                                <li>Automatic gain adjustment ensures optimal motion control during tuning.</li>
                                <li>New DOPSoft-based HMI customization interface for user flexibility.</li>
                                <li>USB port for easy data access and parameter backup.</li>
                                <li>Optional spindle types — communication or analog voltage type.</li>
                                <li>MPG function allows manual pulse or handwheel control with push button.</li>
                            </ul>
                        </section>

                        {/* Product Overview */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                                Product Overview
                            </h2>
                            <p className="leading-relaxed">
                                Delta's general-purpose CNC controllers integrate an HMI to create a
                                user-friendly operating interface and customizable functions tailored
                                to specific industrial needs. Built with Delta’s <b>DMCNET motion bus</b>,
                                these controllers deliver high-speed, high-precision, and smooth operation
                                when paired with Delta’s <b>ASDA-A3</b> or <b>ASDA-B3</b> series servo drives,
                                and support both <b>PM</b> and <b>IM spindle motors</b>.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                Supporting standard <b>ISO G-code</b> format and advanced motion algorithms,
                                Delta CNC controllers enable efficient and flexible machining for
                                applications like milling, drilling, and tapping. With Delta’s long-term
                                industrial experience, these controllers are designed to enhance productivity
                                and help manufacturers stay competitive.
                            </p>
                        </section>

                        {/* Communication & Compatibility */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                                Communication & Compatibility
                            </h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Seamless integration with Delta Servo Systems and spindles.</li>
                                <li>Supports Delta DMCNET, EtherCAT, and MECHATROLINK communication.</li>
                                <li>Compatible with ASDA-A3 and ASDA-B3 servo drives.</li>
                                <li>High-speed motion synchronization with advanced noise immunity.</li>
                                <li>Real-time control for complex, multi-axis operations.</li>
                            </ul>
                        </section>

                        {/* Applications */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                                Applications
                            </h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>CNC milling, drilling, and tapping machines.</li>
                                <li>Precision part manufacturing and die-cutting systems.</li>
                                <li>Automated industrial machinery with multi-axis motion.</li>
                                <li>Custom machining solutions requiring fast response and accuracy.</li>
                            </ul>
                        </section>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    );
}
