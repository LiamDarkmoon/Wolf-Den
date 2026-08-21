import { c as createComponent } from './astro-component_qq36F8KY.mjs';
import { p as maybeRenderHead, t as renderSlot, u as renderTemplate, j as addAttribute, s as renderHead, q as renderComponent } from './entrypoint_C39tklsY.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="container" class="text-main-text" data-astro-cid-hsp6otuf> <main data-astro-cid-hsp6otuf> ${renderSlot($$result, $$slots["default"])} </main> </div>`;
}, "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/layouts/Main.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/profile-1.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Wolf's Den</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Main", $$Main, { "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}</body></html>`;
}, "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/layouts/Layout.astro", void 0);

let navigateOnServerWarned = false;
async function navigate(href, options) {
  {
    if (!navigateOnServerWarned) {
      const warning = new Error(
        "The view transitions client API was called during a server side render. This may be unintentional as the navigate() function is expected to be called in response to user interactions. Please make sure that your usage is correct."
      );
      warning.name = "Warning";
      console.warn(warning);
      navigateOnServerWarned = true;
    }
    return;
  }
}

function Button({
  onClick,
  children,
  to,
  type,
  secondary,
  size
}) {
  const handleNavigate = (to2) => {
    if (to2) {
      console.log("Navigating to:", to2);
      navigate();
    } else {
      console.log("ups, no se ha proporcionado un destino para la navegación.");
    }
  };
  return /* @__PURE__ */ jsxs("button", { type: type ?? "button", onClick: onClick || (() => handleNavigate(to)), className: `group relative flex items-center justify-center cursor-pointer ${secondary ? "text-main-text" : "text-primary"} transition-transform duration-200 ease-in-out`, children: [
    /* @__PURE__ */ jsx("svg", { className: `bttn ${size === "sm" ? "w-37.5" : size === "md" ? "w-50" : "w-75"} group-hover:scale-105 group-active:scale-95`, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 243.91 76.65", children: /* @__PURE__ */ jsx("path", { className: `${secondary ? "text-main-text group-hover:text-secondary-text group-active:text-main-text" : "text-primary group-hover:text-primary-hover group-active:text-primary"}`, fill: "currentColor", d: "M243.91,38.32l-10.04-10.23V15.39h-8.57v-6.86h-97L119.77,0l-8.54,8.54H15.73v6.86h-5.7v12.43L0,38.06l10.04,10.23v12.11h5.7v5.14H108.66l1.72,1.72,9.38,9.39,9.38-9.39,1.72-1.72h94.43v-5.14h8.57v-11.84l10.04-10.23Zm-10.04,5.95v-11.89l5.83,5.95-5.83,5.95Zm-20.92-32.73h9.35v6.86h8.57v6.88l-3.51-3.24h-9.44l-4.97-5.07v-5.43ZM13.04,18.39h5.7v-6.86h12.39v5.35l-5.05,5.15H15.43l-2.4,2.7v-6.34Zm-3,13.71v11.89l-5.83-5.95,5.83-5.95Zm21.09,30.43h-12.39v-5.14h-5.7v-6.01l2.86,3.23h10.18l5.05,5.15v2.78Zm-3.79-10.93h-10.09l-2.39-2.69-1.82-1.86V29.05l1.87-1.91,1.87-2.1h10.55l6.79-6.92v-6.58h5.91s.96,0,.96,0h1.62l-26.44,26.21,25.62,25.06-7.67,.03v-4.31l-6.79-6.92Zm102.31,10.93l-2.6,2.6-7.26,7.26-7.26-7.26-2.6-2.6-63.85,.25-25.62-25.06L44.34,14.06l2.53-2.52H112.48l7.29-7.29,7.29,7.29h70.48l-.26,.26,26.19,25.94-25.3,25.06-68.54-.26Zm80.32,.3l-7.53-.03,25.31-25.07-26.45-26.2h8.67v6.66l6.71,6.84h9.53l4.68,4.32v17.97l-4.12,4.27h-10.09l-6.71,6.85v4.38Zm20.92-5.44h-8.57v5.14h-9.35v-2.86l4.97-5.07h10.1l2.85-2.95v5.74Z" }) }),
    /* @__PURE__ */ jsx("span", { className: `absolute ${secondary ? "text-main-text group-hover:text-secondary-text group-active:text-main-text" : "text-primary group-hover:text-primary-hover group-active:text-primary"} group-hover:scale-105 group-active:scale-95`, children })
  ] });
}

export { $$Layout as $, Button as B, navigate as n };
