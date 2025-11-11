"use client";

import React, { useState } from "react";
import { Header } from "../../header";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollProgressCircle from "../../scrolling";

export default function PLC() {
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
            model: "VC1 Series PLC",
            description:
                "Compact yet capable — designed for small to medium automation projects with flexible communication and expansion options.",
            specs: [
                "Supports up to 16K steps user program.",
                "3 channels of 100KHz pulse output.",
                "2-channel 50KHz and 6-channel 10KHz high-speed counting.",
                "1 × RS232, 1 × RS485 communication ports.",
                "Expandable 1 × RS485 via left module; supports Ethernet.",
                "USB communication for quick debugging.",
                "Abundant expansion modules available.",
                "Easy firmware upgrades for long-term support.",
            ],
            images: [
                "/veichi/vc1.jpg",
                "/veichi/vc1-1.jpg",
                "/veichi/vc1-3.jpg",
            ],
        },
        {
            model: "VC3 Series PLC",
            description:
                "Advanced mid-range PLC for precise motion control, high-speed pulse I/O, and strong industrial communication support.",
            specs: [
                "8-channel 200KHz high-speed pulse input and output.",
                "Supports S-curve acceleration and deceleration.",
                "Independent serial communication ports: COM0, COM1, USB.",
                "Left expansion COM2 supported.",
                "Built-in Ethernet (Modbus-TCP) and CAN (CANopen 301/402).",
                "Program space: 64K steps; data storage: 48K words.",
            ],
            images: [
                "/veichi/vc3-all.jpg",
                "/veichi/vc3-1.jpg",
                "/veichi/vc3-3.jpg",
            ],
        },
        {
            model: "VC5 Series PLC",
            description:
                "High-performance bus-based PLC with dual-core architecture, powerful motion control, and precise synchronization — ideal for complex automation lines.",
            specs: [
                "Supports 32 real axes and 32–64 virtual axes.",
                "User program space supports 200K steps.",
                "8 × 200KHz high-speed input and 8 × 200KHz output.",
                "Interfaces: RS485, CAN, Ethernet, EtherCAT.",
                "Fastest communication cycle: 250μs, sync accuracy ±80ns.",
                "EtherCAT motion control of up to 32 real axes.",
                "Dual-core processing for superior performance.",
            ],
            images: [
                "/veichi/vc-5.jpg",
                "/veichi/vc5-1.jpg",
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

            {/* --- Title Section --- */}
            <motion.div
                className="relative flex flex-col items-center text-center mt-14 space-y-4 w-full max-w-8xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <div className="w-full mt-4 bg-gray-100 ">
                    <h1 className="text-2xl sm:text-3xl p-3 md:text-4xl font-bold">
                                    PLC 

          </h1>
        </div>
                <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                    Explore <b className="text-blue-500">VEICHI’s</b> advanced PLC lineup —
                    engineered for scalable, intelligent, and high-performance automation
                    control across industries.
                </p>
            </motion.div>

            {/* --- Alternating Image + Content Sections --- */}
            <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
                {plcData.map((plc, index) => (
                    <PLCSection key={index} plc={plc} index={index} fadeUp={fadeUp} />
                ))}
            </div>

            <ScrollProgressCircle />
        </motion.div>
    );
}

// 🔹 Separate Component for Each PLC Section (with HMI-style carousel)
function PLCSection({ plc, index, fadeUp }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % plc.images.length);
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + plc.images.length) % plc.images.length);

    return (
        <motion.div
            className={`grid grid-cols-1 md:grid-cols-2 border-2 p-6 items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
        >
            {/* --- Image Section --- */}
            <div
                className={`flex flex-col justify-center items-center ${
                    index % 2 === 1 ? "md:order-2" : "md:order-1"
                }`}
            >
                {/* Image Carousel (HMI-style) */}
                <div className="relative w-full max-w-lg h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-lg">
                    {/* Prev Button */}
                    <button
                        onClick={prevImage}
                        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md"
                    >
                        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextImage}
                        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md"
                    >
                        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>

                    {/* Animated Image */}
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
                                src={plc.images[currentIndex]}
                                alt={plc.model}
                                fill
                                className="object-contain rounded-2xl"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-3 sm:gap-4 mt-4 flex-wrap justify-center">
                    {plc.images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            className={`flex flex-col items-center cursor-pointer transition-transform ${
                                idx === currentIndex ? "scale-110" : "scale-100"
                            }`}
                            onClick={() => setCurrentIndex(idx)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="w-16 h-12 sm:w-20 sm:h-14 relative border rounded-md overflow-hidden shadow-sm">
                                <Image
                                    src={img}
                                    alt={`${plc.model} ${idx}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- Text Section --- */}
            <div
                className={`space-y-4 ${
                    index % 2 === 1 ? "md:order-1 text-left" : "text-left"
                }`}
            >
                <h3 className="text-3xl font-bold text-blue-500">{plc.model}</h3>
                <p className="text-gray-700 text-lg">{plc.description}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {plc.specs.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
