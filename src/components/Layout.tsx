import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { tryoutInfo } from '../data/club'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/tryouts', label: 'Tryouts' },
  { to: '/exec', label: 'Exec Board' },
  { to: '/results', label: 'Results' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/contact', label: 'Contact' },
]

function BallMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="18" fill="var(--color-maize)" />
      {[
        [20, 6], [20, 34], [6, 20], [34, 20],
        [10.3, 10.3], [29.7, 10.3], [10.3, 29.7], [29.7, 29.7],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.6" fill="var(--color-navy)" />
      ))}
    </svg>
  )
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          onClick={onNavigate}
          className={({ isActive }) =>
            `font-display text-sm tracking-wide uppercase px-3 py-2 transition-colors ${
              isActive ? 'text-maize' : 'text-white/80 hover:text-white'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </>
  )
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-court">
      <header className="bg-navy sticky top-0 z-40 shadow-md shadow-black/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/" className="flex items-center gap-3 group">
              <BallMark className="w-8 h-8" />
              <span className="font-display text-white text-lg sm:text-xl tracking-wide uppercase group-hover:text-maize transition-colors">
                Michigan Pickleball Club
              </span>
            </NavLink>

            <nav className="hidden md:flex items-center gap-1">
              <NavLinks />
            </nav>

            <button
              type="button"
              className="md:hidden text-white p-2"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M6 6l14 14M20 6L6 20" strokeLinecap="round" />
                ) : (
                  <path d="M4 8h18M4 13h18M4 18h18" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-white/10 bg-navy-deep px-4 py-3 flex flex-col gap-1">
            <NavLinks onNavigate={() => setMenuOpen(false)} />
          </nav>
        )}
      </header>

      <div className="bg-maize text-navy text-center text-sm font-medium py-2 px-4">
        Tryouts are {tryoutInfo.days.map((d) => d.date).join(' & ')} — {' '}
        <NavLink to="/tryouts" className="underline underline-offset-2 font-semibold">
          get the details
        </NavLink>
      </div>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-navy-deep text-white/70 mt-auto">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BallMark className="w-6 h-6" />
              <span className="font-display text-white uppercase tracking-wide text-sm">
                Michigan Pickleball
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              A student club at the University of Michigan, on the courts since 2021.
            </p>
          </div>
          <div>
            <h3 className="font-display text-white text-sm uppercase tracking-wide mb-3">Club</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><NavLink to="/tryouts" className="hover:text-maize">Tryouts</NavLink></li>
              <li><NavLink to="/exec" className="hover:text-maize">Exec Board</NavLink></li>
              <li><NavLink to="/results" className="hover:text-maize">Results</NavLink></li>
              <li><NavLink to="/sponsors" className="hover:text-maize">Sponsors</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-white text-sm uppercase tracking-wide mb-3">Get in Touch</h3>
            <p className="text-sm leading-relaxed mb-3">
              Questions about the club, tryouts, or sponsorship?
            </p>
            <NavLink
              to="/contact"
              className="inline-block bg-maize text-navy font-display text-sm uppercase tracking-wide px-4 py-2 hover:bg-maize-soft transition-colors"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs">
          © {new Date().getFullYear()} Michigan Pickleball Club. Not affiliated with the University of Michigan Athletic Department.
        </div>
      </footer>
    </div>
  )
}
