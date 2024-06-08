'use client';
const navItems = [
    { linkText: 'About', href: '/#about' },
    { linkText: 'Experience', href: '/#experience' },
    { linkText: 'Projects', href: '/#projects' },
    { linkText: 'Contact', href: '/#contact' }
];

export function Header() {

    function handleClick() {
        var checkbox = document.getElementById("menu-btn");
        checkbox.checked = false;
    }

    return (
        <header className="header">
            <a className='logo'><img src={'/name.png'} width="111" height="20" alt='logo'/></a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span className="navicon"></span></label>
            {!!navItems?.length && (
                <ul className='menu'>
                    {navItems.map((item, index) => (
                        <li key={index}><a href={item.href} onClick={handleClick}>{item.linkText}</a></li>
                    ))}
                </ul>
            )}
        </header>
    );
}
