import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { GlobalSearch } from './GlobalSearch';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Our Work' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileOpen(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleShortcut = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  return (
    <>
      <div className="bg-[#101019] border-b border-[#292638] py-2 px-4 text-center">
        <p className="text-xs sm:text-[13px] text-[#A5A5B5] tracking-wide">
          Your Complete Digital, Creative &amp; Business Solutions Partner.
        </p>
      </div>

      <header className="sticky top-0 z-40 bg-[#08080D]/90 backdrop-blur-md border-b border-[#292638]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-8">
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="DIGISERV Home"
            className="shrink-0 flex items-center focus-visible:outline-2 focus-visible:outline-[#A855F7]"
          >
            <img
              src="/assets/aistudio/DIGISERV_LOGO_dc7a74bc.PNG"
              alt="DIGISERV"
              className="h-6 sm:h-7 w-auto object-contain block"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.to);
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={`text-sm font-medium whitespace-nowrap shrink-0 py-1 border-b transition-colors duration-150 ${
                    isActive
                      ? 'text-white border-[#A855F7]'
                      : 'text-[#A5A5B5] border-transparent hover:text-white hover:border-[#292638]'
                  }`}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => {
                closeMenu();
                setSearchOpen(true);
              }}
              aria-label="Search services, work, and FAQs"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] px-3 rounded-lg border border-[#292638] bg-[#101019] text-[#A5A5B5] hover:text-white hover:border-[#762BFF] transition-colors whitespace-nowrap shrink-0"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              <span className="hidden xl:inline text-xs font-medium">Search</span>
            </button>

            <Link
              to="/quote"
              className="hidden sm:inline-flex items-center justify-center min-h-[44px] px-4 py-2 text-sm font-medium text-white bg-[#762BFF] hover:bg-[#8844FF] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              Get a Free Quote
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#292638] bg-[#101019] text-white hover:border-[#762BFF] transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-[#292638] bg-[#08080D] px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.to === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.to);
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className={`min-h-[44px] flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#101019] text-white border border-[#292638]'
                        : 'text-[#A5A5B5] hover:text-white hover:bg-[#101019]'
                    }`}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
              <div className="pt-3 mt-2 border-t border-[#292638] flex flex-col gap-2.5">
                <Link
                  to="/quote"
                  onClick={closeMenu}
                  className="w-full min-h-[46px] inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-[#762BFF] hover:bg-[#8844FF] rounded-lg transition-colors"
                >
                  Get a Free Quote
                </Link>
                <Link
                  to="/consultation"
                  onClick={closeMenu}
                  className="w-full min-h-[46px] inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-[#101019] border border-[#292638] hover:border-[#762BFF] rounded-lg transition-colors"
                >
                  Book a Consultation
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
