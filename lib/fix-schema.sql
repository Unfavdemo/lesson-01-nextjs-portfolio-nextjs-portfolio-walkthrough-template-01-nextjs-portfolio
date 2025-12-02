-- Fix schema: Drop and recreate table with primary key
-- This ensures the table has a primary key for Neon's interface

-- Drop the table if it exists (THIS WILL DELETE ALL DATA)
DROP TABLE IF EXISTS contact_submissions;

-- Create table with primary key
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

