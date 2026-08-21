import { defineMiddleware } from "astro:middleware";
import { createClient } from "./db/supabase";

export const onRequest = defineMiddleware(
  async ({ request, cookies, locals, url }, next) => {

    if (
      url.pathname === "/auth/login" ||
      url.pathname === "/auth/callback"
    ) {
      return next();
    }

    const supabase = createClient({
      request,
      cookies,
    });

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    locals.user = user;

    return next();
  }
);