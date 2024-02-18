import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { GiNinjaHeroicStance } from 'react-icons/gi'

const LogoSection: FC = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <div>
      <GiNinjaHeroicStance
        size={30}
        onClick={handleClick}
        className="hover:size-9"
      />
    </div>
  )
}

export default LogoSection
