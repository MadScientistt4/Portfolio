"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { CiMenuFries } from "react-icons/ci";
import links from "@/lib/nav-utils";

const MobileNav = () => {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[var(--color-accent)]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center">
        <nav className="flex flex-col justify-center items-center gap-8">
          <SheetClose asChild>
            <Link href="/">
              <h1 className="text-4xl font-semibold mt-32 mb-20">
                <span className="text-[var(--color-accent)] text-5xl">A</span>ditya
              </h1>
            </Link>
          </SheetClose>
          {
            links.map((item, idx) => {
              return <SheetClose asChild key={item.path}>
                <Link href={item.path} key={item.path}
                  className={`${pathName == item.path && "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"}
                  text-xl capitalize hover:text-[var(--color-accent)] active:text-[var(--color-accent)] transition-all`}
                >
                  {item.name}
                </Link>
              </SheetClose>
            })
          }
          <SheetClose asChild>
            <Link href="/control-panel">
              <Button
                className="bg-[var(--color-accent)] hover:bg-transparent active:bg-transparent 
                border-2 border-[var(--color-accent)] text-[var(--color-primary)]
                hover:text-[var(--color-accent)] active:text-[var(--color-accent)]
                transition-all duration-300 mt-3"
              >
                Control Panel
              </Button>
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav