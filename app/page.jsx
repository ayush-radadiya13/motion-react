"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./components/ui/button"
import { motion } from "framer-motion"
import { Card } from "./components/ui/card"
import ScrollProgressCircle from "./components/scrolling"
import Footer from "./components/footer"
import { Header } from "./components/header"
import { CarouselPlugin } from "./components/auto-product-scrolling"
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const companies = [
    { name: "MITSUBISHI", logo: "/logo/Mitsubishi.jpg" },
    { name: "VIECHI", logo: "/logo/viechi.png" },
    { name: "PEPPERL + FUCHS", logo: "/logo/P+F.png" },
    { name: "FINGER CNC", logo: "/logo/fingercnc.png" },
    { name: "ADTECH CNC", logo: "/logo/adtechlogo1.png" },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <Header />
      {/* Hero Section */}
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url('/finalimage.jpg')` }}
        >
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-6">
                <div className="max-w-4xl w-full space-y-8 animate-fade-in">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-blue-600 py-1 rounded"
                        style={{ fontFamily: "Century Gothic, sans-serif" }}
                    >
                        Welcome to
                        <br /> MOTION AUTOMATION
                    </h2>

                    <p
                        className="px-3 sm:px-6 md:px-8 text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold leading-relaxed text-black"
                        style={{ fontFamily: "Century Gothic, sans-serif" }}
                    >
                        "Smart automation solutions tailored for complex industrial motion control challenges."
                    </p>

                    <Button
                        asChild
                        variant="outline"
                        className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full border-2 border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-colors duration-300"
                    >
                        <Link href="/about-us">About Us</Link>
                    </Button>
                </div>
            </main>
        </div>


        {/* Achievements Section */}
      <div className="py-10 flex justify-center text-center px-4 sm:px-0">
        {/* Title can be added here */}
      </div>

      {/* Company Intro Section */}
      <motion.div
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch text-center md:text-left gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Left side - Text */}
        <div className="w-full md:w-1/2 space-y-4 flex flex-col justify-center">
          <h6 className="text-3xl sm:text-4xl font-semibold text-gray-400">
            Motion Automation
          </h6>
          <p className="text-base sm:text-lg leading-relaxed">
            Motion Automation was established in 2016 as a partnership firm with a clear vision to provide innovative and reliable automation solutions to industries. Over the years, the company has built a reputation for delivering quality products and services tailored to client needs.
            <br /><br />
            The company specializes in industrial automation solutions, focusing on the manufacturing of electrical control panels and panel fabrication. With in-house expertise and advanced facilities, Motion Automation ensures that every product meets the highest standards of performance and safety.
            <br /><br />
            In addition to its core manufacturing services, Motion Automation also works in advanced areas such as CNC Autoloaders and SPM (Special Purpose Machine) manufacturing. These solutions are designed to improve productivity, efficiency, and precision across different industrial applications.
            <br /><br />
            With a dedicated team of 15 employees, Motion Automation combines technical knowledge, industry experience, and innovation to serve its clients effectively. The company achieved an annual turnover of approximately ₹5 Crore in 2023–2024, reflecting consistent growth and trust from its customers.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/panel/9.jpg"
            alt="Team"
            width={600}
            height={600}
            className="shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* What we offer Section */}
      <motion.div
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
              <div className="flex flex-col items-center text-center mb-6">
                  {/* Mitsubishi Logo */}
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-24 mb-4 flex items-center justify-center">
                      <Image
                          src="/logo/Mitsubishi.jpg"
                          alt="Mitsubishi Electric Logo"
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 176px"
                              priority
                      />
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
                      <span className="font-semibold text-2xl text-blue-400">MOTION AUTOMATION</span> is a proud{" "}
                      <span className="font-semibold text-2xl text-blue-400">
      Mitsubishi Electric Factory Automation Channel Partner
    </span>, delivering advanced automation solutions to drive industrial
                      innovation and efficiency.
                  </p>
              </div>


              <div className="text-base leading-relaxed">
                  <p className="mb-4">
                      With Mitsubishi’s world-class technology and our in-depth engineering
                      expertise, we provide customized solutions that include{" "}
                      <strong>PLCs, HMIs, AC Drives, Servo Systems, CNC Controllers</strong>,
                      and complete motion control integration for every type of industry.
                  </p>
                  <p className="mb-4">
                      Our technical excellence and domain knowledge enable us to deliver
                      reliable, efficient, and future-ready automation systems that enhance
                      production, reduce downtime, and improve quality.
                  </p>
              </div>
          </section>
      </motion.div>

      {/* Products Section */}
      <div className="  flex justify-center mt-14 text-center px-4 sm:px-0">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-400">
          PRODUCTS
        </h1>
      </div>

      <motion.div
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <CarouselPlugin />
      </motion.div>

      {/* Core Values Section */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <motion.div
                className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 mb-16 text-center md:text-left w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                {/* Image Section */}
                <div className="flex justify-center w-full md:w-1/2">
                    <Image
                        src="/core values.jpg"
                        alt="Core Values"
                        width={600}
                        height={400}
                        className="shadow-lg rounded-lg object-contain"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                    <p className="text-base sm:text-md leading-relaxed font-semibold">
                        PROFESSIONAL APPROACH
                    </p>
                    <h6 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-blue-400">
                        World Class Quality Is Our Priority
                    </h6>
                    <p className="text-base sm:text-xl leading-relaxed font-semibold">
                        Motion Automation is a team of experienced employee contractor and expert engineer.
                    </p>
                    <p>
                        We work under the enthusiastic guidance of our senior team members. Our team has vast
                        experience and technical expertise in this domain of automation and engineering.
                    </p>
                </div>
            </motion.div>
        </section>


        <section>
            {/* Title Section */}
            <motion.div
                className="max-w-5xl mx-auto text-center mt-20 px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center mt-6">
                    <span className="text-gray-400">Innovative</span>
                    <span> Industrial Solutions</span>
                </h2>

                <p className="max-w-5xl mx-auto pt-4 mb-10 text-base md:text-lg leading-relaxed">
                    At <span className="font-semibold ">Motion Automation</span>,
                    we specialize in delivering cutting-edge automation and control solutions
                    for modern industries. Our wide range of products—from advanced PLC systems
                    to high-performance AC drives and servo motors—empower manufacturers to achieve
                    greater precision, speed, and reliability in every process.
                </p>
            </motion.div>

            {/* Logos Section */}
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 px-4 sm:px-6 md:px-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                {companies.map((company, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center "
                        variants={fadeUp}
                    >
                        <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-24 mb-4 flex items-center justify-center">
                            <Image
                                src={company.logo}
                                alt={company.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 176px"
                                priority
                            />
                        </div>
                        {/*<p className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base text-center leading-snug">*/}
                        {/*    {company.name}*/}
                        {/*</p>*/}
                    </motion.div>
                ))}
            </motion.div>

        </section>

      {/* Info Card Section */}
      <motion.div
        className="max-w-screen-xl mx-auto px-4 sm:px-6 mt-5 lg:px-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Card className="w-full rounded-lg gap-20 px-6 sm:px-14 border-2 border-gray-400">
          <section className="flex flex-col sm:flex-row items-center justify-between py-10 px-2 sm:px-6">
            <div className="max-w-xl text-center sm:text-left mb-8 sm:mb-0">
              <p className="text-sm font-semibold text-blue-400  italic mb-2">
                Don't be weird.
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold ">
                Would you like more information or do you have a question?
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="px-8 py-6 rounded-full border-2 border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </section>
        </Card>
      </motion.div>

      <ScrollProgressCircle />
      <Footer />
    </div>
  )
}
