import { c as createClient } from './supabase_DP1_cPNx.mjs';

const GET = async ({ request, cookies, redirect }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  if (!code) {
    return new Response("Missing code", {
      status: 400
    });
  }
  const supabase = createClient({
    request,
    cookies
  });
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    console.error(error);
    return new Response(error.message, {
      status: 500
    });
  }
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
