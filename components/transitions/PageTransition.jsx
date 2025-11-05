"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
    const pathName = usePathname();

    return (
        <AnimatePresence>
            <div key={pathName}>
                <motion.div
                    initial={{
                        opacity: 1,
                    }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
                    }}
                    className='h-screen z-30 w-screen fixed bg-[var(--color-primary)] top-0 pointer-events-none'
                />
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition