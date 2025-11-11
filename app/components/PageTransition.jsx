"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function LoadingOverlay({ setLoading }) {
    const pathname = usePathname();
    const [internalLoading, internalSetLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const progressInterval = useRef(null);
    const previousPathname = useRef(pathname);
    const isBackNavigation = useRef(false);

    // Detect back navigation
    useEffect(() => {
        const handlePopState = () => {
            isBackNavigation.current = true;
        };
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    useEffect(() => {
        // 🔹 Only run overlay if path actually changed AND not going back
        if (pathname !== previousPathname.current && !isBackNavigation.current) {
            internalSetLoading(true);
            if (setLoading) setLoading(true);
            setProgress(0);

            if (progressInterval.current) clearInterval(progressInterval.current);

            progressInterval.current = setInterval(() => {
                setProgress((old) => {
                    if (old >= 90) {
                        clearInterval(progressInterval.current);
                        return old;
                    }
                    return Math.min(old + Math.floor(Math.random() * 10) + 5, 90);
                });
            }, 200);

            previousPathname.current = pathname;

            setTimeout(() => {
                setProgress(100);
                setTimeout(() => {
                    internalSetLoading(false);
                    if (setLoading) setLoading(false);
                    setProgress(0);
                }, 400);
                clearInterval(progressInterval.current);
            }, 1000);
        }

        // ✅ Reset flag after handling back nav (so future forward navs work)
        if (isBackNavigation.current) {
            isBackNavigation.current = false;
        }
    }, [pathname, setLoading]);

    if (!internalLoading) return null;

    return (
        <AnimatePresence>
            <motion.div
                key="loading-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-tr from-blue-300 via-white to-gray-600 backdrop-blur-lg"
            >
                {/* Animated Logo */}
                <motion.img
                    src="/motion.png"
                    alt="motion automa"
                    className="w-32 h-32 object-contain mb-8 select-none"
                    initial={{ scale: 1 }}
                    animate={{
                        scale: [1, 1.25, 1, 1.15, 1],
                        rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 0.5,
                    }}
                />

                {/* Percentage Count */}
                <motion.div
                    key="percentage"
                    className="text-5xl font-bold text-gray-800"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {progress}%
                </motion.div>

                {/* Subtle loading text shimmer */}
                <motion.div
                    className="mt-4 text-sm tracking-widest font-medium text-gray-700"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                >
                    Loading...
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
