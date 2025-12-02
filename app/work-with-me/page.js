'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function WorkWithMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      let data = {}
      try {
        const text = await response.text()
        data = text ? JSON.parse(text) : {}
      } catch (parseError) {
        console.error('Error parsing response:', parseError)
      }

      if (response.ok) {
        setSubmitStatus('success')
        setErrorMessage('')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || `Server error (${response.status}). Please try again.`)
        setTimeout(() => {
          setSubmitStatus(null)
          setErrorMessage('')
        }, 8000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
      setTimeout(() => {
        setSubmitStatus(null)
        setErrorMessage('')
      }, 8000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-black dark:text-white animate-slide-down">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-green-500 to-green-600 dark:from-red-500 dark:to-red-600 bg-clip-text text-transparent">
              Together
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
            I'm always open to new projects, collaborations, and opportunities. Whether you need a website, web app, or just want to chat about an idea, let's connect.
          </p>
        </div>

        {/* What I Offer */}
        <section className="mb-16 animate-fade-in-delay-2">
          <h2 className="text-4xl font-bold mb-8 text-black dark:text-white text-center">What I Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Custom websites and web applications built with modern technologies. From simple landing pages to interactive web apps.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                User-centered design that looks great and works even better. Wireframes, prototypes, and polished interfaces.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">Python Development</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Backend development, automation scripts, and data processing. Over 200 hours of hands-on Python experience.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">Consultation</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Need advice on a project? Let's discuss your ideas, review code, or brainstorm solutions together.
              </p>
            </div>
          </div>
        </section>

        {/* My Process */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-black dark:text-white text-center">How I Work</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 dark:bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Discovery</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We'll start by discussing your goals, target audience, and what you're looking to build. Understanding the problem is the first step to a great solution.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 dark:bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Planning & Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I'll create wireframes and designs to visualize the solution. We'll iterate until it feels right before writing any code.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 dark:bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building with clean, maintainable code. I'll keep you updated throughout the process and welcome your feedback.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 dark:bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Launch & Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Once everything is polished and tested, we'll launch. I'm here to help with any adjustments or questions afterward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Me */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-black dark:text-white text-center">Why Work With Me</h2>
          <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-red-900/20 dark:to-red-900/30 rounded-xl p-8 border border-green-200 dark:border-red-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">✨ Attention to Detail</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I care about the small things that make a big difference. Clean code, thoughtful design, and smooth user experiences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">🤝 Collaborative Approach</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Your input matters. I believe in working together, not just for you. Regular communication and feedback loops.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">🚀 Fast & Responsive</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Quick turnaround times and prompt responses. I respect your time and keep projects moving forward.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">💬 Clear Communication</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  No jargon, no confusion. I'll explain things clearly and keep you in the loop every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Let's talk about your project. Fill out the form below and i will reply promptly within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black dark:text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black dark:text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-black dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-black dark:text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-red-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 dark:bg-red-900/30 border border-green-200 dark:border-red-800 text-green-800 dark:text-red-400 px-4 py-3 rounded-lg">
                  ✓ Your message has been received! i will reply promptly within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-400 px-4 py-3 rounded-lg">
                  <div className="font-semibold mb-1">✗ Error submitting form</div>
                  <div className="text-sm">{errorMessage || 'Something went wrong. Please try again or contact me directly at siquilward221@gmail.com'}</div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group bg-green-500 dark:bg-red-500 hover:bg-green-600 dark:hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-semibold text-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </>
                  )}
                </button>
                <Link
                  href="/projects"
                  className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-black dark:text-white border-2 border-gray-300 dark:border-gray-700 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold text-lg text-center"
                >
                  View My Work
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}


