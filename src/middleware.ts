import { defineMiddleware } from "astro:middleware";
import { createClient } from "./db/supabase";

const publicRoutes = [
  "/",
  "/auth/login",
  "/auth/callback",
  "/404",
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
        locals.userRole = null;

        // Usuario no autenticado
        if (!user) {
            if (!isPublicRoute) {
                return redirect("/auth/login");
            }

            return next();
        }

        // Usuario autenticado → obtenemos su rol
        const { data: profile, error: profileError } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", user.id)
            .single();

        if (!profileError && profile) {
            locals.userRole = profile.role;
        }

        // Protección del panel admin
        if (url.pathname.startsWith("/admin")) {

            if (
                profileError ||
                !profile ||
                !["admin", "super_admin"].includes(profile.role)
            ) {
                return redirect("/");
            }
        }

        return next();
    }
);