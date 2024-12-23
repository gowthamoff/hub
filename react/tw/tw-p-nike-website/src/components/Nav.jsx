import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className="px-4 pt-3 absolute z-10 w-full">
      <nav className="flex w-full justify-between">
        <img src={headerLogo} alt="logo" />
        <ul className="md:flex justify-evenly w-full hidden">
          {navLinks?.map((item) => (
            <li>
              <a
                className="font-mono leading-normal text-xl text-slate-gray"
                href={item?.href}
              >
                {item?.label}
              </a>
            </li>
          ))}
        </ul>
        <img
          className="md:hidden"
          src={hamburger}
          width={23}
          height={23}
          alt="logo"
        />
      </nav>
    </header>
  )
}

export default Nav
