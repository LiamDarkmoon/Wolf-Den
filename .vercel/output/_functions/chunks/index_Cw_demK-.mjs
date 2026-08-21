import { c as createComponent } from './astro-component_qq36F8KY.mjs';
import { p as maybeRenderHead, u as renderTemplate, q as renderComponent } from './entrypoint_C39tklsY.mjs';
import { B as Button, $ as $$Layout } from './button_DjRCqeZL.mjs';
import { c as createClient } from './supabase_DP1_cPNx.mjs';

const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Hero;
  const supabase = createClient({
    request: Astro2.request,
    cookies: Astro2.cookies
  });
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return renderTemplate`${maybeRenderHead()}<div class="hero max-h-162.5" data-astro-cid-bbe6dxrz> ${user ? renderTemplate`<div class="w-full  flex gap-2 items-center justify-between text-xs text-primary" data-astro-cid-bbe6dxrz> <p class="" data-astro-cid-bbe6dxrz>${user?.user_metadata?.full_name}</p> <a href="/auth/logout" class="hover:text-primary-hover" data-astro-cid-bbe6dxrz>Cerrar sesión</a> </div>` : renderTemplate`<a href="/auth/login" class="text-primary hover:text-primary-hover" data-astro-cid-bbe6dxrz>
login con google
</a>`} <h1 class="text-3xl font-bold text-center mt-12.5" data-astro-cid-bbe6dxrz>Bienvenidos a <br data-astro-cid-bbe6dxrz> <span class="text-5xl text-primary" data-astro-cid-bbe6dxrz>Wolf's Den</span></h1> <p class="text-lg italic opacity-80 my-7.5" data-astro-cid-bbe6dxrz>Una forma rapida y sencilla de adentrarte en el mundo de D&D.</p> <div class="flex flex-col  justify-center items-center gap-3" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Button", Button, { "client:load": true, "to": "/characters/creation", "client:component-hydration": "load", "client:component-path": "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/components/button.tsx", "client:component-export": "default", "data-astro-cid-bbe6dxrz": true }, { "default": async ($$result2) => renderTemplate`Crea tu personaje` })} <!-- <Button className="">Crea un objeto</Button> --> </div> <a href="/adventures/league" class="text-primary hover:text-primary mt-6 font-bold py-2 px-4" data-astro-cid-bbe6dxrz> Liga de aventureros </a> <a href="https://chat.whatsapp.com/C4VEVYjHtqI01Z9vVzj0g2" target="_blank" class="text-primary hover:text-primary-hover underline  mt-auto font-bold py-2 px-4 rounded" data-astro-cid-bbe6dxrz> - Unite a la comunidad manija -</a> </div>`;
}, "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ` })}`;
}, "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/pages/index.astro", void 0);

const $$file = "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
