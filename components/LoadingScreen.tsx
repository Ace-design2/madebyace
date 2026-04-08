"use client";

import { motion, AnimatePresence, animate } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLoading } from "@/context/LoadingContext";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    // Force a scroll to top on refresh during loading
    window.scrollTo(0, 0);
    
    // Synchronize percentage with progress bar
    const controls = animate(0, 100, {
      duration: 2.2,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.3,
      onUpdate: (value) => setProgress(Math.round(value)),
    });

    const timer = setTimeout(() => {
      setLoading(false);
      setIsLoading(false);
    }, 2800); // Give enough time for the progress bar animation

    return () => {
      controls.stop();
      clearTimeout(timer);
    };
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black selection:bg-none"
        >
          <div className="flex items-center gap-5 p-4">
            {/* Profile Image (Left) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="relative w-12 h-12 rounded-full border border-red-500/20 overflow-hidden shadow-[0_0_20px_rgba(255,26,26,0.15)] bg-black/5 dark:bg-black/50"
            >
              <Image
                src="/img/my-avi-2.png"
                alt="Profile"
                fill
                priority
                className="object-cover"
                sizes="48px"
              />
            </motion.div>

            {/* Content (Right) */}
            <div className="flex flex-col gap-2 min-w-[100px]">
              <div className="flex items-end justify-between overflow-hidden gap-4">
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.2, 
                    duration: 0.6, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="flex items-center"
                >
                  <h1 className="text-black dark:text-white text-[18px] font-black tracking-tight leading-none">
                    madebyace<span className="text-red-600">.dev</span>
                  </h1>
                </motion.div>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-black/30 dark:text-white/30 text-[11px] font-mono leading-none mb-[1px]"
                >
                  {progress}%
                </motion.span>
              </div>
              
              {/* Progress Bar Container */}
              <div className="h-[1.5px] w-full bg-black/10 dark:bg-white/5 overflow-hidden rounded-full relative">
                {/* Progress Bar Fill */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 2.2, 
                    ease: [0.65, 0, 0.35, 1],
                    delay: 0.3
                  }}
                  className="absolute top-0 left-0 h-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]"
                />
              </div>
            </div>
          </div>

          {/* Minimal Accent Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/5 blur-[100px] pointer-events-none rounded-full" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
