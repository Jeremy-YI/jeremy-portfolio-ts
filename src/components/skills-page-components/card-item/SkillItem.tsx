import { FC } from 'react'
import { Skills as SkillItemProps } from '@/constants/interfaces'

const SkillItem: FC<SkillItemProps> = (props) => {
  const { name, image } = props
  return (
    <div className="text-base font-normal  border rounded-lg p-3 flex items-center justify-center gap-2 md:text-sm md:p-2 sm:text-sm sm:p-1">
      <img src={image} alt={name} className="w-5 h-5" />
      {name}
    </div>
  )
}

export default SkillItem
