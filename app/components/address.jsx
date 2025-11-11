"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactPage() {
    return (
        <div className="w-full max-w-4xl mx-auto rounded-lg px-6 md:px-10 py-10 md:py-12 space-y-5 text-gray-800">
            {/* Head Office */}
            <h4 className="text-xl md:text-2xl font-semibold text-center md:text-left">
                <strong className="text-blue-400">Head</strong> Office
            </h4>

            <ul className="space-y-4 text-sm sm:text-base text-center md:text-left">
                <li className="flex flex-col md:flex-row md:items-start md:gap-3 justify-center md:justify-start">
                    <div className="flex justify-center md:justify-start">
                        <MapPin className="text-blue-400 mt-1" size={20} />
                    </div>
                    <span>
            <strong className="text-blue-400">Address:</strong> Plot No.15, Survey No 20, Nr. Punam Dumper,<br />Vavdi, Rajkot - 360004.
          </span>
                </li>

                <li className="flex flex-col md:flex-row md:items-center md:gap-3 justify-center md:justify-start">
                    <div className="flex justify-center md:justify-start">
                        <Phone className="text-blue-400 mt-1" size={20} />
                    </div>
                    <span>
            <strong className="text-blue-400">Mo:</strong> +91 99982 12691<br />
            <strong className="text-blue-400">Mo:</strong> +91 70467 80350
          </span>
                </li>

                <li className="flex flex-col md:flex-row md:items-center md:gap-3 justify-center md:justify-start">
                    <div className="flex justify-center md:justify-start">
                        <Mail className="text-blue-400 mt-1" size={20} />
                    </div>
                    <span>
            <strong className="text-blue-400">Email:</strong>{" "}
                        <a
                            href="mailto:motionautomationrajkot@gmail.com"
                            className="text-blue-400 hover:underline"
                        >
              motionautomationrajkot@gmail.com
            </a>
          </span>
                </li>
            </ul>

            {/* Business Hours */}
            <h4 className="text-xl md:text-2xl font-semibold mt-8 text-center md:text-left">
                Business <strong className="text-blue-400">Hours</strong>
            </h4>
            <ul className="space-y-3 mt-2 text-center md:text-left">
                <li className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
                    <Clock className="text-blue-400" size={20} />
                    <span>Thursday - Tuesday : 9am to 7pm</span>
                </li>
                <li className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
                    <Clock className="text-blue-400" size={20} />
                    <span>Wednesday : Closed</span>
                </li>
            </ul>

            {/* Follow Us */}
            <section className="mt-8 text-center md:text-left">
                <h4 className="text-xl md:text-2xl font-semibold">
                    <strong className="text-blue-400">Follow</strong> Us
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-4 text-base font-medium">
                    <a
                        href="https://www.facebook.com/motionautomation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://www.youtube.com/@Motion_Automation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-500 transition-colors"
                    >
                        YouTube
                    </a>
                    <a
                        href="https://www.instagram.com/motion_automation/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-600 transition-colors"
                    >
                        Instagram
                    </a>
                </div>
            </section>
        </div>
    );
}
