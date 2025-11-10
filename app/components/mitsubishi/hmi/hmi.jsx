"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../../ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "../../header";

export default function FAHMI() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    // Two models: 7-inch & 10-inch
    const hmiModels = [
        {
            title: "GS2107-WTBD-N (7-inch HMI)",
            images: [
                { src: "/mitsubishi/hmi7.webp", label: "7-inch HMI Front View" },
                { src: "/mitsubishi/hmi.jpg", label: "7-inch HMI Display" },
                { src: "/mitsubishi/hmi.png", label: "HMI Connection Ports" },
            ],
            description: `
The Mitsubishi Electric GS2107-WTBD-N is a 7-inch TFT LCD HMI from the GOT SIMPLE Series — designed to simplify operation and boost efficiency across a wide range of industrial automation applications. Compact yet powerful, this HMI delivers intuitive operation, superior display quality, and versatile communication options.
      `,
            features: [
                "7-inch WVGA TFT LCD color display with 65,536 colors.",
                "High resolution (800 × 480) for clear visualization.",
                "Ethernet, RS-232, and RS-422/485 communication interfaces.",
                "Front panel protection rated IP65F for industrial durability.",
                "Integrated USB host/device ports for easy data transfer.",
                "Built-in 15 MB internal memory with SD card slot for data logging.",
                "Intuitive project setup with GT Works3 software.",
                "Supports Modbus, CC-Link, and Mitsubishi PLC direct connection.",
                "Compact size for space-saving installation.",
            ],
            specs: {
                "Display Size": "7 inches (WVGA)",
                "Resolution": "800 × 480 pixels",
                "Display Type": "TFT Color LCD (65,536 colors)",
                "Communication": "Ethernet, RS-232, RS-422/485, USB",
                "Power Supply": "24V DC ±10%",
                "Internal Memory": "15 MB + SD card slot",
                "Protection Rating": "IP65F (Front Panel)",
                "Operating Temp": "0°C to +50°C",
                "Mounting": "Panel Mount",
                "Software": "GT Works3",
            },
            dimensions: {
                Width: "189 mm",
                Height: "136 mm",
                Depth: "56 mm",
                Weight: "1.1 kg",
            },
            conformity: [
                ["CE", "COMPLIANT"],
                ["UL/cUL", "COMPLIANT"],
                ["EAC", "COMPLIANT"],
                ["UKCA", "COMPLIANT"],
            ],
        },
        {
            title: "GS2110-WTBD-N (10-inch HMI)",
            images: [
                { src: "/mitsubishi/hmi10.webp", label: "10-inch HMI Display" },
                { src: "/mitsubishi/hmi.png", label: "GS2110 Front Panel" },
                { src: "/mitsubishi/hmi7.webp", label: "Mounted 10-inch HMI" },
            ],
            description: `
The Mitsubishi Electric GS2110-WTBD-N is a 10-inch widescreen HMI from the GOT SIMPLE Series, designed for enhanced visualization and advanced control applications. It offers an expanded view area with superior image clarity, making it ideal for complex systems and large-scale industrial panels.
      `,
            features: [
                "10.1-inch WVGA TFT LCD color display with 65,536 colors.",
                "High brightness and wide viewing angle for enhanced readability.",
                "Built-in Ethernet, RS-232, RS-422/485, and dual USB ports.",
                "IP65F-rated front panel for harsh environments.",
                "Large screen ideal for complex multi-window operation.",
                "Integrated 15 MB memory with SD card slot for data logging.",
                "Simple configuration via GT Works3 software suite.",
                "Supports Modbus, CC-Link, and direct connection to Mitsubishi PLCs.",
                "Energy-efficient design with long service life components.",
            ],
            specs: {
                "Display Size": "10.1 inches (WVGA)",
                "Resolution": "800 × 480 pixels",
                "Display Type": "TFT Color LCD (65,536 colors)",
                "Communication": "Ethernet, RS-232, RS-422/485, USB Host/Device",
                "Power Supply": "24V DC ±10%",
                "Internal Memory": "15 MB + SD card slot",
                "Protection Rating": "IP65F (Front Panel)",
                "Operating Temp": "0°C to +50°C",
                "Mounting": "Panel Mount",
                "Software": "GT Works3",
            },
            dimensions: {
                Width: "272 mm",
                Height: "214 mm",
                Depth: "56 mm",
                Weight: "1.3 kg",
            },
            conformity: [
                ["CE", "COMPLIANT"],
                ["UL/cUL", "COMPLIANT"],
                ["EAC", "NON-COMPLIANT"],
                ["UKCA", "COMPLIANT"],
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

            {/* Page Header */}
            <motion.div
                className="relative flex flex-col items-center text-center mt-14 space-y-6 w-full max-w-8xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-full bg-gray-100">
                    <h1 className="py-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                        HMI
                    </h1>
                </div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mt-4">
                    The <b className="text-blue-400">GOT SIMPLE SERIES</b> by Mitsubishi Electric provides
                    reliable, cost-effective Human Machine Interfaces (HMIs) for real-world industrial needs.
                    The series features advanced <b>TFT color displays</b>, wide communication compatibility,
                    and <b>IP65F protection</b>, ensuring easy operation, durability, and performance in
                    automated environments.
                </p>
            </motion.div>

            {/* Render Both Models */}
            {hmiModels.map((hmi, index) => {
                const [currentIndex, setCurrentIndex] = useState(0);
                const nextImage = () => setCurrentIndex((prev) => (prev + 1) % hmi.images.length);
                const prevImage = () =>
                    setCurrentIndex((prev) => (prev - 1 + hmi.images.length) % hmi.images.length);

                return (
                    <motion.div
                        key={index}
                        className="w-full max-w-7xl space-y-10 border-b pb-10 last:border-none"
                        variants={fadeUp}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6 text-center">
                            {hmi.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Left - Image Carousel */}
                            <motion.div
                                className="flex flex-col items-center w-full"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-lg">
                                    {/* Buttons */}
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
                                                src={hmi.images[currentIndex].src}
                                                alt={hmi.images[currentIndex].label}
                                                fill
                                                className="object-contain rounded-2xl"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Thumbnails */}
                                <div className="flex gap-3 sm:gap-4 mt-4 flex-wrap justify-center">
                                    {hmi.images.map((img, idx) => (
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
                            </motion.div>

                            {/* Right - Details */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="w-full"
                            >
                                <div className="p-5 sm:p-6 border-gray-300 border-2 rounded-2xl">
                                    <CardContent className="space-y-4">
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            {hmi.description}
                                        </p>

                                        <h3 className="text-base font-semibold text-gray-800">Key Features</h3>
                                        <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                                            {hmi.features.map((f, i) => (
                                                <li key={i}>{f}</li>
                                            ))}
                                        </ul>

                                        <h3 className="text-base font-semibold text-gray-800 mt-4">
                                            Technical Specifications
                                        </h3>
                                        <div className="grid grid-cols-1 gap-2 text-sm sm:text-base text-gray-700">
                                            {Object.entries(hmi.specs).map(([key, val], idx) => (
                                                <div key={idx} className="flex justify-between border-b py-1">
                                                    <span className="font-medium">{key}</span>
                                                    <span>{val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom - Dimensions and Conformity */}
                        <div className="mt-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column - Dimensions & Weight */}
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-gray-800">
                                        Product Dimensions & Weight
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center text-sm sm:text-base text-gray-700">
                                        {Object.entries(hmi.dimensions).map(([key, val], idx) => (
                                            <div key={idx} className="border p-3 rounded-md shadow-sm">
                                                <span className="font-semibold block">{key}</span>
                                                {val}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column - Conformity */}
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center text-gray-800">
                                        Conformity
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm sm:text-base">
                                        {hmi.conformity.map(([label, value], idx) => (
                                            <div key={idx} className="border p-3 rounded-md shadow-sm bg-gray-50">
                                                <span className="font-semibold block">{label}</span>
                                                {value}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                );
            })}
        </motion.div>
    );
}
