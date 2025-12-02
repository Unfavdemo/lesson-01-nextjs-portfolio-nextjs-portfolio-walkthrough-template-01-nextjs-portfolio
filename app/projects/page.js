'use client'

import { useState } from 'react'
import Image from 'next/image'
import ProjectModal from '../components/ProjectModal'

const projects = [
  {
    id: 1,
    title: 'SkillTree',
    description: 'A skill tracking and development platform that helps users visualize and manage their learning progress through an interactive skill tree system. Transform your career path through gamified learning with personalized skill trees, interactive lessons, and AI-generated challenges.',
    image: '/skilltree.png',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    details: [
      'Interactive skill tree visualization',
      'Gamified learning experience',
      'AI-generated personalized challenges',
      'Progress tracking and analytics',
      'Career path recommendations'
    ],
    url: 'https://skill-tree-38it.vercel.app'
  },
  {
    id: 2,
    title: 'Project Name',
    description: 'Brief description of what this project does. Add more details about the features and functionality of your project here.',
    image: null,
    tech: ['JavaScript', 'React'],
    details: [
      'Feature 1 description',
      'Feature 2 description',
      'Feature 3 description'
    ],
    url: 'https://project2.example.com'
  },
  {
    id: 3,
    title: 'Project Name',
    description: 'Brief description of what this project does. Add more details about the features and functionality of your project here.',
    image: null,
    tech: ['Next.js', 'Tailwind'],
    details: [
      'Feature 1 description',
      'Feature 2 description',
      'Feature 3 description'
    ],
    url: 'https://project3.example.com'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-5xl font-bold mb-12 text-black dark:text-white">My Projects</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-800 cursor-pointer"
            >
              {project.image ? (
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                  <p className="text-white font-bold text-lg">Project Screenshot</p>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">{project.title}</h3>
                <p className="text-black dark:text-white mb-4 font-semibold line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded font-semibold border border-gray-400 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

