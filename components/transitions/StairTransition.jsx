"use client";
import { AnimatePresence } from 'framer-motion';
import Stairs from './Stairs.jsx';
import { usePathname } from 'next/navigation';

const StairTransition = () => {
  const pathName = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName}>
          <div className='h-screen w-screen fixed top-0 left-0 right-0 z-40 pointer-events-none flex'>
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  )
}

export default StairTransition