import { FC } from 'react'
import ExperienceCard from '@/components/experience-page-components/experience-card'
import { ExperienceProps } from '@/utils/constants/interfaces'
import { experiences } from '@/utils/constants/constants'

const Experience: FC<ExperienceProps> = () => {
  return (
    <div className="max-container">
      {experiences.map((experience) => (
        <ExperienceCard
          id={experience.id}
          image={experience.image}
          company={experience.company}
          role={experience.role}
          date={experience.date}
          skills={experience.skills}
        />
      ))}
    </div>
  )
}

export default Experience
