-- Safe migration: Add primary key if missing (preserves existing data)
-- Use this if you have existing data you want to keep

-- Check if primary key exists and add it if missing
DO $$
BEGIN
  -- Check if the table exists
  IF EXISTS (SELECT FROM information_schema.tables 
             WHERE table_schema = 'public' 
             AND table_name = 'contact_submissions') THEN
    
    -- Check if primary key constraint exists
    IF NOT EXISTS (
      SELECT 1 FROM pg_constraint 
      WHERE conrelid = 'contact_submissions'::regclass 
      AND contype = 'p'
    ) THEN
      -- Add id column if it doesn't exist
      IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'contact_submissions' 
        AND column_name = 'id'
      ) THEN
        ALTER TABLE contact_submissions 
        ADD COLUMN id SERIAL PRIMARY KEY;
      ELSE
        -- Column exists but no primary key, add it
        ALTER TABLE contact_submissions 
        ADD PRIMARY KEY (id);
      END IF;
    END IF;
    
  ELSE
    -- Table doesn't exist, create it with primary key
    CREATE TABLE contact_submissions (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(255),
      message TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
    
    CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
    CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
  END IF;
END $$;

