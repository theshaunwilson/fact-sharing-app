import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://zizotepfqlxkyqckaduk.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppem90ZXBmcWx4a3lxY2thZHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNTI4MjgsImV4cCI6MjAzOTgyODgyOH0.jK_khlyG_dCjr6IhsPLeKIeywlKI5VER4bE5SteleWQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
