"use client";

import { motion } from 'framer-motion';

const stairAnim = {
    initial: {
        left: "0%"
    },
    animate: {
        left: "100%"
    },
    exit: {
        left: ["100%", "0%"]
    }
};

const Stairs = () => {
    return (
        <div className='h-full w-full flex flex-col'>
            {
                [...Array(6)].map((_, index) => {
                    return <motion.div
                        key={index}
                        variants={stairAnim}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: index * 0.1
                        }}
                        className='h-[16.667%] w-full bg-[var(--color-accent)] relative overflow-hidden'
                    />
                })
            }
        </div>
    )
}

export default Stairs