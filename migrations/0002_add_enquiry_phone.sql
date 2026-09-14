-- Existing enquiries retain NULL; phone capture is optional.
ALTER TABLE enquiries ADD COLUMN phone TEXT;
