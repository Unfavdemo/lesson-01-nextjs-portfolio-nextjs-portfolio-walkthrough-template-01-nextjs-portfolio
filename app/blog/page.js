import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    date: 'January 15, 2025',
    excerpt: 'A beginner-friendly guide to building your first Next.js application. Learn the basics of routing, components, and server-side rendering.',
    category: 'Tutorial'
  },
  {
    id: 2,
    title: 'Building Responsive Designs with Tailwind CSS',
    date: 'January 10, 2025',
    excerpt: 'Tips and tricks for creating beautiful, responsive layouts using Tailwind CSS utility classes. From mobile-first design to complex grid layouts.',
    category: 'Design'
  },
  {
    id: 3,
    title: 'My Journey into Web Development',
    date: 'January 5, 2025',
    excerpt: 'Reflecting on my path from curiosity to code. The challenges, wins, and lessons learned along the way.',
    category: 'Personal'
  }
]

export default function Blog() {
  return (
    <div className="min-h-screen p-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-black dark:text-white animate-slide-down">Blog</h1>
        
        <p className="text-lg text-black dark:text-white mb-12 animate-fade-in-delay">
          Thoughts on web development, design, and the occasional random musing.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-100 dark:bg-red-900/30 text-green-800 dark:text-red-400 px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {post.date}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
                {post.title}
              </h2>
              <p className="text-black dark:text-white leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="text-green-500 dark:text-red-500 hover:text-green-600 dark:hover:text-red-600 font-semibold transition-colors duration-300 inline-flex items-center gap-2"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

