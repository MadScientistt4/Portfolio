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
                    className={`${e.path === pathName && "text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]"} capitalize font-medium hover:text-[var(--color-accent)] transition-all`}
                >
                    {e.name}
                </Link>
            })}
        </nav>
    );
};

export default DesktopNav;