import { c as createClient } from './supabase_DP1_cPNx.mjs';

const GET = async ({ request, cookies, redirect }) => {
  const supabase = createClient({
    request,
    cookies
  });
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error al cerrar sesión:", error);
    return new Response("Error al cerrar sesión", {
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
