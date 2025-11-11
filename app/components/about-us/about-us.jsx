"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Header } from "../header";
import ScrollProgressCircle from "../scrolling";
import Footer from "../footer";
import RatingsReviews from "@/app/components/about-us/review";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
};

const stats = [
    { value: 1037, label: "Project Completed" },
    { value: 156, label: "Qualified Team" },
    { value: 90, label: "Client Satisfaction", suffix: "%" },
    { value: 9, label: "Year of Experience", suffix: "+" },
];



export default function AboutUsPage() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const [loading] = useState(false);

    return (
        <div className="min-h-screen w-full bg-white relative overflow-x-hidden">
            <Header />
            <div className="min-h-screen mt-15 w-full bg-white relative overflow-x-hidden">
                {/* ---------- TITLE SECTION (FULL WIDTH) ---------- */}
                <motion.div
                    className="relative mt-10 flex flex-col items-center text-center space-y-4 px-6 sm:px-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="w-full bg-gray-100">
                        <h1 className="py-5 text-2xl sm:text-5xl md:text-4xl font-bold bg-gray-700 bg-clip-text text-transparent ">
                            About Us
                        </h1>
                    </div>
                    <span className="text-xl sm:text-2xl md:text-3xl text-gray-500 font-semibold tracking-wide relative inline-block max-w-5xl">
            THE COMPREHENSIVE AUTOMATION SOLUTIONS PARTNER
          </span>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mt-4 px-2 sm:px-0">
                        At <b className="text-blue-400">MOTION AUTOMATION</b>, we have been
                        designing, developing, and supplying a wide range of industrial
                        automation products and solutions since 2016 in Rajkot, Gujarat,
                        India. We specialize in PLCs, HMIs, VFDs, AC Servo Motors, CNC
                        Controllers, CNC Autoloader Systems, and Electrical Control Panels.
                    </p>
                </motion.div>

                {/* ---------- ALL CONTENT WRAPPED IN max-w-7xl ---------- */}
                <div className="px-4 sm:px-6 md:px-12 py-1 w-full mx-auto max-w-7xl">

                    {/* Team & Intro Section */}
                    <motion.div
                        className="mt-16 bg-gray-100 p-3 py-12 px-10 flex flex-col md:flex-row items-center text-center md:text-left gap-8 mb-16 w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <Image
                            src="/mainimage.jpg"
                            alt="Team"
                            width={600}
                            height={400}
                            className="shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out w-full md:w-1/2 object-cover mx-auto mb-6 md:mb-0"
                            priority
                        />
                        <div className="w-full md:w-1/2 space-y-4 px-2 md:px-0">
                            <h6 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400">
                                WE PROUDLY LEAD THE WORLD'S FUTURE
                            </h6>
                            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                                Motion Automation was founded in 2016 with a vision to support
                                the rapid industrialization of our nation and bring meaningful
                                innovation to the industrial world.
                                <br />
                                We provide total automation solutions for nearly every industry,
                                supported by expert professionals and engineers who are
                                continuously updated with the latest technology.
                                <br />
                                Our experienced engineers and technicians are committed to
                                solving customer needs and developing tailor-made automation
                                solutions.
                            </p>
                        </div>
                    </motion.div>

                    {/* Core Values Section */}
                    <motion.div
                        className="flex flex-col bg-gray-100  px-10 p-3 py-12 md:flex-row-reverse items-center gap-8 mb-16 text-center md:text-left w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <Image
                            src="/core values.jpg"
                            alt="Core Values"
                            width={600}
                            height={400}
                            className="shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out w-full md:w-1/2 object-cover mx-auto mb-6 md:mb-0"
                            priority
                        />
                        <div className="w-full md:w-1/2 space-y-4 px-2 md:px-0">
                            <h6 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400">
                                CORE VALUES
                            </h6>
                            <p className="text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
                                <span className="font-semibold">1. Innovation & Excellence<br /></span>
                                We continuously innovate to develop cutting-edge automation
                                solutions that enhance productivity and precision.<br />
                                <span className="font-semibold">2. Reliability & Integrity<br /></span>
                                We build long-term relationships with trust, transparency, and
                                quality in every product and service.<br />
                                <span className="font-semibold">3. Collaboration & Customer Focus<br /></span>
                                We work closely with clients to deliver tailor-made, sustainable
                                solutions that drive industrial growth.
                            </p>
                        </div>
                    </motion.div>

                    {/* Core Value Cards */}
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <div className="py-4">
                            <h1 className="text-xl sm:text-3xl font-bold text-gray-400">
                                OUR CORE VALUES
                            </h1>
                        </div>
                        <div className="rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 border-1 border-blue-400">
                            {[
                                {
                                    title: "Gratitude",
                                    desc: "We uphold the highest standards of integrity in all actions.",
                                },
                                {
                                    title: "Growth",
                                    desc: "We continually seek to improve and innovate.",
                                },
                                {
                                    title: "Converge",
                                    desc: "We strive for excellence in every business process.",
                                },
                                {
                                    title: "Contribute",
                                    desc: "We collaborate to meet customer needs and achieve success together.",
                                },
                            ].map((value, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/5 backdrop-blur-md rounded-lg p-6 border shadow-lg hover:shadow-lg hover:scale-105 transition duration-300 cursor-default"
                                >
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-400">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm sm:text-base">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Mission & Vision */}
                    {/* Mission & Vision (Compact Centered 5xl Layout) */}
                    <motion.div
                        className="mx-auto mt-12 space-y-8 text-center md:text-left w-full max-w-4xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <div className="py-6 flex justify-center text-center">
                            <h1 className="text-xl sm:text-3xl font-bold bg-gray-400 bg-clip-text text-transparent">
                                OUR MISSION & OUR VISION
                            </h1>
                        </div>

                        {/* Unified Mission & Vision Container */}
                        <div className="space-y-8">
                            {/* Mission Card */}
                            <div className="rounded-lg border border-blue-400 shadow-md p-4 sm:p-6 flex flex-col md:flex-row items-center gap-6 bg-white">
                                <Image
                                    src="/mission.jpg"
                                    alt="Mission"
                                    width={500}
                                    height={350}
                                    className="rounded-lg shadow-md w-full md:w-1/2 object-cover mx-auto"
                                    priority
                                />
                                <div className="w-full md:w-1/2 space-y-2 px-2 md:px-0">
                                    <h6 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400">
                                        Our Mission
                                    </h6>
                                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                                        To be a leader in industrial automation by delivering professional and
                                        customized solutions that exceed expectations, driven by innovation and
                                        continuous improvement.
                                    </p>
                                </div>
                            </div>

                            {/* Vision Card */}
                            <div className="rounded-lg border border-blue-400 shadow-md p-4 sm:p-6 flex flex-col md:flex-row-reverse items-center gap-6 bg-white">
                                <Image
                                    src="/vision.jpg"
                                    alt="Vision"
                                    width={500}
                                    height={350}
                                    className="rounded-lg shadow-md w-full md:w-1/2 object-cover mx-auto"
                                    priority
                                />
                                <div className="w-full md:w-1/2 space-y-2 px-2 md:px-0">
                                    <h6 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400">
                                        Our Vision
                                    </h6>
                                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                                        To become one of the most trusted global providers of automation,
                                        engineering, and manufacturing solutions, creating value through
                                        technology, innovation, and excellence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* Final Section */}
                    <motion.section
                        className="py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <div>
                            <p className="text-xs sm:text-sm font-semibold uppercase mb-2 text-blue-400">
                                Quality Work
                            </p>
                            <div className="text-3xl sm:text-4xl font-bold bg-gray-400 bg-clip-text text-transparent">
                                We Develop Top <br /> Production Solutions
                            </div>
                            <p className="mt-4 sm:mt-2 leading-relaxed text-sm sm:text-base">
                                “Motion Automation” has been engaged in designing, developing,
                                and supplying industrial automation products since 2016 in
                                Rajkot, Gujarat. We deal in PLCs, HMIs, VFDs, AC Servo Motors,
                                CNC Controllers, CNC Autoloader Systems, and Electrical Control
                                Panels.
                            </p>
                        </div>

                        <div className="relative w-full h-[300px] sm:h-[450px] flex justify-center items-center">
                            <div className="opacity-50 relative w-[250px] sm:w-[550px] h-[250px] sm:h-[450px] mx-auto">
                                <Image
                                    src="/automation.jpg"
                                    alt="Automation"
                                    fill
                                    className="object-cover rounded-lg"
                                    priority
                                />
                            </div>
                            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[260px] sm:w-[220px] h-[300px] shadow-lg rounded-lg overflow-hidden">
                                <Image
                                    src="/female.jpg"
                                    alt="Worker"
                                    fill
                                    className="object-cover rounded-lg"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.section>
                </div>

                {/* Stats Section (also centered in max-w-7xl) */}
                <section
                    ref={ref}
                    className="py-6 px-4 sm:px-8 flex flex-col items-center w-full mx-auto max-w-7xl"
                >
                    <div className="w-full rounded-lg gap-6 p-10 border border-blue-400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                >
                                    <h2 className="text-4xl sm:text-5xl font-bold text-blue-400">
                                        {inView && (
                                            <CountUp
                                                start={0}
                                                end={stat.value}
                                                duration={2}
                                                suffix={stat.suffix || ""}
                                            />
                                        )}
                                    </h2>
                                    <p className="mt-2 text-lg sm:text-xl">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <motion.section
                    className=" flex justify-center items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <div className="w-full mt-10 max-w-7xl">
                        <RatingsReviews />
                    </div>
                </motion.section>
                <ScrollProgressCircle />
            </div>

            <Footer />
        </div>
    );
}
