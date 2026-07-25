import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navItems } from '../data/cv'

const Navbar = ({ activeId }) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-lg">
      <nav
        className="shell flex h-[60px] items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="font-display text-base tracking-[0.2em] text-white"
          onClick={() => setOpen(false)}
        >
          AW
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'true' : undefined}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  activeId === item.id
                    ? 'text-accent'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile trigger */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-white/10 transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <ul className="shell flex flex-col py-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block py-3 text-sm ${
                  activeId === item.id ? 'text-accent' : 'text-white/70'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
