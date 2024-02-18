import { Routes, Route } from 'react-router-dom'
import AppLayout from '@/components/app-layout'
import { Home, Skills, Experience, Projects, Contact } from '@/pages'

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default Pages
