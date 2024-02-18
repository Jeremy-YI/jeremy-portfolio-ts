import { FC } from 'react'
import Button from '@/components/custom-button'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-600">
      <h1 className="text-6xl font-semibold">404</h1>
      <p className="text-2xl">Page Not Found</p>
      <Link to="/">
        <Button className="mt-6 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
          Go Back Home
        </Button>
      </Link>
    </div>
  )
}

export default NotFound
