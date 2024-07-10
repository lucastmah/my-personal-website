'use client'

const navItems = [
  { linkText: 'About', href: 'about' },
  { linkText: 'Experience', href: 'experience' },
  { linkText: 'Projects', href: 'projects' },
  { linkText: 'Contact', href: 'contact' }
]

export function Dropdown () {
  const handleClick = (id) => {
    const checkbox = document.getElementById('menu-btn')
    checkbox.checked = false
    const element = document.getElementById(id)
    element?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <>
      {!!navItems?.length && (
        <ul className='menu'>
          {navItems.map((item, index) => (
            <li key={index} className='dropdown-box'><button draggable='false' onClick={()=>handleClick(item.href)} className='dropdown-selection'>{item.linkText}</button></li>
          ))}
        </ul>
      )}
    </>
  )
}
