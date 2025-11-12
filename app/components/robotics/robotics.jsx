"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Header } from "@/app/components/header";
import ScrollProgressCircle from "@/app/components/scrolling";

export default function IndustrialRobots() {
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
        { src: "/robotics/mitsubishi.avif", label: "Mitsubishi Industrial Robot – High Precision" },
        { src: "/robotics/robots.avif", label: "FANUC 6-Axis Robot for CNC Automation" },
        { src: "/robotics/robot-1.avif", label: "Chinese Collaborative Robot (Cobot)" },
        { src: "/robotics/fanuk robots.jpg", label: "Integrated Robot Cell for Automated Production" },
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
                        INDUSTRIAL ROBOTS
                    </h1>
                    <p className="text-blue-600 mt-2 font-semibold text-lg">
                        Mitsubishi | FANUC | Chinese Robots – Precision Automation Solutions
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

                        {/* Introduction */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Overview</h2>
                            <p className="leading-relaxed">
                                Motion Automation provides a wide range of <b>Industrial Robots</b> from leading brands such as <b>Mitsubishi Electric</b>, <b>FANUC</b>, and top-tier <b>Chinese robotic manufacturers</b>.
                                These robots are designed to automate processes such as material handling, loading/unloading, assembly, and precision machining.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                Our robotic automation systems deliver unmatched accuracy, consistency, and reliability — enabling manufacturers to achieve higher productivity with reduced manpower and operational costs.
                            </p>
                        </section>

                        {/* Special Features */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Key Features</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Available in 4, 6, and 7-axis configurations for multi-directional movement.</li>
                                <li>Payload capacity from 1 kg to 200 kg for a wide range of industrial tasks.</li>
                                <li>High-speed servo-driven joints ensure repeatability up to ±0.02 mm.</li>
                                <li>Compact footprint with lightweight aluminum or carbon arm structure.</li>
                                <li>Integrated vision system support for object recognition and alignment.</li>
                                <li>Easy integration with CNC, PLC, and SCADA systems.</li>
                                <li>Energy-efficient drives and simplified maintenance.</li>
                            </ul>
                        </section>

                        {/* Robot Types */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Robot Types & Partners</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><b>Mitsubishi Industrial Robots</b> – Known for speed, precision, and reliability. Ideal for pick & place, palletizing, and machine tending.</li>
                                <li><b>FANUC Robots</b> – Robust and versatile robots used across automotive, packaging, and CNC automation sectors.</li>
                                <li><b>Chinese Collaborative Robots (Cobots)</b> – Affordable and flexible solutions for assembly lines, inspection, and light-duty automation.</li>
                            </ul>
                        </section>

                        {/* Advantages */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Advantages of Robotic Automation</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Increased production efficiency and reduced human error.</li>
                                <li>Consistent quality with 24×7 continuous operation.</li>
                                <li>Enhanced safety by reducing manual handling.</li>
                                <li>Scalable solutions adaptable to different CNC machines.</li>
                                <li>Quick return on investment (ROI) through productivity gain.</li>
                            </ul>
                        </section>

                        {/* Applications */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Applications</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>CNC Machine Loading and Unloading</li>
                                <li>Material Handling and Sorting</li>
                                <li>Assembly Line Automation</li>
                                <li>Packaging and Palletizing</li>
                                <li>Welding, Painting, and Inspection Systems</li>
                            </ul>
                        </section>

                        {/* Why Choose Motion Automation */}
                        <section>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Why Choose Motion Automation</h2>
                            <p className="leading-relaxed">
                                With expertise in automation and integration, <b>Motion Automation</b> delivers customized robotic solutions
                                combining <b>Mitsubishi, FANUC, and advanced Chinese robots</b>.
                                Our systems are engineered for durability, performance, and ease of use — ensuring long-term reliability and maximum productivity in your manufacturing processes.
                            </p>
                        </section>

                </div>
            </motion.div>
            <ScrollProgressCircle />
        </motion.div>
    );
}
