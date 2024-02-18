import { FC } from 'react'
import { skills } from '@/constants/constants'
import SkillCard from '@/components/skills-page-components/skill-card'

const Skills: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 max-container">
      <p className="text-lg font-normal max-md:text-base">
        Here are some of the skills I have been using for the past 2 years.
      </p>
      <div className="grid grid-cols-2 gap-10 max-md:flex flex-col max-md:w-[400px]">
        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            skills={skill.skills}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills
