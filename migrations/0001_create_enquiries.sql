CREATE TABLE enquiries (
  id TEXT PRIMARY KEY,
  reference TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  move_in TEXT,
  stay TEXT,
  message TEXT,
  language TEXT NOT NULL DEFAULT 'en',
  source TEXT NOT NULL DEFAULT 'website',
  status TEXT NOT NULL DEFAULT 'new',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX enquiries_created_at_idx ON enquiries (created_at DESC);
CREATE INDEX enquiries_status_created_at_idx ON enquiries (status, created_at DESC);
