"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactPage() {
  return (
    <div className="w-full max-w-4xl rounded-lg px-6 md:px-10 py-10 md:py-12 space-y-5">
      
      {/* Head Office */}
      <h4 className=" text-xl md:text-2xl font-semibold">
        <strong className="text-blue-400">Head</strong> Office
      </h4>

      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <MapPin className="text-blue-400" size={20} />
          <span>
            <strong className="text-blue-400">Address:</strong> Plot No.15, Survey No 20, Nr.Punam Dumper,<br/>Vavdi Rajkot-360004.
          </span>
        </li>
        <li className="flex items-center gap-3">
          <Phone className="text-blue-400" size={20} />
          <span>
            <strong className="text-blue-400">Mo:</strong> +91 99982 12691<br/>
            <strong className="text-blue-400">Mo:</strong> +91 70467 80350

          </span>
        </li>
       
        <li className="flex items-center gap-3">
          <Mail className="text-blue-400" size={20} />
          <span>
            <strong className="text-blue-400">Email:</strong>{" "}
            <a href="mailto:motionautomationrajkot@gmail.com" className="text-blue-400 hover:underline">
              motionautomationrajkot@gmail.com
            </a>
          </span>
        </li>
      </ul>

      {/* Business Hours */}
      <h4 className="text-xl md:text-2xl font-semibold mt-6">
        Business <strong className="text-blue-400">Hours</strong>
      </h4>
      <ul className="space-y-2 mt-2">
        <li className="flex items-center gap-3">
          <Clock className="text-blue-400" size={20} />
          Thursday - Tuesday : 9am to 7pm
        </li>
        <li className="flex items-center gap-3">
          <Clock className="text-blue-400" size={20} />
          Wednesday : Closed
        </li>
      </ul>

      {/* Follow Us */}
      <section className="mt-6">
<h4 className="text-xl md:text-2xl font-semibold mt-6">
        <strong className="text-blue-400">Follow</strong> Us
      </h4>        
      <div className="flex gap-8 space-y-2 mt-2">
          <a
            href="https://www.facebook.com/motionautomation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Facebook
          </a>
          <a
            href="https://www.youtube.com/@Motion_Automation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            YouTube
          </a>
          <a
            href="https://www.instagram.com/motion_automation/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
          >
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
