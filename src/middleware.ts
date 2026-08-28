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
      error,
    } = await supabase.auth.getUser();

    

    locals.user = user;

    if (!user && !isPublicRoute) {
      return redirect("/auth/login");
    }

    return next();
  }
);