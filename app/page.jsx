import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { FaPalette, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full px-8">
      <div className="@container mx-auto h-full">
        <div className="flex flex-col @xl:flex-row items-center justify-around @xl:pt-8 @xl:pb-24">
          <div className="text-center @xl:text-left order-2 @xl:order-none">
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-[var(--color-accent)]">
                Aditya Mathur
              </span>
            </h1>
            <p className="max-w-[500px] text-[var(--color-text)]/80">
              The best solutions happen where creativity meets technical expertise — and that's what drives my work
            </p>
            {/* control panel btn */}
            <Link href="/control-panel">
              <Button
                className="bg-[var(--color-accent)] hover:bg-transparent active:bg-transparent 
              border-2 border-[var(--color-accent)] text-[var(--color-primary)] 
              hover:text-[var(--color-accent)] active:text-[var(--color-accent)] transition-all duration-300 my-6
              font-bold"
              >
                <span className="flex flex-row gap-2 justify-center items-center">
                  <span>Customize Website</span>
                  <span><FaPalette /></span>
                </span>
              </Button>
            </Link>
            {/* btn and socials */}
            <div className="flex flex-col @xl:flex-row items-center gap-2">
            <Link 
              href="mailto:aditya.mathur5885@gmail.com"
              // target="_blank"
              rel="noopener noreferrer"
            >
                <Button
                  className="bg-transparent border-[var(--color-text)] 
                  border-2 mb-6 @xl:mr-6 @xl:mb-0
                  hover:bg-[var(--color-text)] hover:text-[var(--color-primary)] 
                  active:bg-[var(--color-text)] active:text-[var(--color-primary)] 
                  transition-all duration-300 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>Say Hi!</span>
                    <FaEnvelope className="text-xl" />
                  </span>
                </Button>
              </Link>
              <div className="mb-8 @xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-[var(--color-accent)]
                  border-[1.5] rounded-full flex justify-center items-center
                  text-[var(--color-accent)] 
                  hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]
                  active:bg-[var(--color-accent)] active:text-[var(--color-primary)]
                  transition-all duration-300"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 @xl:order-none mb-8 @xl:mb-0 @xl:ml-8">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
