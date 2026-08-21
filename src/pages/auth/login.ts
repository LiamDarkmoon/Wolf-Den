import type { APIRoute } from "astro";
import { createClient } from "../../db/supabase";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const supabase = createClient({
    request,
    cookies,
  });

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo: new URL("/auth/callback", request.url).toString(),
    },
  });

  if (error) {
    return new Response(error.message, {
      status: 500,
    });
  }

  if (!data.url) {
    return new Response("No OAuth URL returned", {
      status: 500,
    });
  }

  return redirect(data.url);
};