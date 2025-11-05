import Link from "next/link";
import { Button } from "./ui/button";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Header() {
    return (
        <header className="py-8 @xl:py-12">
            <div className="px-12 @container mx-auto center flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        <span className="text-[var(--color-accent)] text-5xl">A</span>ditya
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden @xl:flex items-center gap-8">
                    <DesktopNav />
                    <Link href="/control-panel">
                        <Button
                            className="bg-[var(--color-accent)] hover:bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-all duration-300"
                        >
                            Control Panel
                        </Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="@xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;