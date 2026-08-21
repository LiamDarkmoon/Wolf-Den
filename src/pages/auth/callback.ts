import type { APIRoute } from "astro";
import { createClient } from "../../db/supabase";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return new Response("Missing code", {
      status: 400,
    });
  }

  const supabase = createClient({
    request,
    cookies,
  });

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error(error);

    return new Response(error.message, {
      status: 500,
    });
  }

  return redirect("/");
};