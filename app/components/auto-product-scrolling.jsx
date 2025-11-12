"use client"
import { motion } from "framer-motion"
import Link from "next/link"

function ProductCard({ image, title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="group relative w-full border-2 overflow-hidden bg-white cursor-pointer "
    >
      {/* Image */}
      <div className="h-52 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-40">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

        {/* Centered Button */}
        <div className="flex items-center justify-center mt-6">
          <Link href={link}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2  bg-gradient-to-r bg-blue-400 text-white text-sm font-medium shadow-md hover:from-indigo-600 hover:to-purple-700 transition"
            >
              Read More....
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export function CarouselPlugin() {
  const products = [
    {
      image: "/mitsubishi.jpg",
      title: "MITSUBISHI ",
      description: "Automation PLC controllers, VFD / servo motors and drives....",
      link: "/overview/mitsubishi",
    },
    {
      image: "/veichi.jpg",
      title: "VEICHI",
      description: "Automation PLC controllers, VFD / servo motors and drives....",
      link: "/overview/veichi",
    },
    {
      image: "/controller.jpg",
      title: "CNC Controller",
      description: "Controls CNC machines for accurate....",
      link: "/overview/controller",
    },
    {
      image: "/cnc-autoloader.jpg",
      title: "CNC AUTOLOADER ",
      description: "manufacturing by CNC Autoloader, Robotics, SPM Machine....",
      link: "/cncautoloader",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  )
}
