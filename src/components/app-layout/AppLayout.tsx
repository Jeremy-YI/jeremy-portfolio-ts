import { FC } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Outlet } from 'react-router-dom'

const AppLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen light-theme dark:dark-theme">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout
