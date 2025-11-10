"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Header } from "@/app/components/header";

export default function SPMMachinePage() {
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
        { src: "/spm/spm1.jpg", label: "High-Precision SPM Machine Assembly" },
        { src: "/spm/spm2.jpg", label: "Custom-Built SPM for Component Machining" },
        { src: "/spm/spm3.jpg", label: "Hydraulic & Servo-Controlled SPM" },
        { src: "/spm/spm4.jpg", label: "Motion Automation SPM Manufacturing Facility" },
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
                className="relative flex flex-col items-center text-center mt-14 space-y-4 w-full max-w-7xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-full bg-gray-100 py-3">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                        SPM MACHINE MANUFACTURING
                    </h1>
                    <p className="text-blue-600 mt-2 font-semibold text-lg">
                        Custom-Built Special Purpose Machines for Industrial Automation
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

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-7xl"
            >
                <Card className="p-6 sm:p-8 shadow-md rounded-2xl">
                    <CardContent className="space-y-10 text-gray-800">

                        {/* Overview */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Overview</h2>
                            <p className="leading-relaxed">
                                <b>Motion Automation</b> specializes in designing and manufacturing
                                <b> Special Purpose Machines (SPMs)</b> — custom-built systems that
                                deliver unmatched precision, speed, and productivity for industrial
                                automation applications.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                Every SPM is engineered in-house at our advanced manufacturing
                                facility using high-end machining, servo, and control technologies.
                                From concept and design to fabrication and testing, we ensure every
                                unit meets stringent quality and performance standards.
                            </p>
                        </section>

                        {/* Manufacturing Process */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                                Advanced In-House Manufacturing
                            </h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Complete in-house design, fabrication, and assembly process.</li>
                                <li>Equipped with CNC machining, precision grinding, and testing setups.</li>
                                <li>Dedicated control panel and servo integration department.</li>
                                <li>Each SPM is tested under real working conditions before dispatch.</li>
                            </ul>
                        </section>

                        {/* Applications */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Applications</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Automobile component machining & assembly lines.</li>
                                <li>Hydraulic and pneumatic part manufacturing.</li>
                                <li>Submersible pump and motor part processing.</li>
                                <li>Brass, steel, and aluminum component production.</li>
                                <li>Custom automation setups for high-volume operations.</li>
                            </ul>
                        </section>

                        {/* Key Benefits */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Key Benefits</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Reduces cycle time and increases production output.</li>
                                <li>Delivers high repeat accuracy and consistency.</li>
                                <li>Optimized for minimal human intervention and maximum safety.</li>
                                <li>Rugged and durable for 24/7 industrial use.</li>
                                <li>Customized according to your process and component geometry.</li>
                            </ul>
                        </section>

                        {/* Why Choose Motion Automation */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                                Why Choose Motion Automation SPMs
                            </h2>
                            <p className="leading-relaxed">
                                With over a decade of expertise in automation and mechanical
                                engineering, <b>Motion Automation</b> delivers purpose-built SPM
                                solutions tailored to your manufacturing needs. Our machines are
                                not just built — they’re engineered for precision, longevity, and
                                seamless integration into your production line.
                            </p>
                        </section>

                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    );
}
