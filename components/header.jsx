import { Dropdown } from './dropdown'

export function Header () {
  return (
    <header className='header'>
      <a className='logo'><img src='/name.png' width='111' height='20' alt='logo' draggable='false' /></a>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' htmlFor='menu-btn'><span className='navicon' /></label>
      <Dropdown />
    </header>
  )
}
