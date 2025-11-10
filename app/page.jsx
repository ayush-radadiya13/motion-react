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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export default function HomePage() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url('/finalimage.jpg')` }}
        >
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-6">
                <div className="max-w-4xl w-full space-y-8 animate-fade-in">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 py-1 rounded"
                        style={{ fontFamily: "Century Gothic, sans-serif" }}
                    >
                        Welcome to
                        <br /> MOTION AUTOMATION
                    </h2>

                    <p
                        className="px-3 sm:px-6 md:px-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-black"
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
          <h6 className="text-3xl sm:text-4xl font-semibold text-blue-600">
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
            src="/2.jpg"
            alt="Team"
            width={600}
            height={600}
            className="shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* What we offer Section */}
      <motion.div
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <div>
            <p className="text-sm uppercase mb-2 text-blue-900">What we offer</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-900 leading-tight">
              Automation Solutions <br /> For All Industries
            </h2>
          </div>
          <div className="text-base leading-relaxed">
            <p className="mb-4">
              Our Experienced Engineers and Technicians are committed to solving
              your needs. We develop the Automation Solution as per your
              requirement.
            </p>
            <p>
              By implementing motion automation solutions, industries can
              increase efficiency, reduce labor costs, and improve overall
              productivity.
            </p>
          </div>
        </section>
      </motion.div>

      {/* Products Section */}
      <div className="py-12 flex justify-center text-center px-4 sm:px-0">
        <h1 className="text-xl sm:text-3xl font-bold text-blue-400">
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
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 mb-16 text-center md:text-left w-full"
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
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out w-full md:w-1/2 object-cover"
          />
          <div className="w-full md:w-1/2 space-y-3">
            <p className="text-base sm:text-md leading-relaxed">
              <b>PROFESSIONAL APPROACH</b>
            </p>
            <h6 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-blue-400">
              World Class Quality Is Our Priority
            </h6>
            <p className="text-base sm:text-xl leading-relaxed">
              <b>
                Motion Automation is a team of experienced employee contractor
                and expert engineer.
              </b>
            </p>
            <p>
              We Work Under The Enthusiastic guidance of Our Team Member. Our
              Team Have vast Experience in This Domain of Work.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Info Card Section */}
      <motion.div
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Card className="w-full rounded-lg gap-20 px-6 sm:px-14 border-2 border-blue-400">
          <section className="flex flex-col sm:flex-row items-center justify-between py-10 px-2 sm:px-6">
            <div className="max-w-xl text-center sm:text-left mb-8 sm:mb-0">
              <p className="text-sm font-semibold italic mb-2">
                Don't be weird.
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-tight">
                Would you like more information or do you have a question?
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="px-8 py-6 rounded-full border-2 border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              <Link href="/contect-us">Contact Us</Link>
            </Button>
          </section>
        </Card>
      </motion.div>

      <ScrollProgressCircle />
      <Footer />
    </div>
  )
}
