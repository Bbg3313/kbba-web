import { cache } from "react";
import { getAdminEmails } from "@/lib/supabase/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export function isAdminEmail(email: string | null | undefined) {
  if (!email) {
    return false;
  }

  return getAdminEmails().includes(email.trim().toLowerCase());
}

export const getAdminSession = cache(async () => {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return {
    user,
    isAdmin: isAdminEmail(user?.email),
  };
});
