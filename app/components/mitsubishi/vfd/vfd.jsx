"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Header } from "@/app/components/header";

export default function MitsubishiInverterPage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const inverterData = [
        {
            name: "MITSUBISHI FR-D700 SERIES",
            subtitle:
                "Next-Generation Compact Frequency Inverter for High Performance and Long-Term Reliability",
            images: [
                { src: "/mitsubishi/frd700-1.jpg", label: "FR-D700 Inverter Unit" },
                { src: "/mitsubishi/frd700.jpg", label: "FR-D700 Installation Example" },
            ],
            description: `
The Mitsubishi Electric FR-D700 Series represents the next generation of compact inverters designed for unmatched reliability, precision, and performance. Built to meet the needs of modern automation, this series offers a compact, lightweight design while incorporating Mitsubishi’s advanced motor control technologies.
      `,
            features: [
                "Compact inverter for simple, cost-effective motor speed control.",
                "150% starting torque at 1 Hz for powerful motor startup.",
                "Built-in Safe Torque Off (STO) for operator protection.",
                "Optimal Excitation Control for reduced power consumption.",
                "Long-life components — up to 10 years of continuous service.",
                "Easy installation with spring clamp terminals and bookshelf mounting.",
                "Built-in PID control for process automation.",
                "Sensorless vector control ensures smooth and stable operation.",
                "Integrated RS-485 communication supporting Modbus-RTU and Mitsubishi protocols.",
                "Conformal coated boards for superior dust and humidity protection.",
            ],
            specs: {
                "Input Voltage": "1-Phase 230V AC / 3-Phase 400V AC",
                "Power Range": "0.1kW to 7.5kW",
                "Control Method": "V/F Control, Sensorless Vector Control",
                "Starting Torque": "150% at 1Hz",
                "Safety Function": "Safe Torque Off (EN 61800-5-2 Compliant)",
                "Energy Efficiency": "Optimal Excitation Control (OEC)",
                "Communication": "RS-485 (Modbus-RTU / Mitsubishi Protocol)",
                "Protection": "Overcurrent, Overvoltage, Overload, Stall Prevention",
                "Cooling System": "Sealed Long-Life Cooling Fan",
                "Environment": "-10°C to +50°C, 90% RH (Non-Condensing)",
                "Certifications": "CE, UL, cUL, RoHS",
            },
        },
        {
            name: "MITSUBISHI FR-D800 SERIES",
            subtitle:
                "Premium Compact Inverter with Advanced Safety, Connectivity, and Energy Optimization",
            images: [
                { src: "/mitsubishi/frd800-all.png", label: "FR-D800 Main Unit" },
                { src: "/mitsubishi/frd800-1.jpg", label: "FR-D800 Operator Panel" },
                { src: "/mitsubishi/frd800.png", label: "FR-D800 Control Setup" },
            ],
            description: `
The Mitsubishi Electric FR-D800 Series is the evolution of the popular FR-D700, bringing advanced control, enhanced safety, and expanded connectivity in a compact package. Engineered for intelligent motor management, the FR-D800 is suitable for a wide range of applications — from HVAC and pumping systems to conveyors, elevators, and industrial production equipment.
      `,
            features: [
                "Successor to the FR-D700 with improved motor control and safety.",
                "Dual-channel Safe Torque Off (STO) meeting Cat.3 PLe safety standards.",
                "Enhanced EMC filter and harmonic suppression built in.",
                "Advanced energy-saving algorithms delivering up to 20% improved efficiency.",
                "Dual rating: Normal and Heavy-duty operation for flexible applications.",
                "Multiple communication interfaces: RS-485, USB, and Ethernet.",
                "Supports Modbus-RTU and Mitsubishi inverter protocols.",
                "Simple setup with FR Configurator2 software.",
                "Compact design for easy panel integration and space savings.",
                "Maintenance-friendly structure with replaceable cooling fan unit.",
            ],
            specs: {
                "Input Voltage": "3-Phase 400V AC / 1-Phase 230V AC",
                "Power Range": "0.1kW to 15kW",
                "Control Method": "V/F Control, Advanced Sensorless Vector Control",
                "Efficiency": "Up to 20% Improved Energy Performance",
                "Safety Function": "Dual Channel STO (EN ISO 13849-1 Cat.3 PLe)",
                "Communication": "RS-485 / Ethernet / USB",
                "Display": "Multi-language LED Digital Display",
                "Cooling": "Long-life Removable Cooling Fan",
                "Installation": "Book-mount Compact Type with Integrated Filter",
                "Operating Temperature": "-10°C to +50°C",
                "Certifications": "CE, UL, cUL, EAC, RCM, RoHS",
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
                    <h1 className="text-2xl sm:text-3xl  md:text-4xl font-bold">
                        VFD
                    </h1>
                    <p className="text-blue-400 mt-2 font-semibold text-lg">
                        FR-D700 | FR-D800 — Compact, Smart & Energy-Efficient Drive Solutions
                    </p>
                </div>
            </motion.div>

            {/* Inverter Cards */}
            {inverterData.map((inv, index) => {
                const [currentIndex, setCurrentIndex] = useState(0);
                const nextImage = () =>
                    setCurrentIndex((prev) => (prev + 1) % inv.images.length);
                const prevImage = () =>
                    setCurrentIndex(
                        (prev) => (prev - 1 + inv.images.length) % inv.images.length
                    );

                return (
                    <motion.div
                        key={index}
                        className="flex flex-col lg:flex-row items-center w-full max-w-7xl bg-white rounded-2xl border border-gray-300 overflow-hidden p-6 space-y-6 lg:space-y-0 lg:space-x-10"
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
                                            src={inv.images[currentIndex].src}
                                            alt={inv.images[currentIndex].label}
                                            fill
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation Buttons */}
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
                                {inv.images.map((img, idx) => (
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

                        {/* Right: Detailed Content */}
                        <div className="w-full lg:w-1/2 space-y-4">
                            <h2 className="text-2xl font-semibold text-blue-400">
                                {inv.name}
                            </h2>
                            <p className="text-gray-700 font-medium">{inv.subtitle}</p>

                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {inv.description}
                            </p>

                            <h3 className="font-semibold text-lg text-gray-800">
                                Key Features
                            </h3>
                            <ul className="list-disc list-inside text-gray-800 space-y-1">
                                {inv.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>

                            <h3 className="font-semibold text-lg text-gray-800 mt-4">
                                Technical Specifications
                            </h3>
                            <Card className="shadow-sm border">
                                <CardContent className="text-sm text-gray-700 p-4 space-y-1">
                                    {Object.entries(inv.specs).map(([key, value], idx) => (
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
