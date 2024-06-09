import { Dropdown } from "./dropdown";

export function Header() {
    return (
        <header className="header">
            <a className='logo'><img src={'/name.png'} width="111" height="20" alt='logo'/></a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span className="navicon"></span></label>
            <Dropdown />
        </header>
    );
}
