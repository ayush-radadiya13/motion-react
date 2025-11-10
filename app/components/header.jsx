"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@/app/components/ui/menubar";

export function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Hide and re-show header on route change
  useEffect(() => {
    setShowHeader(false);
    const timeout = setTimeout(() => {
      setShowHeader(true);
    }, 200);
    return () => clearTimeout(timeout);
  }, [pathname]);

  // Scroll listener for hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        if (showHeader) setShowHeader(false);
      } else {
        if (!showHeader) setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showHeader]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-transform duration-300 shadow-md 
      bg-white dark:bg-black ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/motion.png"
            alt="Logo"
            width={70}
            height={35}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menubar */}
        <div className="hidden md:flex flex-1 justify-center">
          <Menubar className="border-none bg-transparent shadow-none space-x-6 text-base font-semibold">
            <MenubarMenu>
  <MenubarTrigger className="uppercase">
                <Link href="/home">Home</Link>
              </MenubarTrigger>
              </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="uppercase">
                <Link href="/about-us">About Us</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="uppercase">Products</MenubarTrigger>
              <MenubarContent>
                  <MenubarSub>
                      <MenubarSubTrigger>MITSUBISHI</MenubarSubTrigger>
                      <MenubarSubContent>
                          <MenubarItem asChild>
                              <Link href="/mitsubishi/plc">PLC</Link>
                          </MenubarItem>

                          <MenubarItem asChild>
                              <Link href="/mitsubishi/hmi">HMI</Link>
                          </MenubarItem>

                          <MenubarItem asChild>
                              <Link href="/mitsubishi/vfd">VFD</Link>
                          </MenubarItem>

                          <MenubarItem asChild>
                              <Link href="/mitsubishi/acservo">AC Servo Motor</Link>
                          </MenubarItem>
                      </MenubarSubContent>
                  </MenubarSub>

                  <MenubarSub>
                  <MenubarSubTrigger>VEICHI</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem asChild>
                      <Link href="/veichi/plc">PLC</Link>
                    </MenubarItem>
                    <MenubarItem asChild>
                      <Link href="/veichi/hmi">HMI</Link>
                    </MenubarItem>
                    <MenubarItem asChild>
                      <Link href="/veichi/vfd">VFD</Link>
                    </MenubarItem>
                    <MenubarItem asChild>
                      <Link href="/veichi/servomotor">Servo Motor</Link>
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSub>
                  <MenubarSubTrigger>CNC CONTROLLER</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem asChild>
                      <Link href="/controller/fingercnc">Finger CNC</Link>
                    </MenubarItem>
                    <MenubarItem asChild>
                      <Link href="/controller/deltacnc">Delta CNC</Link>
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarItem asChild>
                  <Link href="/cncautoloader">
                    CNC AUTOLOADER
                  </Link>
                </MenubarItem>
                  <MenubarItem asChild>
                      <Link href="/robotics">
                          ROBOTICS
                      </Link>
                  </MenubarItem>
                  <MenubarItem asChild>
                      <Link href="/spmmachine">
                          SPM MACHINE
                      </Link>
                  </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
             <MenubarMenu>
              <MenubarTrigger className="uppercase">
                <Link href="/gallery">Gallery</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="uppercase">
                <Link href="/contact-us">Contact Us</Link>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenu && (
        <div className="md:hidden bg-white dark:bg-black px-4 py-3 shadow-lg space-y-2">
          <Link href="/" className="block uppercase">
            Home
          </Link>
          <details>
            <summary className="uppercase cursor-pointer">Products</summary>
            <div className="ml-4 space-y-1">
              <Link href="/products/electronics" className="block">
                Electronics
              </Link>
              <Link href="/products/fashion" className="block">
                Fashion
              </Link>
              <Link href="/products/home" className="block">
                Home & Living
              </Link>
              <Link href="/products/sports" className="block">
                Sports
              </Link>
            </div>
          </details>
          <Link href="/about-us" className="block uppercase">
            About Us
          </Link>
          <Link href="/contact-us" className="block uppercase">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
