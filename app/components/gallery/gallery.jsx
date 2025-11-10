"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function GalleryPage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    // 🖼️ Add all your images here
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
        <div>
        <motion.div
            className="min-h-screen bg-white flex flex-col items-center px-4 sm:px-8 lg:px-12 py-10 space-y-10"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
        >
            <Header />

            {/* Title */}
            <motion.div
                className="text-center mt-14 space-y-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                    MOTION AUTOMATION GALLERY
                </h1>
                <p className="text-blue-500 font-medium text-lg sm:text-xl">
                    Explore Our Projects, Installations & Infrastructure
                </p>
            </motion.div>

            {/* Gallery Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl"
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

        </motion.div>
    <Footer />
        </div>

);
}
