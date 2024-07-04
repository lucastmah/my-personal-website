'use client'

const navItems = [
  { linkText: 'About', href: '/#about' },
  { linkText: 'Experience', href: '/#experience' },
  { linkText: 'Projects', href: '/#projects' },
  { linkText: 'Contact', href: '/#contact' }
]

export function Dropdown () {
  function handleClick () {
    const checkbox = document.getElementById('menu-btn')
    checkbox.checked = false
  }

  return (
    <>
      {!!navItems?.length && (
        <ul className='menu'>
          {navItems.map((item, index) => (
            <li key={index} className='dropdown_box'><a href={item.href} onClick={handleClick} className='dropdown-selection'>{item.linkText}</a></li>
          ))}
        </ul>
      )}
    </>
  )
}
