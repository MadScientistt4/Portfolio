"use client";

import Image from "next/image"
import { motion } from "framer-motion"

const Photo = () => {
  // Original aspect ratio constants
  const originalWidth = 1878;
  const originalHeight = 2000;

  const horizontalOffset = originalWidth;
  const verticalOffset = originalHeight;
  
  const animationDuration = 10;

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" }
        }}
      >
        {/* Container with preserved aspect ratio - original dimensions */}
        <div
          className="relative @xl:w-[400px] w-[200px] mx-auto"
          style={{ aspectRatio: originalWidth / originalHeight }}
        >
          <div className="absolute inset-2">
            <Image
              src="/assets/aditya.jpg"
              priority
              quality={80}
              fill
              alt="Aditya's Image"
              className="object-contain"
            />
          </div>

          <motion.svg
            className="absolute top-0 left-0 w-full h-full"
            fill="transparent"
            viewBox={`0 0 ${originalWidth} ${originalHeight}`}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Top line */}
            <motion.line
              x1="0"
              y1="0"
              x2={originalWidth}
              y2="0"
              stroke="var(--color-accent)"
              strokeWidth="28"
              strokeLinecap="round"
              strokeDasharray="240 160"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -horizontalOffset }}
              transition={{ duration: animationDuration, repeat: Infinity, ease: "linear" }}
            />

            {/* Right line */}
            <motion.line
              x1={originalWidth}
              y1="0"
              x2={originalWidth}
              y2={originalHeight}
              stroke="var(--color-accent)"
              strokeWidth="28"
              strokeLinecap="round"
              strokeDasharray="240 160"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -verticalOffset }}
              transition={{ duration: animationDuration, repeat: Infinity, ease: "linear" }}
            />

            {/* Bottom line */}
            <motion.line
              x1={originalWidth}
              y1={originalHeight}
              x2="0"
              y2={originalHeight}
              stroke="var(--color-accent)"
              strokeWidth="28"
              strokeLinecap="round"
              strokeDasharray="240 160"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -horizontalOffset }}
              transition={{ duration: animationDuration, repeat: Infinity, ease: "linear" }}
            />

            {/* Left line */}
            <motion.line
              x1="0"
              y1={originalHeight}
              x2="0"
              y2="0"
              stroke="var(--color-accent)"
              strokeWidth="28"
              strokeLinecap="round"
              strokeDasharray="240 160"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -verticalOffset }}
              transition={{ duration: animationDuration, repeat: Infinity, ease: "linear" }}
            />
          </motion.svg>
        </div>
      </motion.div>
    </div>
  )
}

export default Photo