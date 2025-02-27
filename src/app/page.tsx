"use client"

import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <motion.h1 initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)"
        }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
          }}
          transition={{duration: .5}}
          className="text-4xl sm:text-6xl font-bold">
          StableMax
        </motion.h1>
        <motion.p initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)"
        }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
          }}
          transition={{duration: .5, delay: .5}} className="text-center text-white/50 uppercase">Generate stunning images from text using ai</motion.p>
      </div>
    </div>
  );
}
