import { FC } from 'react'
import Button from '@/components/custom-button'
import Resume from '@/assets/jeremy-developer.pdf'
import { MotionConfig } from 'framer-motion'

const MyResumeButton: FC = () => {
  const handleDownload = () => {
    window.open(Resume, '_blank')
  }

  return (
    <MotionConfig
      transition={{
        duration: 0.125,
        ease: 'easeInOut',
      }}
    >
      <Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, rotate: '2.5deg' }}
        className="w-44 h-14 rounded-xl"
        onClick={handleDownload}
      >
        Check Resume
      </Button>
    </MotionConfig>
  )
}

export default MyResumeButton
