"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/app/components/header";
import Footer from "@/app/components/footer";
import ScrollProgressCircle from "@/app/components/scrolling";

export default function GalleryPage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    // 🖼️ Gallery Images
    const images = [
        "/panel/1.jpg",
        "/panel/2.jpg",
        "/panel/3.jpg",
        "/panel/4.jpg",
        "/panel/5.jpg",
        "/panel/6.jpg",
        "/panel/7.jpg",
        "/panel/8.jpg",
        "/panel/9.jpg",
        "/panel/10.jpg",
        "/panel/11.jpg",
    ];

    return (
        <div >
            <Header />

            {/* ✅ Centered Container */}
            <div className=" min-h-screen mt-15 w-full relative overflow-x-hidden">
                {/* Title Section */}
                <motion.div
                    className="relative mt-10  flex flex-col items-center text-center space-y-4 px-6 sm:px-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="w-full bg-gray-100">
                        <h1 className="py-5 text-2xl sm:text-5xl md:text-4xl font-bold bg-gray-700 bg-clip-text text-transparent ">
                           Motion Automation Gallery
                        </h1>
                    </div>
                    <p className="text-blue-500 font-medium text-base sm:text-lg md:text-xl">
                        Explore Our Projects, Installations & Infrastructure
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 "
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
                        >
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                width={400}
                                height={300}
                                className="object-cover w-full h-64 sm:h-72 md:h-80 transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
    <ScrollProgressCircle />
    <Footer />
    </div>
    );
}
