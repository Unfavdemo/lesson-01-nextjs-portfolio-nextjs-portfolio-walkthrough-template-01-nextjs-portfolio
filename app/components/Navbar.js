'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white shadow-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Your name or logo */}
          <Link href="/" className="text-2xl font-bold text-black dark:text-white hover:text-green-400 dark:hover:text-red-500 transition-colors">
            Siquil Ward
          </Link>
          
          {/* Navigation links */}
          <div className="flex items-center gap-6">
            <div className="flex gap-6">
              <Link href="/" className="text-black dark:text-white font-semibold hover:text-green-400 dark:hover:text-red-500 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-black dark:text-white font-semibold hover:text-green-400 dark:hover:text-red-500 transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-black dark:text-white font-semibold hover:text-green-400 dark:hover:text-red-500 transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-black dark:text-white font-semibold hover:text-green-400 dark:hover:text-red-500 transition-colors">
                Blog
              </Link>
              <Link href="/resume" className="text-black dark:text-white font-semibold hover:text-green-400 dark:hover:text-red-500 transition-colors">
                Resume
              </Link>
              <Link href="/work-with-me" className="text-black dark:text-white font-semibold hover:text-green-400 dark:hover:text-red-500 transition-colors">
                Work With Me
              </Link>
              <Link href="/contact" className="text-black dark:text-white font-semibold hover:text-green-400 dark:hover:text-red-500 transition-colors">
                Contact
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
