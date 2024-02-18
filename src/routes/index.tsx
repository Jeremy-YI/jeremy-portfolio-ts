import { Routes, Route } from 'react-router-dom'
import AppLayout from '@/components/app-layout'
import {
  HomePage,
  SkillsPage,
  ExperiencePage,
  ProjectsPage,
  ContactPage,
  NotFoundPage,
} from '@/pages'

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Pages
