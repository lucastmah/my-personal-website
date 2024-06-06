import Link from 'next/link';
import Image from 'next/image';

const navItems = [
    { linkText: 'About', href: '/#about' },
    { linkText: 'Experience', href: '/#experience' },
    { linkText: 'Projects', href: '/#projects' },
    { linkText: 'Contact', href: '/#contact' }
];

export function Header() {
    return (
        <nav className="header flex justify-between m-auto p-[20px] px-16">
            <Image src={'/name.png'} height={30} width={150} alt='logo'/>
            {!!navItems?.length && (
                <ul className="flex gap-[20px]">
                    {navItems.map((item, index) => (
                        <li className='font-semibold' key={index}>
                            <Link
                                href={item.href}
                                className="inline-block hover:opacity-80 sm:px-3 no-underline"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
