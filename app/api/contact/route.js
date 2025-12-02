import { NextResponse } from 'next/server'
import getSql from '../../../lib/db'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Try to save to database if configured
    let dbConfigured = false
    try {
      const sql = getSql()
      if (sql && process.env.DATABASE_URL) {
        dbConfigured = true
        try {
          await sql`
            INSERT INTO contact_submissions (name, email, subject, message)
            VALUES (${name}, ${email}, ${subject || null}, ${message})
          `
          
          console.log('Contact form submission saved to database:', {
            name,
            email,
            subject,
            timestamp: new Date().toISOString()
          })
        } catch (dbError) {
          console.error('Database error:', dbError)
          // Continue even if database save fails - we'll still return success
          // This allows the form to work even if database isn't fully set up
        }
      }
    } catch (dbConnectionError) {
      // Database not configured - that's okay, we'll just log the submission
      console.log('Database not configured, logging contact form submission:', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      })
    }

    // Return success response
    return NextResponse.json(
      { 
        message: 'Thank you for your message! I will reply promptly within 24 hours.',
        success: true 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    console.error('Error stack:', error.stack)
    console.error('Error message:', error.message)
    
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid request format.' },
        { status: 400 }
      )
    }
    
    // In development, show more details
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? `Failed to process your message: ${error.message}` 
      : 'Failed to process your message. Please try again later.'
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Please use POST.' },
    { status: 405 }
  )
}

