const missingEnvMessage = (name: string) =>
  `Missing required environment variable: ${name}`;

export function getSupabaseUrl() {
  const value = process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!value) {
    throw new Error(missingEnvMessage("NEXT_PUBLIC_SUPABASE_URL"));
  }

  return value;
}

export function getSupabaseAnonKey() {
  const value = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!value) {
    throw new Error(missingEnvMessage("NEXT_PUBLIC_SUPABASE_ANON_KEY"));
  }

  return value;
}

export function getSupabaseServiceRoleKey() {
  const value = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!value) {
    throw new Error(missingEnvMessage("SUPABASE_SERVICE_ROLE_KEY"));
  }

  return value;
}

export function getAdminEmails() {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}
