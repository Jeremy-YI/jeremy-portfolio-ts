import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Links {
  name: string
  url: string
}

interface NavLinkProps {
  link: Links
  activeLink: string
  handleLinkClick: (name: string) => void
}

const NavLink: FC<NavLinkProps> = (props) => {
  const { link, activeLink, handleLinkClick } = props

  return (
    <Link
      to={link.url}
      className={` ${
        activeLink === link.name
          ? 'text-blue-500 underline underline-offset-8 hover:text-blue-600'
          : ''
      }`}
      onClick={() => handleLinkClick(link.name)}
    >
      {link.name}
    </Link>
  )
}

export default NavLink
