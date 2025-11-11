"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/app/components/header";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import ScrollProgressCircle from "@/app/components/scrolling";
import Footer from "@/app/components/footer";

export default function ProductOverview() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const products = [
        {
            title: "HMI (Human Machine Interface)",
            description:
                "Touchscreen display units for easy control and monitoring of automation systems. Designed for durability, connectivity, and intuitive operation.",
            image: "/mitsubishi/hmi.png",
            link: "/mitsubishi/hmi",
        },
        {
            title: "VFD (Variable Frequency Drive)",
            description:
                "Efficient motor control drives for speed regulation, energy savings, and smooth machine operation in industrial automation.",
            image: "/mitsubishi/vfd-al.jpg",
            link: "/mitsubishi/vfd",
        },
        {
            title: "PLC (Programmable Logic Controller)",
            description:
                "Reliable control systems for industrial machines and processes, offering flexibility, performance, and robust communication options.",
            image: "/mitsubishi/fx5u-1.webp",
            link: "/mitsubishi/plc",
        },
        {
            title: "Servo Drive & Motor Systems",
            description:
                "High-performance servo amplifiers and motors designed for precise motion control, synchronization, and energy-efficient operation.",
            image: "/mitsubishi/frd800-all.png",
            link: "/mitsubishi/acservo",
        },
    ];

    return (
        <div>
        <motion.div
            className="min-h-screen bg-white flex flex-col items-center px-4 sm:px-8 lg:px-12 py-12 space-y-16"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
        >
            <Header />

            {/* Page Title */}
            <motion.div
                className="relative flex flex-col items-center text-center mt-14 space-y-6 w-full max-w-8xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-full bg-gray-100">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    MITSUBISHI PRODUCTS
                </h1>
                <p className="text-blue-500 font-medium text-lg sm:text-xl">
                    Industrial Automation Solutions for Smart Manufacturing
                </p>
                </div>
            </motion.div>

            {/* Product Sections */}
            <div className="w-full max-w-7xl space-y-20">
                {products.map((p, index) => (
                    <motion.div
                        key={index}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
                            index % 2 === 1 ? "md:flex-row-reverse" : ""
                        }`}
                    >
                        {/* Image */}
                        <div className="w-full md:w-1/2">
                            <Image
                                src={p.image}
                                alt={p.title}
                                width={600}
                                height={400}
                                className=" object-cover shadow-md"
                            />
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">
                                {p.title}
                            </h2>
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                {p.description}
                            </p>

                            <Button
                                asChild
                                variant="outline"
                                className="px-8 py-4 rounded-full border-2 border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
                            >
                                <Link href={p.link}>Explore</Link>
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>

        </motion.div>
            <ScrollProgressCircle />
            <Footer/>
        </div>
    );
}
