"use client";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import links from '@/lib/nav-utils';

const DesktopNav = () => {
    const pathName = usePathname();

    return (
        <nav className='flex gap-8'>
            {links.map((e, idx) => {
                return <Link
                    href={e.path}
                    key={idx}
                    className={`capitalize font-medium transition-all duration-300 ease-out pb-1 relative
                        ${e.path === pathName 
                            ? "text-[var(--color-accent)]" 
                            : "text-[var(--color-text)] hover:text-[var(--color-accent)]"
                        }
                        after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[var(--color-accent)]
                        after:transition-all after:duration-300 
                        ${e.path === pathName ? "after:w-full" : "after:w-0 hover:after:w-full"}
                    `}
                >
                    {e.name}
                </Link>
            })}
        </nav>
    );
};

export default DesktopNav;