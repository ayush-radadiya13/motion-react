"use client";

import Link from "next/link";
import { Header } from "@/app/components/header";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactPage } from "@/app/components/address";
import Footer from "@/app/components/footer";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function MenuPage() {
    const [view, setView] = useState("menu");
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (label) => {
        setOpenCategory(openCategory === label ? null : label);
    };

    // --- MAIN MENU ---
    const menuItems = [
        { href: "/home", label: "Home" },
        { href: "/about-us", label: "About Us" },
        { href: "#", label: "Products", onClick: () => setView("products") },
        { href: "/gallery", label: "Gallery" },
        { href: "/contact-us", label: "Contact Us" },
    ];

    // --- PRODUCTS MENU ---
    const productsList = [
        {
            label: "MITSUBISHI",
            subItems: [
                { href: "/mitsubishi/plc", label: "PLC" },
                { href: "/mitsubishi/hmi", label: "HMI" },
                { href: "/mitsubishi/vfd", label: "VFD" },
                { href: "/mitsubishi/acservo", label: "AC Servo Motor" },
            ],
        },
        {
            label: "VEICHI",
            subItems: [
                { href: "/veichi/plc", label: "PLC" },
                { href: "/veichi/hmi", label: "HMI" },
                { href: "/veichi/vfd", label: "VFD" },
                { href: "/veichi/servomotor", label: "Servo Motor" },
            ],
        },
        {
            label: "CNC CONTROLLER",
            subItems: [
                { href: "/controller/fingercnc", label: "Finger CNC" },
                { href: "/controller/deltacnc", label: "Delta CNC" },
            ],
        },
        { href: "/cncautoloader", label: "CNC AUTOLOADER" },
        { href: "/robotics", label: "ROBOTICS" },
        { href: "/spmmachine", label: "SPM MACHINE" },
    ];

    return (
        <div className="min-h-screen">
            <Header />

            <div className="py-20 flex flex-col">
                <div className="relative flex-grow flex bg-cover bg-center px-6 sm:px-10 md:px-16 lg:px-20">
                    {/* Background Text */}
                    <div className="absolute inset-0 flex items-center justify-center md:justify-start pointer-events-none z-50 select-none">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={view}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 0.05, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                                className="text-[40px] sm:text-[80px] md:text-[140px] lg:text-[180px] font-bold text-center md:text-left leading-tight"
                                style={{ fontFamily: "Century Gothic, sans-serif" }}
                            >
                                {view === "menu"
                                    ? "MENU"
                                    : view === "products"
                                        ? "PRODUCTS"
                                        : "SERVICES"}
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    {/* Main Content */}
                    <main className="relative z-10 flex flex-col md:flex-row flex-grow pt-6 md:pt-12 gap-10 md:gap-16 max-w-7xl mx-auto w-full">
                        {/* LEFT SIDE */}
                        <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
                            <AnimatePresence mode="wait" initial={false}>
                                {view === "menu" ? (
                                    <motion.div
                                        key="menu-links"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 30 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex flex-col gap-4 sm:gap-6"
                                    >
                                        {menuItems.map(({ href, label, onClick }) => (
                                            <Link
                                                key={label}
                                                href={href}
                                                onClick={onClick || undefined}
                                                className="px-4 py-2 text-lg sm:text-xl md:text-2xl font-semibold transition-transform duration-300 ease-in-out hover:text-orange-400 hover:scale-110"
                                                style={{ fontFamily: "Century Gothic, sans-serif" }}
                                            >
                                                {label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                ) : view === "products" ? (
                                    <motion.div
                                        key="product-list"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 30 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex flex-col gap-4 sm:gap-6"
                                    >
                                        {/* Back Button */}
                                        <button
                                            onClick={() => setView("menu")}
                                            className="mb-4 px-4 py-2 text-xl font-medium text-center md:text-left hover:text-red-500 transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-1"
                                            style={{ fontFamily: "Century Gothic, sans-serif" }}
                                        >
                                            <b>← Back to Menu</b>
                                        </button>

                                        {/* Product Categories */}
                                        {productsList.map((category) => (
                                            <div key={category.label} className="mb-3">
                                                {category.subItems ? (
                                                    <>
                                                        {/* Centered category name */}
                                                        <button
                                                            onClick={() => toggleCategory(category.label)}
                                                            className="w-full flex items-center justify-center gap-2 text-xl sm:text-2xl font-semibold text-blue-400 uppercase hover:text-blue-600 transition duration-300"
                                                        >
                                                            <span>{category.label}</span>
                                                            {openCategory === category.label ? (
                                                                <ChevronUp size={20} />
                                                            ) : (
                                                                <ChevronDown size={20} />
                                                            )}
                                                        </button>

                                                        {/* Submenu animation */}
                                                        <AnimatePresence>
                                                            {openCategory === category.label && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, height: 0 }}
                                                                    animate={{ opacity: 1, height: "auto" }}
                                                                    exit={{ opacity: 0, height: 0 }}
                                                                    transition={{ duration: 0.3 }}
                                                                    className="flex flex-col gap-2 mt-2 text-center"
                                                                >
                                                                    {category.subItems.map(({ href, label }) => (
                                                                        <Link
                                                                            key={label}
                                                                            href={href}
                                                                            className="px-2 py-1 text-base sm:text-lg font-medium transition-transform duration-300 ease-in-out hover:text-pink-400 hover:scale-105"
                                                                        >
                                                                            {label}
                                                                        </Link>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={category.href}
                                                        className="block text-center px-4 py-2 text-lg sm:text-xl md:text-2xl font-semibold transition-transform duration-300 ease-in-out hover:text-pink-400 hover:scale-110"
                                                    >
                                                        {category.label}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                        </div>

                        {/* RIGHT SIDE */}
                        <div
                            className="w-full md:w-1/2 p-4 sm:p-1 text-sm sm:text-base md:text-lg text-center md:text-left"
                            style={{ fontFamily: "Verdana, sans-serif" }}
                        >
                            <ContactPage />
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
}
