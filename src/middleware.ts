import { defineMiddleware } from "astro:middleware";
import { createClient } from "./db/supabase";

const publicRoutes = [
  "/",
  "/auth/login",
  "/auth/callback",
];

export const onRequest = defineMiddleware(
  async ({ request, cookies, locals, url, redirect }, next) => {

    const isPublicRoute = publicRoutes.some(
      (route) => url.pathname === route
    );

    const supabase = createClient({
      request,
      cookies,
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    locals.user = user;

    // Si no hay usuario y la ruta es privada
    if (!user && !isPublicRoute) {
      return redirect("/auth/login");
    }

    // Si intenta acceder al admin
    if (url.pathname.startsWith("/admin")) {

      if (!user) {
        return redirect("/auth/login");
      }

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      locals.userRole = profile?.role ?? null;

      if (error || !profile) {
        return redirect("/");
      }

      const userRole = profile.role;

      if (!["admin", "super_admin"].includes(userRole)) {
        return redirect("/");
      }
    }

    return next();
  }
);