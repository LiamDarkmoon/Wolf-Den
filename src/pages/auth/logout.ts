import type { APIRoute } from "astro";
import { createClient } from "../../db/supabase";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const supabase = createClient({
    request,
    cookies,
  });

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error al cerrar sesión:", error);
    return new Response("Error al cerrar sesión", {
      status: 500,
    });
  }

  return redirect("/");
};