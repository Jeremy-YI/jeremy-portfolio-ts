import { FC } from 'react'
import LinkedinButton from '@/components/linkedin-button'
import GithubButton from '@/components/github-button'

const Footer: FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="relative mt-auto bottom-2 pt-5 flex justify-center items-center gap-5 w-full max-md:flex-col-reverse">
      <p className="text-gray-500 dark:text-gray-400 flex-grow-2">
        &copy; {year} All rights reserved
      </p>
      <div className="flex-grow-1 flex gap-5">
        <LinkedinButton />
        <GithubButton />
      </div>
    </footer>
  )
}

export default Footer
