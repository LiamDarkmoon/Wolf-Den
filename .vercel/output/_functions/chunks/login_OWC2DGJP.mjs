import { c as createClient } from './supabase_DP1_cPNx.mjs';

const GET = async ({ request, cookies, redirect }) => {
  const supabase = createClient({
    request,
    cookies
  });
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent"
      },
      redirectTo: "http://localhost:4321/auth/callback"
    }
  });
  if (error) {
    return new Response(error.message, {
      status: 500
    });
  }
  if (!data.url) {
    return new Response("No OAuth URL returned", {
      status: 500
    });
  }
  return redirect(data.url);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
