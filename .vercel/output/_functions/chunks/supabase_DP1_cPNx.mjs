import { createServerClient, parseCookieHeader } from '@supabase/ssr';

const supabaseUrl = "https://opmksmqbngmcqlkcgjpf.supabase.co";
const supabasePublishableKey = "sb_publishable_ZbvOtugJIsd-dASzGC15dQ_CZj0YswE";
function createClient({
  request,
  cookies
}) {
  return createServerClient(
    supabaseUrl,
    supabasePublishableKey,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(
            request.headers.get("Cookie") ?? ""
          );
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(
            ({ name, value, options }) => cookies.set(name, value, options)
          );
        }
      }
    }
  );
}

export { createClient as c };
