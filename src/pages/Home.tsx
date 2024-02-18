import { FC } from 'react'
import HeroImg from '@/assets/images/jeremy.jpg'
import MyResumeButton from '@/components/home-page-components/resume-button'

const Home: FC = () => {
  return (
    <div className="flex justify-center items-center padding gap-10 max-lg:max-lg max-container ">
      {/* left section */}
      <div className="max-w-md">
        <div className="flex flex-col font-bold">
          <p className="text-5xl">
            <span className="text-gray-400 pr-2">Hi, I am</span>Jeremy Yi
          </p>
          <br />
          <p className="text-2xl">
            I am a
            <span className="text-4xl font-montserrat text-red-300 pl-2 ">
              Full Stack Developer
            </span>
          </p>
          <br />
          <p className=" text-gray-600 dark:text-cyan-50">
            I am a motivated and versatile individual, always eager to take on
            new challenges.
            <br /> With a passion for learning, I am dedicated to delivering
            high-quality results.
            <br /> With a positive attitude and a growth mindset, I am ready to
            make a meaningful contribution and achieve great things.
          </p>
          <div className="padding-y max-lg:self-center">
            <MyResumeButton />
          </div>
        </div>
      </div>
      {/* right section */}
      <div className="max-w-md max-sm:max-w-sm">
        <img src={HeroImg} alt="jeremy-profile" className="rounded-full" />
      </div>
    </div>
  )
}

export default Home
