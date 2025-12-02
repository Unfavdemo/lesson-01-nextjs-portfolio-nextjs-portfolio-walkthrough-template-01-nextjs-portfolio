// Test database connection script
// Run with: node scripts/test-db.js

import { neon } from '@neondatabase/serverless'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env') })

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  console.error('❌ DATABASE_URL is not set in .env file')
  process.exit(1)
}

if (DATABASE_URL.includes('username:password@host')) {
  console.error('❌ DATABASE_URL appears to have placeholder values')
  console.error('Please replace with your actual Neon connection string')
  process.exit(1)
}

console.log('✅ DATABASE_URL found')
console.log('Testing connection...\n')

const sql = neon(DATABASE_URL)

async function testConnection() {
  try {
    // Test basic connection
    const result = await sql`SELECT NOW() as current_time`
    console.log('✅ Database connection successful!')
    console.log('Current database time:', result[0].current_time)
    
    // Check if table exists
    const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'contact_submissions'
      )
    `
    
    if (tableCheck[0].exists) {
      console.log('✅ contact_submissions table exists')
      
      // Count existing records
      const count = await sql`SELECT COUNT(*) as count FROM contact_submissions`
      console.log(`📊 Current submissions: ${count[0].count}`)
    } else {
      console.log('❌ contact_submissions table does NOT exist')
      console.log('\nPlease run the SQL from lib/schema.sql in your Neon SQL Editor')
    }
    
  } catch (error) {
    console.error('❌ Database connection failed:')
    console.error(error.message)
    
    if (error.message.includes('password authentication failed')) {
      console.error('\n💡 Check that your DATABASE_URL has the correct password')
    } else if (error.message.includes('does not exist')) {
      console.error('\n💡 Check that your DATABASE_URL points to the correct database')
    } else if (error.message.includes('getaddrinfo ENOTFOUND')) {
      console.error('\n💡 Check that your DATABASE_URL has the correct host')
    }
    
    process.exit(1)
  }
}

testConnection()

