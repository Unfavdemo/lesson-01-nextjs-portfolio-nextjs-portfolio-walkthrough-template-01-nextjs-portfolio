import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-black dark:text-white">About Me</h1>
        
        <div className="flex gap-8 items-center mb-8 bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg">
          {/* Profile photo */}
          <Image 
            src="/pfp.jpeg"
            alt="Siquil Ward"
            width={300}
            height={300}
            className="rounded-full transition-transform duration-300 hover:scale-105"
            style={{ width: '300px', height: 'auto', objectFit: 'cover', aspectRatio: '1 / 1' }}
          />
          
          {/* Bio */}
          <div>
            <p className="text-lg text-black dark:text-white leading-relaxed mb-4">
              I've always been drawn to the intersection of design and code. There's something satisfying about taking an idea and watching it come to life in the browser whether that's a simple animation that makes someone smile or a feature that solves a real problem.
            </p>
            <p className="text-lg text-black dark:text-white leading-relaxed mb-4">
              I work on both the visual side of things and the logic that makes everything tick. I like building things that look good and actually work well, without the jargon. If something I make feels intuitive and looks clean, I've done my job.
            </p>
            <p className="text-lg text-black dark:text-white leading-relaxed">
              Outside of work, I'm usually tinkering with new tools, working on side projects, or learning something completely unrelated. I'm always up for interesting projects and conversations about what we're building.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">My Skills</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default">
              HTML & CSS
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default">
              JavaScript
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default">
              Next.js
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

