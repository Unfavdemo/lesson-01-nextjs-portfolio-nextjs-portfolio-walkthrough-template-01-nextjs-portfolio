import { neon } from '@neondatabase/serverless'

let sql = null

function getSql() {
  if (sql) return sql

  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set. Please add it to your .env.local file.')
  }

  // Validate DATABASE_URL format
  const dbUrl = process.env.DATABASE_URL
  if (!dbUrl.startsWith('postgresql://') && !dbUrl.startsWith('postgres://')) {
    throw new Error('DATABASE_URL must start with postgresql:// or postgres://')
  }

  // Configure Neon - using default settings which work best with Next.js
  sql = neon(dbUrl)
  
  return sql
}

export default getSql

