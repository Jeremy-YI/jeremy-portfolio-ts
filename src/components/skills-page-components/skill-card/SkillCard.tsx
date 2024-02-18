import { FC } from 'react'
import { SkillProps } from '@/utils/constants/interfaces'
import SkillItem from '@/components/skills-page-components/card-item'

const SkillCard: FC<SkillProps> = (props) => {
  const { title, skills } = props
  return (
    <div className="flex gap-8 justify-center">
      <div className="w-full max-w-[500px] border border-[blue] rounded-xl p-5 md:max-w-[400px] md:p-2 sm:max-w-[330px] sm:p-2">
        <h2 className="text-2xl font-semibold mb-5 text-center">{title}</h2>
        <div className="flex justify-center flex-wrap gap-3 mb-5">
          {skills.map((skill, index) => (
            <SkillItem key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillCard
