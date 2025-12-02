export default function Contact() {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-black dark:text-white">Get In Touch</h1>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8 border border-gray-100 dark:border-gray-800">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl">📧</span>
              <div>
                <p className="font-bold text-black dark:text-white text-lg">Email</p>
                <p className="text-black dark:text-white text-base font-bold">siquilward221@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">🔗</span>
              <div>
                <p className="font-bold text-black dark:text-white text-lg">LinkedIn</p>
                <p className="text-black dark:text-white text-base font-bold">linkedin.com/in/siquil-ward-211828318</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">💻</span>
              <div>
                <p className="font-bold text-black dark:text-white text-lg">GitHub</p>
                <p className="text-black dark:text-white text-base font-bold">github.com/unfavdemo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

