/*
# Create bookings table (single-tenant, no auth)

1. New Tables
- `bookings`
  - `id` (uuid, primary key)
  - `name` (text, not null) — client's full name
  - `email` (text, not null) — client's email
  - `phone` (text, not null) — client's phone number
  - `service` (text, not null) — requested service name
  - `date` (text, not null) — preferred date (ISO string)
  - `time` (text, not null) — preferred time slot
  - `notes` (text, nullable) — optional message from client
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `bookings`.
- Allow anon + authenticated INSERT only (public booking form).
- No SELECT/UPDATE/DELETE from the frontend — submissions are write-only
  from the client and managed directly in the Supabase dashboard by staff.
  This keeps personal contact data private from the public internet.

3. Notes
- This is a single-tenant salon site with no sign-in screen, so the anon
  role must be permitted to insert. Without an anon INSERT policy the
  booking form would silently fail.
- No `user_id` column is used because there are no user accounts.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  date text NOT NULL,
  time text NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_booking" ON bookings;
CREATE POLICY "anon_insert_booking"
ON bookings FOR INSERT
TO anon, authenticated
WITH CHECK (true);
