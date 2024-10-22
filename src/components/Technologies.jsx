import React from 'react';
import { SiKotlin } from 'react-icons/si'; 
import { FaAndroid } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { SiGradle } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { animate, easeIn, motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <span className="text-7xl bg-gradient-to-tr from-[#7F52FF] via-[#B125EA] to-[#E24462] bg-clip-text tracking-tight text-transparent"><SiKotlin className="text-[#b125ea]"/></span>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAndroid className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-7xl text-[#00758f]"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiGradle className="text-7xl text-cyan-950"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoFirebase className="text-7xl text-[#f6820d]"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies