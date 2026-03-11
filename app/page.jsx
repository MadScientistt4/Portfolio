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
            <p className="max-w-[500px] text-[var(--color-text)]/80 leading-relaxed mb-8">
              The best solutions happen where creativity meets technical expertise — and that's what drives my work
            </p>
            {/* control panel btn */}
            <Link href="/control-panel">
              <Button
                className="bg-[var(--color-accent)] hover:bg-transparent active:bg-transparent 
              border-2 border-[var(--color-accent)] text-[var(--color-primary)] 
              hover:text-[var(--color-accent)] active:text-[var(--color-accent)] transition-all duration-300 font-bold shadow-lg hover:shadow-xl"
              >
                <span className="flex flex-row gap-2 justify-center items-center">
                  <span>Customize Website</span>
                  <span><FaPalette /></span>
                </span>
              </Button>
            </Link>
            {/* btn and socials */}
            <div className="flex flex-col @xl:flex-row items-center gap-4 mt-8">
            <Link 
              href="mailto:aditya.mathur5885@gmail.com"
              rel="noopener noreferrer"
            >
                <Button
                  className="bg-transparent border-[var(--color-text)] 
                  border-2 
                  hover:bg-[var(--color-text)] hover:text-[var(--color-primary)] 
                  active:bg-[var(--color-text)] active:text-[var(--color-primary)] 
                  transition-all duration-300 text-center shadow-md hover:shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>Say Hi!</span>
                    <FaEnvelope className="text-lg" />
                  </span>
                </Button>
              </Link>
              <div>
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-10 h-10 border-2 border-[var(--color-accent)]
                  rounded-full flex justify-center items-center
                  text-[var(--color-accent)] 
                  hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]
                  active:bg-[var(--color-accent)] active:text-[var(--color-primary)]
                  transition-all duration-300 hover:shadow-md"
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
