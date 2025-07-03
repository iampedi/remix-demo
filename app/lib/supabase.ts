import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hmbocnaswkgttoudpuwj.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtYm9jbmFzd2tndHRvdWRwdXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NzQ0NzAsImV4cCI6MjA2NzE1MDQ3MH0.P_xELp7KketTzbopDiP7OU4gWAg1D3D4UTOKudTCngc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
