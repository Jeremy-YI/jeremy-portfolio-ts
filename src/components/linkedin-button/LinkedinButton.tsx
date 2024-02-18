import { FC } from 'react'
import Button from '@/components/custom-button'
import { FaLinkedin } from 'react-icons/fa'

const LinkedinButton: FC = () => {
  return (
    <Button className="bg-[#0077B5] text-white rounded-md ">
      <a
        href="https://www.linkedin.com/in/yanhong-yi-jeremy"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center gap-2"
      >
        <FaLinkedin size={22} />
        LinkedIn
      </a>
    </Button>
  )
}

export default LinkedinButton
