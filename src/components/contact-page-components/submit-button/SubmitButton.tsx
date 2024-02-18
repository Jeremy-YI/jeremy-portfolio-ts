import { FC } from 'react'
import Button from '@/components/custom-button/CustomButton'
import { MotionConfig } from 'framer-motion'
import { UserInfo } from '@/utils/constants/interfaces'

const SubmitButton: FC<UserInfo> = (props) => {
  const { name, email, message } = props
  return (
    <MotionConfig
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <Button
        whileHover={name && email && message ? { scale: 1.25 } : {}}
        type="submit"
        disabled={!name || !email || !message}
        className={
          !name || !email || !message
            ? 'margin rounded-md bg-gray-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline'
            : 'margin rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline'
        }
      >
        Send Email
      </Button>
    </MotionConfig>
  )
}

export default SubmitButton
