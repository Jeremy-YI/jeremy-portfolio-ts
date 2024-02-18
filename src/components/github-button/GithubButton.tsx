import { FC } from 'react'
import Button from '@/components/custom-button'
import { FaGithub } from 'react-icons/fa6'

const GithubButton: FC = () => {
  return (
    <Button className="text-white rounded-md">
      <a
        href="https://github.com/Jeremy-YI"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center"
      >
        <FaGithub size={22} />
        Github
      </a>
    </Button>
  )
}

export default GithubButton
