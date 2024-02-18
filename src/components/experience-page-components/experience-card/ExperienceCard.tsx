import { FC } from 'react'
import { ExperienceProps } from '@/constants/interfaces'

const ExperienceCard: FC<ExperienceProps> = (props) => {
  const { id, image, role, company, date, skills } = props
  return (
    <>
      <div className="ps-2 my-2 first:mt-0" id={id.toString()}>
        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          {date}
        </h3>
      </div>
      <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
        <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-[2px] after:-translate-x-[0.5px] after:bg-blue-500 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
          </div>
        </div>
        <div className="grow p-2 pb-8  w-[500px] max-md:w-[300px] border-2 rounded-2xl">
          <div className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <img
              className="flex-shrink-0 size-10 rounded-full"
              src={image}
              alt="Professional Year"
            />
            <div className="font-semibold text-gray-800 dark:text-white">
              {company}
            </div>
          </div>
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
            {role}
          </h3>
          <div className="">
            <span className="text-sm">Skills:&nbsp;</span>
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs px-1 bg-gray-100 dark:bg-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ExperienceCard
