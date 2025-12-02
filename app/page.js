import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-black dark:to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 dark:bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 dark:bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 dark:bg-red-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main hero section */}
        <div className="mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-green-500 dark:text-red-500 bg-green-50 dark:bg-red-900/30 px-4 py-2 rounded-full border border-green-200 dark:border-red-800">
              👋 Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-6 text-black dark:text-white animate-slide-down">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-green-500 to-green-600 dark:from-red-500 dark:to-red-600 bg-clip-text text-transparent">
              Siquil Ward
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-black dark:text-white animate-fade-in-delay">
            Developer & Designer
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
            I build websites and web apps that look good and work well. I enjoy the whole process from sketching ideas to writing code that brings them to life.
          </p>
        </div>

        {/* Quick stats or highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-delay-2">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-green-500 dark:text-red-500 mb-2">200+</div>
            <div className="text-black dark:text-white">Hours of Coding</div>
          </div>
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-green-500 dark:text-red-500 mb-2">Python</div>
            <div className="text-black dark:text-white">Primary Language</div>
          </div>
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-green-500 dark:text-red-500 mb-2">Launchpad</div>
            <div className="text-black dark:text-white">Student Developer</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <Link 
            href="/projects" 
            className="group bg-green-500 dark:bg-red-500 hover:bg-green-600 dark:hover:bg-red-600 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-semibold text-lg w-full sm:w-auto flex items-center justify-center gap-2"
          >
            View My Work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link 
            href="/about" 
            className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-black dark:text-white border-2 border-gray-300 dark:border-gray-700 px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold text-lg w-full sm:w-auto"
          >
            Learn More About Me
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

