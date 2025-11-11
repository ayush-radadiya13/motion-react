"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Header } from "@/app/components/header";

export default function MitsubishiPLCPage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const plcData = [
        {
            name: "MITSUBISHI FX3S SERIES",
            subtitle: "Compact Entry-Level PLC for Basic Automation",
            images: [
                { src: "/mitsubishi/fx3s.webp", label: "FX3S Main Unit" },
                { src: "/mitsubishi/fx3s-1.webp", label: "FX3S Compact Body" },
            ],
            features: [
                "Compact and cost-effective PLC for small applications.",
                "Up to 30 I/O points with expansion capability.",
                "Integrated high-speed counters and timers.",
                "Built-in RS-422/RS-485 communication.",
                "Easy programming via GX Works2/3 software.",
            ],
            specs: {
                "Power Supply": "100–240V AC / 24V DC",
                "Inputs / Outputs": "14–30 (Expandable)",
                "Program Memory": "8K Steps (Flash)",
                "Output Type": "Relay / Transistor",
                "Communication": "RS-422 / RS-485",
                "Cycle Time": "0.21 µs per instruction",
                "Temperature Range": "0°C to +55°C",
                "Certifications": "CE, UL, KC",
            },
        },
        {
            name: "MITSUBISHI FX5S SERIES",
            subtitle: "Next-Generation Compact PLC with Ethernet",
            images: [
                { src: "/mitsubishi/fx5s-1.jpg", label: "FX5S Compact PLC" },
                { src: "/mitsubishi/fx5s-2.png", label: "FX5S Control Board" },
                { src: "/mitsubishi/fx5s.jpeg", label: "FX5S Installation" },
            ],
            features: [
                "Built-in Ethernet and USB ports.",
                "32K step memory for advanced applications.",
                "Supports up to 256 local I/O points.",
                "Fast scan cycle with improved CPU performance.",
                "Seamless integration with FX5 expansion modules.",
            ],
            specs: {
                "Power Supply": "100–240V AC",
                "Inputs / Outputs": "Up to 256 Points",
                "Program Memory": "32K Steps (Flash)",
                "Communication": "Ethernet / USB",
                "Output Type": "Relay / Transistor",
                "Cycle Time": "0.065 µs per instruction",
                "Operating Temp": "-20°C to +55°C",
                "Certifications": "CE, UL, UKCA",
            },
        },
        {
            name: "MITSUBISHI FX5U SERIES",
            subtitle: "High-Performance PLC with Motion & Network Control",
            images: [
                { src: "/mitsubishi/fx5u-1.webp", label: "FX5U Main CPU Unit" },
                { src: "/mitsubishi/fx5u-2.webp", label: "FX5U Expansion Module" },
                { src: "/mitsubishi/fx5u.webp", label: "FX5U with Ethernet Connection" },
            ],
            features: [
                "Built-in Ethernet, RS-485, and Analog I/O.",
                "Advanced motion and positioning control.",
                "Expandable up to 512 I/O points.",
                "High-speed 34 ns instruction processing.",
                "Ideal for CNC, robotics, and machine automation.",
            ],
            specs: {
                "Power Supply": "100–240V AC",
                "Inputs / Outputs": "16 DI / 16 DO (Expandable)",
                "Analog Inputs": "3 Channels Built-in",
                "Program Memory": "64K Steps (Flash)",
                "Cycle Time": "34 ns per instruction",
                "Communication": "Ethernet / RS-485 / USB",
                "I/O Capacity": "512 Points (Max)",
                "Certifications": "CE, UL, UKCA, Marine",
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

            {/* Page Title */}
            <motion.div
                className="relative flex flex-col items-center text-center mt-14 space-y-4 w-full max-w-8xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-full bg-gray-100 py-3">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        MITSUBISHI PLC
                    </h1>
                    <p className="text-blue-400 mt-2 font-semibold text-lg">
                        FX3S | FX5S | FX5U — Compact to High-Performance Automation
                    </p>
                </div>
            </motion.div>

            {/* PLC Section */}
            {plcData.map((plc, index) => {
                const [currentIndex, setCurrentIndex] = useState(0);
                const nextImage = () =>
                    setCurrentIndex((prev) => (prev + 1) % plc.images.length);
                const prevImage = () =>
                    setCurrentIndex(
                        (prev) => (prev - 1 + plc.images.length) % plc.images.length
                    );

                return (
                    <motion.div
                        key={index}
                        className="flex flex-col lg:flex-row items-center w-full max-w-7xl bg-white  rounded-2xl border border-gray-300 overflow-hidden p-6 space-y-6 lg:space-y-0 lg:space-x-10"
                        variants={fadeUp}
                    >
                        {/* Left: Image Carousel */}
                        <div className="relative w-full lg:w-1/2">
                            <div className="relative h-64 sm:h-80 md:h-[26rem] rounded-2xl overflow-hidden shadow-md">
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
                                            src={plc.images[currentIndex].src}
                                            alt={plc.images[currentIndex].label}
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Left / Right buttons */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Thumbnails */}
                            <div className="flex gap-3 justify-center mt-3">
                                {plc.images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-16 h-12 relative border rounded-md overflow-hidden cursor-pointer transition-transform ${
                                            idx === currentIndex
                                                ? "ring-2 ring-blue-400 scale-105"
                                                : "hover:scale-105"
                                        }`}
                                        onClick={() => setCurrentIndex(idx)}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.label}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="w-full lg:w-1/2 space-y-4">
                            <h2 className="text-2xl font-semibold text-blue-400">
                                {plc.name}
                            </h2>
                            <p className="text-gray-700 font-medium">{plc.subtitle}</p>

                            <ul className="list-disc list-inside text-gray-800 space-y-1">
                                {plc.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>

                            <Card className="mt-4 shadow-sm border">
                                <CardContent className="text-sm text-gray-700 p-4 space-y-1">
                                    {Object.entries(plc.specs).map(([key, value], idx) => (
                                        <div
                                            key={idx}
                                            className="flex justify-between border-b last:border-none py-1"
                                        >
                                            <span className="font-medium">{key}</span>
                                            <span>{value}</span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
