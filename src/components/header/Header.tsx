import { FC, useState, useEffect } from 'react'
import { navLinks } from '@/constants/constants'
import NavLink from '@/components/nav-link'
import DarkModeButton from '@/components/dark-mode-button'
import { useDarkMode } from '@/hooks/useDarkMode'
import LogoSection from '@/components/logo-section'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header: FC = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode()
  const [activeLink, setActiveLink] = useState<string>('About')
  const [isMobile, setIsMobile] = useState<boolean>(false)

  // function to toggle the dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  // function to set the active link
  const handleLinkClick = (name: string) => {
    setActiveLink(name)
  }
  // function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile)
  }
  // useEffect to check if the window is resized to a width greater than 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsMobile(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="sticky padding-x py-8 z-10 w-full">
      <nav className="flex justify-around items-center text-xl font-semibold max-lg:text-base  subpixel-antialiased max-sm:justify-between">
        <LogoSection />
        <div className="flex gap-10 max-md:hidden">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              link={link}
              activeLink={activeLink}
              handleLinkClick={handleLinkClick}
            />
          ))}
        </div>

        <DarkModeButton
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="hidden max-md:block">
          <GiHamburgerMenu size={25} onClick={toggleMobileMenu} />
        </div>
      </nav>
      {isMobile && (
        <div className="flex flex-col padding-x info-text items-center w-full bg-slate-400">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              link={link}
              activeLink={activeLink}
              handleLinkClick={handleLinkClick}
            />
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
