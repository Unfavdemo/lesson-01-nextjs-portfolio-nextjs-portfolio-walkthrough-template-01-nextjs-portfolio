import Link from 'next/link'

export default function Resume() {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-black dark:text-white animate-slide-down">Resume</h1>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8 border border-gray-100 dark:border-gray-800 animate-fade-in">
          {/* Header */}
          <header className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Siquil J. Ward</h2>
            <div className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
              <p>Philadelphia, PA | (267) 338-5848 | siquilward221@gmail.com</p>
              <div className="flex justify-center gap-4">
                <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-green-500 dark:text-red-500 hover:text-green-600 dark:hover:text-red-600 transition-colors">
                  GitHub
                </Link>
                <Link href="https://linkedin.com/in/siquil-ward-211828318" target="_blank" rel="noopener noreferrer" className="text-green-500 dark:text-red-500 hover:text-green-600 dark:hover:text-red-600 transition-colors">
                  LinkedIn
                </Link>
              </div>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white border-b-2 border-green-500 dark:border-red-500 pb-2">SUMMARY</h2>
            <p className="text-black dark:text-white leading-relaxed">
              Junior developer with over 200 hours of hands-on Python experience through Launchpad Philly, specializing in user-centered design, problem-solving, and collaborative project development. Skilled in Python programming, Figma design, and applying technical knowledge to real-world community projects. Demonstrated leadership through mentoring, team coordination, and public presentations that effectively engage diverse audiences.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white border-b-2 border-green-500 dark:border-red-500 pb-2">TECHNICAL SKILLS</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Languages:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    Python
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    HTML
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    CSS
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    JavaScript
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    React
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    Tailwind
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Tools:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    Figma
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    Git/GitHub
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    Google Workspace
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    VS Code
                  </span>
          </div>
        </div>

              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Core Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    Communication
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    Leadership
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    Collaboration
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    Problem-Solving
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-110">
                    Time Management
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white border-b-2 border-green-500 dark:border-red-500 pb-2">PROJECTS</h2>
            
            <div className="mb-6 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-black dark:text-white mb-1">TransitAlert – Community Safety App</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Launchpad Studio</p>
              <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">Tech Stack: Python, Figma</p>
              <ul className="list-disc list-inside space-y-1 text-black dark:text-white">
                <li>Designed a community-driven safety platform for SEPTA, enabling riders to report real-time safety updates.</li>
                <li>Created wireframes and prototypes in Figma; simulated backend logic in Python.</li>
                <li>Presented a project to 100+ attendees, strengthening public speaking and technical presentation skills.</li>
              </ul>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white border-b-2 border-green-500 dark:border-red-500 pb-2">EXPERIENCE</h2>
            
            <div className="mb-6 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-black dark:text-white mb-1">Launchpad Philly – Student Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Philadelphia, PA | Jan 2024 – Present</p>
              <ul className="list-disc list-inside space-y-1 text-black dark:text-white">
                <li>Completed 200+ hours of Python programming and project-based learning.</li>
                <li>Earned college credit in programming before high school graduation.</li>
                <li>Applied agile teamwork skills in community tech initiatives.</li>
              </ul>
            </div>

            <div className="mb-6 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-black dark:text-white mb-1">HiTouch INC. – Administrative & Development Intern</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Philadelphia, PA | Jun 2025 – Present</p>
              <ul className="list-disc list-inside space-y-1 text-black dark:text-white">
                <li>Supported 15+ major events (300 attendees each).</li>
                <li>Tracked sponsors, vendors, and guests using spreadsheets and CRM tools.</li>
              </ul>
            </div>

            <div className="mb-6 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-black dark:text-white mb-1">Belmont Charter Middle School – Summer Intern</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Philadelphia, PA | Jul 2022 – Aug 2022</p>
              <ul className="list-disc list-inside space-y-1 text-black dark:text-white">
                <li>Assisted instruction for 30+ students, reinforcing English and Math fundamentals.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white border-b-2 border-green-500 dark:border-red-500 pb-2">EDUCATION</h2>
            
            <div className="mb-6 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-black dark:text-white mb-1">Belmont Charter High School</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Philadelphia, PA</p>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Graduated: Jun 2025</p>
              <div className="text-black dark:text-white">
                <p className="font-semibold mb-1">Honors:</p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li>Math (10–11)</li>
                  <li>English (11)</li>
                </ul>
                <p className="font-semibold mb-1">Clubs:</p>
                <p>4-H, Audio & Visual Club, Gender & Sexuality Alliance</p>
              </div>
            </div>
          </section>

          {/* Leadership & Volunteer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white border-b-2 border-green-500 dark:border-red-500 pb-2">LEADERSHIP & VOLUNTEER</h2>
            
            <div className="mb-6 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-black dark:text-white mb-1">4-H Club – President</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Jun 2023 – Jun 2025</p>
              <ul className="list-disc list-inside space-y-1 text-black dark:text-white">
                <li>Lead weekly meetings to support youth engagement and leadership development.</li>
                <li>Represent organization at local and regional events.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}


