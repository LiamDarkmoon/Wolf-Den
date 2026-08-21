import { c as createComponent } from './astro-component_qq36F8KY.mjs';
import { q as renderComponent, u as renderTemplate, p as maybeRenderHead } from './entrypoint_C39tklsY.mjs';
import { $ as $$Layout, B as Button } from './button_DjRCqeZL.mjs';

const $$League = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-rzg4uqsr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-1/2 flex flex-col items-center justify-center gap-4 p-4" data-astro-cid-rzg4uqsr> <h1 data-astro-cid-rzg4uqsr>Adventurers League</h1> <p data-astro-cid-rzg4uqsr>Bienvenido a la liga de aventureros de los manijas del rol, elije tu mesa para sentarte y refrescarte antes de acercarte al tablon para elegir tu mision</p> <section class="w-full flex flex-col items-center justify-center gap-4 p-4" data-astro-cid-rzg4uqsr> <h2 data-astro-cid-rzg4uqsr>Tablero de Misiones</h2> <article class="board" data-astro-cid-rzg4uqsr> <h2 class="text-2xl font-bold text-center mb-4 text-primary-hover underline" data-astro-cid-rzg4uqsr>Titulo de la mision</h2> <img src="/last-sanctum.png" alt="Descripción de la mision" class="w-full object-cover mb-4 rounded" data-astro-cid-rzg4uqsr> ${renderComponent($$result2, "Button", Button, { "client:load": true, "to": "/adventures/league/mission-details", "client:component-hydration": "load", "client:component-path": "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/components/button.tsx", "client:component-export": "default", "data-astro-cid-rzg4uqsr": true }, { "default": ($$result3) => renderTemplate`Unirse a la mision` })} </article> </section> </div> ` })}`;
}, "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/pages/adventures/league.astro", void 0);

const $$file = "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/pages/adventures/league.astro";
const $$url = "/adventures/league";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$League,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
