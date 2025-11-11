"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Header } from "../header"
import { ContactPage } from "../address"
import { Card } from "../ui/card"
import Footer from "@/app/components/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    reason: "",
    message: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Construct WhatsApp message
    const message = `*New Contact Form Submission *\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.contactNumber}\nReason: ${formData.reason}\nRequirenment: ${formData.message}`

    const encodedMessage = encodeURIComponent(message)

    // WhatsApp number with country code (no +)
    const whatsappNumber = "919998212691"

    // Open WhatsApp in new tab
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")

    // Reset form
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      reason: "",
      message: ""
    })
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden ">
      <Header />

      {/* Hero Section */}
      <motion.div
        className="relative mt-25 flex flex-col items-center text-center space-y-4 px-6 sm:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="w-full bg-gray-100">
            <h1 className="text-2xl sm:text-3xl p-3 md:text-4xl font-bold">
            Contact Us
          </h1>
        </div>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-7xl mt-4 px-2 sm:px-0">
          We’d love to hear from you! Whether you have questions about our products, need technical support, 
          or want to discuss potential collaborations — our team at 
          <b className="text-blue-400"> MOTION AUTOMATION </b> 
          is here to help. Please reach out through the contact form below or get in touch using the provided details.
        </p>
      </motion.div>

      {/* Form + Contact Info */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6 md:p-6 gap-12 items-start justify-center min-h-[calc(100vh-64px)]">
        {/* Left: Contact Form */}
        <div className="relative w-full md:w-1/2  p-6 bg-white">
          {/* Floating glow elements */}
          <motion.div
            className="absolute -top-3 -left-10 w-36 h-36 rounded-full blur-xl pointer-events-none"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-2xl pointer-events-none"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <motion.form
            onSubmit={handleSubmit}
            className="relative z-10 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center md:text-left mb-6">
              Get in Touch
            </h2>

            {/* Name */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full  border-2 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full  border-2 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </motion.div>

            {/* Contact Number */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full  border-2 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your phone number"
                required
              />
            </motion.div>

            {/* Reason */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium mb-1">
                Reason for Contact
              </label>
              <input
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full  border-2 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your reason for contact"
                required
              />
            </motion.div>

            {/* Message */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium mb-1">
                What's up?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full  p-3 border-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                placeholder="Tell us more..."
                required
              />
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="w-full bg-gray-600 font-bold py-3 rounded-lg hover:shadow-xl text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </div>

        {/* Right: Address / Contact Info */}
        <motion.div
          className="relative w-full md:w-1/2  px-2 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <ContactPage />
        </motion.div>
      </div>

      {/* Google Map */}
      <section className="max-w-7xl mx-auto px-4 ">
        <div className=" overflow-hidden  border-4 border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.015094779471!2d70.7940465!3d22.2283244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb6b7ad2068b%3A0x7c6872410d836f7c!2sMotion%20Automation!5e0!3m2!1sen!2sin!4v1691500000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <motion.div
        className="relative py-8 flex flex-col items-center text-center space-y-4 px-6 sm:px-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Card className="relative border h-72 md:h-96 lg:h-[20rem] flex items-center justify-center px-6 sm:px-14 max-w-7xl mx-auto bg-white">
          <div className="pointer-events-none absolute top-0 left-0 w-full h-full bg-[url('/pngimage.png')] bg-no-repeat bg-left opacity-10" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-48 h-full bg-[url('/pattern-right.svg')] bg-no-repeat bg-right opacity-10" />

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="w-full md:max-w-[70%]">
              <p className="text-sm italic mb-2 select-none">Have a Look</p>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                Embark on a journey through our innovative portfolio, where
                excellence meets evolution in every project we unfold.
              </h1>
            </div>
            <Button
              asChild
              variant="outline"
              className="px-8 py-6 rounded-full border-2 border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              <Link href="/about-us">About Us</Link>
            </Button>
          </div>
        </Card>
      </motion.div>


      {/* Slide animation keyframes */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
        <Footer/>
    </div>
  )
}
