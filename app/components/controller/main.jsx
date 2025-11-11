"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/app/components/header";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import ScrollProgressCircle from "@/app/components/scrolling";
import Footer from "@/app/components/footer";

export default function CNCController() {
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
            title: "Adtech CNC Controller",
            description:
                "Advanced CNC control systems designed for precision machining and multi-axis motion control. Delta CNC controllers provide high-speed processing, excellent stability, and seamless servo communication for milling, drilling, and turning applications.",
            image: "/delta/cnc-all.jpg",
            link: "/controller/deltacnc",
        },
        {
            title: "Finger Type CNC Controller",
            description:
                "Compact and efficient CNC control unit optimized for small-scale machining centers and turning machines. The Finger Controller ensures user-friendly programming, smooth operation, and reliable performance for a variety of metalworking and component manufacturing processes.",
            image: "/delta/finger controller.jpg",
            link: "/controller/fingercnc",
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
                className="relative flex flex-col items-center text-center mt-14 space-y-4 w-full max-w-8xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-full bg-gray-100 py-3 ">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                    CNC CONTROLLER SERIES
                </h1>
                <p className="text-blue-500 font-medium text-lg sm:text-xl">
                    High-Precision CNC Automation Solutions for Modern Manufacturing
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
                        className={`flex flex-col lg:flex-row items-center justify-between gap-10 ${
                            index % 2 === 1 ? "lg:flex-row-reverse" : ""
                        }`}
                    >
                        {/* Image */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="w-full max-w-[600px] h-auto  overflow-hidden shadow-md">
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto "
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
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
