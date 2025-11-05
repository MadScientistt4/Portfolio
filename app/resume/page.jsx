"use client";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { subPages } from "./utils";

const Resume = () => {
  const [selectedIndex, setselectedIndex] = useState(0);

  return (
    <main className="mx-auto w-full @container flex flex-col h-[calc(100vh-8rem)]">
      {/* Top level div to separate the buttons from the content */}
      <div className="flex flex-col h-full @xl:flex-row @xl:justify-between gap-6 @xl:pl-8">
        {/* div1: for buttons */}
        <div className="flex flex-wrap justify-center @xl:flex-col gap-4 shrink-0 @xl:px-0 px-4">
          {
            subPages.map((item, index) => {
              return <Button
                key={index}
                className={`hover:bg-[var(--color-accent)] bg-transparent 
                  border-2 border-[var(--color-accent)] hover:text-[var(--color-primary)] 
                  text-[var(--color-accent)] transition-all duration-300
                  font-bold
                  ${selectedIndex === index && "bg-[var(--color-accent)] text-[var(--color-primary)] "}
                 `}
                onClick={() => setselectedIndex(index)}
              >
                {item.name}
              </Button>
            })
          }
        </div>
        {/* div2: for content */}
        <div className="h-full w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              className="h-full w-full px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {subPages[selectedIndex].component}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}

export default Resume