import { FC, useState } from 'react'
import axios from 'axios'
import SubmitButton from '../submit-button'
import { UserInfo } from '@/constants/interfaces'

const EmailForm: FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    message: '',
  })
  const { name, email, message } = userInfo

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // EmailJS
    const serviceID = import.meta.env.VITE_APP_EMAIL_SERVICE_ID
    const templateID = import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY

    const data = {
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Jeremy Yi',
        message: message,
      },
    }
    // Send email
    try {
      const res = await axios.post(
        'https://api.emailjs.com/api/v1.0/email/send',
        data
      )
      console.log(res.data)
      setUserInfo({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.log('Failed to send email')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center padding
      border-2 border-gray-300 rounded-md shadow-md gap-4 md:w-[500px]  lg:w-[600px] xl:w-[700px] 2xl:w-[800px] dark:border-blue-500
      "
    >
      <h1 className="text-2xl font-bold drop-shadow-lg">Contact Me</h1>
      <input
        type="text"
        placeholder="Your Name"
        name="name"
        value={name}
        onChange={onChange}
        className="input-form"
      />
      <input
        type="email"
        placeholder="Your Email"
        name="email"
        value={email}
        onChange={onChange}
        className="input-form"
      />
      <textarea
        name="message"
        value={message}
        onChange={onChange}
        placeholder="Description:"
        className="input-form h-40"
      />
      <SubmitButton name={name} email={email} message={message} />
    </form>
  )
}

export default EmailForm
