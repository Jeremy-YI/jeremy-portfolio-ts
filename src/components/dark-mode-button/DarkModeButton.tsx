import { FC } from 'react'
import Button from '@/components/custom-button'
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md'

interface DarkModeButtonProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeButton: FC<DarkModeButtonProps> = (props) => {
  const { isDarkMode, toggleDarkMode } = props

  return (
    <Button
      onClick={toggleDarkMode}
      className="flex justify-center items-center gap-2 w-50 p-4 text-lg rounded-full max-lg:text-base max-md:hidden "
    >
      {isDarkMode ? <MdDarkMode size={25} /> : <MdOutlineDarkMode size={25} />}
      Mode
    </Button>
  )
}

export default DarkModeButton
