import { c as createComponent } from './astro-component_qq36F8KY.mjs';
import { q as renderComponent, u as renderTemplate } from './entrypoint_C39tklsY.mjs';
import { B as Button, n as navigate, $ as $$Layout } from './button_DjRCqeZL.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { createContext, useState, useContext } from 'react';

function InputField({ label, value, onChange, id }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center gap-1.5 mb-5", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: id, className: "font-semibold", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "relative grid place-items-center mt-4", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id,
          value,
          onChange: (e) => onChange(e.target.value),
          className: "p-5 w-75 z-10 active:outline-none focus:outline-none"
        }
      ),
      /* @__PURE__ */ jsx("svg", { className: "absolute text-primary", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 250 70", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M124.64,70.27l-9.19-9.19H38.73l-6.39,6.39-6.39-6.39H6.25v-19.7L0,35.14l6.25-6.25V9.19H25.95l6.39-6.39,6.39,6.39H115.45L124.64,0l9.19,9.19h77.45l6.39-6.39,6.39,6.39h19V28.18l6.95,6.95-6.95,6.95v19h-19l-6.39,6.39-6.39-6.39h-77.45l-9.19,9.19Zm-86.84-11.42H116.38l8.26,8.26,8.26-8.26h79.3l5.46,5.46,5.46-5.46h17.69v-17.69l6.03-6.03-6.03-6.03V11.42h-17.69l-5.46-5.46-5.46,5.46h-79.3l-8.26-8.26-8.26,8.26H37.8l-5.46-5.46-5.46,5.46H8.49V29.81l-5.33,5.33,5.33,5.33v18.39H26.88l5.46,5.46,5.46-5.46Z" }) })
    ] })
  ] });
}

function NameStep() {
  const { character, updateCharacter } = useCharacter();
  return /* @__PURE__ */ jsx(
    InputField,
    {
      label: "Nombre",
      value: character.name,
      onChange: (value) => updateCharacter({ ...character, name: value }),
      id: "name"
    }
  );
}

const barbarian = new Proxy({"src":"/_astro/barbarian.D2KWQsol.png","width":121,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/barbarian.png";
							}
							
							return target[name];
						}
					});

const bard = new Proxy({"src":"/_astro/bard.DgjSSLoa.png","width":121,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/bard.png";
							}
							
							return target[name];
						}
					});

const cleric = new Proxy({"src":"/_astro/cleric.0xvRXlRT.png","width":121,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/cleric.png";
							}
							
							return target[name];
						}
					});

const druid = new Proxy({"src":"/_astro/druid.Cvt9hOCZ.png","width":121,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/druid.png";
							}
							
							return target[name];
						}
					});

const fighter = new Proxy({"src":"/_astro/fighter.BsjwslR6.png","width":121,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/fighter.png";
							}
							
							return target[name];
						}
					});

const monk = new Proxy({"src":"/_astro/monk.tjAx6Fvq.png","width":121,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/monk.png";
							}
							
							return target[name];
						}
					});

const paladin = new Proxy({"src":"/_astro/paladin.Dd6Dp0xp.png","width":121,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/paladin.png";
							}
							
							return target[name];
						}
					});

const ranger = new Proxy({"src":"/_astro/ranger.DJDIZQU1.png","width":121,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/ranger.png";
							}
							
							return target[name];
						}
					});

const rogue = new Proxy({"src":"/_astro/rogue.CAGn98nv.png","width":121,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/rogue.png";
							}
							
							return target[name];
						}
					});

const sorcerer = new Proxy({"src":"/_astro/sorcerer.BlXnZ8md.png","width":121,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/sorcerer.png";
							}
							
							return target[name];
						}
					});

const warlock = new Proxy({"src":"/_astro/warlock.oK2BpVcg.png","width":121,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/warlock.png";
							}
							
							return target[name];
						}
					});

const wizard = new Proxy({"src":"/_astro/wizard.DegOt7iR.png","width":121,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/wizard.png";
							}
							
							return target[name];
						}
					});

const acolyte = new Proxy({"src":"/_astro/acolyte.Dr-ZZP78.png","width":361,"height":222,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/acolyte.png";
							}
							
							return target[name];
						}
					});

const artisan = new Proxy({"src":"/_astro/artisan.D8IyVbXJ.png","width":361,"height":222,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/artisan.png";
							}
							
							return target[name];
						}
					});

const charlatan = new Proxy({"src":"/_astro/charlatan.BJeom73c.png","width":361,"height":222,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/charlatan.png";
							}
							
							return target[name];
						}
					});

const criminal = new Proxy({"src":"/_astro/criminal.C1H88rKI.png","width":361,"height":221,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/criminal.png";
							}
							
							return target[name];
						}
					});

const entertainer = new Proxy({"src":"/_astro/entertainer.DR_4oOik.png","width":361,"height":221,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/entertainer.png";
							}
							
							return target[name];
						}
					});

const farmer = new Proxy({"src":"/_astro/farmer.C9ayGcsV.png","width":361,"height":221,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/farmer.png";
							}
							
							return target[name];
						}
					});

const guard = new Proxy({"src":"/_astro/guard.uJqM3J9G.png","width":361,"height":221,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/guard.png";
							}
							
							return target[name];
						}
					});

const guide = new Proxy({"src":"/_astro/guide.ByC2zszk.png","width":361,"height":221,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/guide.png";
							}
							
							return target[name];
						}
					});

const hermit = new Proxy({"src":"/_astro/hermit.CvPDjXyM.png","width":361,"height":222,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/hermit.png";
							}
							
							return target[name];
						}
					});

const merchant = new Proxy({"src":"/_astro/merchant.ByVyUkjd.png","width":360,"height":222,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/merchant.png";
							}
							
							return target[name];
						}
					});

const noble = new Proxy({"src":"/_astro/noble.DYlYSHbf.png","width":361,"height":222,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/noble.png";
							}
							
							return target[name];
						}
					});

const sage = new Proxy({"src":"/_astro/sage.BLSVEMuG.png","width":360,"height":222,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/sage.png";
							}
							
							return target[name];
						}
					});

const sailor = new Proxy({"src":"/_astro/sailor.BreAAyhU.png","width":361,"height":222,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/sailor.png";
							}
							
							return target[name];
						}
					});

const scribe = new Proxy({"src":"/_astro/scribe.1zb2yB2S.png","width":361,"height":222,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/scribe.png";
							}
							
							return target[name];
						}
					});

const soldier = new Proxy({"src":"/_astro/soldier.BTqsfIQK.png","width":361,"height":222,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/soldier.png";
							}
							
							return target[name];
						}
					});

const wayfarer = new Proxy({"src":"/_astro/wayfarer.BiWpSQV3.png","width":361,"height":222,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/wayfarer.png";
							}
							
							return target[name];
						}
					});

const Classes = {
  barbarian,
  bard,
  cleric,
  druid,
  fighter,
  monk,
  paladin,
  ranger,
  rogue,
  sorcerer,
  warlock,
  wizard
};
const Backgrounds = {
  acolyte,
  artisan,
  charlatan,
  criminal,
  entertainer,
  farmer,
  guard,
  guide,
  hermit,
  merchant,
  noble,
  sage,
  sailor,
  scribe,
  soldier,
  wayfarer
};

function ClassStep$1() {
  const { character, updateCharacter } = useCharacter();
  const handleClassSelect = (className) => {
    updateCharacter({ ...character, class: className });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center text-center mb-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Elije una classe: " }),
      /* @__PURE__ */ jsx("span", { className: "h-8 text-2xl text-primary font-bold mt-2", children: character.class }),
      /* @__PURE__ */ jsx("svg", { className: "text-primary", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 427.81 37.11", fill: "currentColor", children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx("path", { d: "M245.84,4.33c-2.46,.01-5.44,1.4-7.29,3.12-7.08,6.56-14,13.32-20.56,20.4-3.12,3.37-3.9,3.41-7.5-.29-6.15-6.33-12.6-12.39-18.53-18.91-3.24-3.56-6.82-4.57-11.41-4.56-47.33,.1-94.66,.06-141.99,.06l-5.05,1.68,4.97,2.24c46,0,96.62-.07,142.61,.12,2.61,.01,5.85,1.36,7.71,3.19,8.41,8.26,17.01,16.91,25.47,25.73q3.07-3.23,4.32-4.49c7.08-7.05,13.97-14.31,21.31-21.08,2.06-1.9,5.42-3.35,8.2-3.36,47.33-.19,94.66-.12,141.99-.11l5.5-1.83-5.25-2.07c-48.16,.01-96.33-.02-144.49,.18Z" }),
        /* @__PURE__ */ jsx("path", { d: "M224,13.92c-3.28-3.36-6.5-6.67-9.59-9.83-3.33,3.31-6.62,6.56-9.87,9.79,3.2,3.22,6.42,6.46,9.58,9.64,3.43-3.33,6.74-6.55,9.88-9.6Z" }),
        /* @__PURE__ */ jsx("path", { d: "M398.77,6.16c2.66,2.03,5.34,4.07,7.96,6.06,2.85-2.1,5.6-4.12,8.21-6.04-2.72-2.11-5.4-4.2-7.96-6.19-2.77,2.08-5.5,4.13-8.2,6.16Z" }),
        /* @__PURE__ */ jsx("path", { d: "M422.79,2.26c-1.74,1.31-3.46,2.6-5.16,3.88,1.68,1.28,3.36,2.56,5.01,3.82,1.79-1.32,3.53-2.59,5.17-3.8-1.71-1.33-3.4-2.64-5.01-3.89Z" }),
        /* @__PURE__ */ jsx("path", { d: "M12.87,6.19c2.61,1.92,5.36,3.94,8.21,6.04,2.62-2,5.29-4.03,7.96-6.06-2.71-2.03-5.43-4.08-8.2-6.16-2.56,1.99-5.24,4.07-7.96,6.19Z" }),
        /* @__PURE__ */ jsx("path", { d: "M0,6.16c1.64,1.21,3.38,2.48,5.17,3.8,1.65-1.26,3.33-2.54,5.01-3.82-1.7-1.28-3.42-2.57-5.16-3.88C3.4,3.52,1.71,4.83,0,6.16Z" }),
        /* @__PURE__ */ jsx("path", { d: "M118.7,16.8c-21.16,0-42.32,0-63.48,0l-5.2,1.95,4.73,1.9c41.82,0,83.65,0,125.47-.01l6.08-1.94-5.61-1.91c-20.66,0-41.32,0-61.98,0Z" }),
        /* @__PURE__ */ jsx("path", { d: "M311.25,16.8c-21.16,0-42.32,0-63.48,0l-5.2,1.95,4.73,1.9c41.82,0,83.65,0,125.47-.01l6.08-1.94-5.61-1.91c-20.66,0-41.32,0-61.98,0Z" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap max-w-100 max-h-75 justify-center items-center gap-2 overflow-y-scroll", children: Object.entries(Classes).map(([className, classImage]) => /* @__PURE__ */ jsx("div", { className: `border-4 rounded-full cursor-pointer ${character.class === className ? "border-primary" : "border-gray-300"}`, onClick: () => handleClassSelect(className), children: /* @__PURE__ */ jsx("img", { src: classImage.src, alt: className, className: "w-37.5" }) }, className)) })
  ] });
}

function OriginStep() {
  const { character, updateCharacter } = useCharacter();
  const handleOriginSelect = (Origin) => {
    updateCharacter({ ...character, background: Origin });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center text-center mb-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Elije un origen: " }),
      /* @__PURE__ */ jsx("span", { className: "h-8 text-2xl text-primary font-bold mt-2", children: character.background }),
      /* @__PURE__ */ jsx("svg", { className: "text-primary", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 427.81 37.11", fill: "currentColor", children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx("path", { d: "M245.84,4.33c-2.46,.01-5.44,1.4-7.29,3.12-7.08,6.56-14,13.32-20.56,20.4-3.12,3.37-3.9,3.41-7.5-.29-6.15-6.33-12.6-12.39-18.53-18.91-3.24-3.56-6.82-4.57-11.41-4.56-47.33,.1-94.66,.06-141.99,.06l-5.05,1.68,4.97,2.24c46,0,96.62-.07,142.61,.12,2.61,.01,5.85,1.36,7.71,3.19,8.41,8.26,17.01,16.91,25.47,25.73q3.07-3.23,4.32-4.49c7.08-7.05,13.97-14.31,21.31-21.08,2.06-1.9,5.42-3.35,8.2-3.36,47.33-.19,94.66-.12,141.99-.11l5.5-1.83-5.25-2.07c-48.16,.01-96.33-.02-144.49,.18Z" }),
        /* @__PURE__ */ jsx("path", { d: "M224,13.92c-3.28-3.36-6.5-6.67-9.59-9.83-3.33,3.31-6.62,6.56-9.87,9.79,3.2,3.22,6.42,6.46,9.58,9.64,3.43-3.33,6.74-6.55,9.88-9.6Z" }),
        /* @__PURE__ */ jsx("path", { d: "M398.77,6.16c2.66,2.03,5.34,4.07,7.96,6.06,2.85-2.1,5.6-4.12,8.21-6.04-2.72-2.11-5.4-4.2-7.96-6.19-2.77,2.08-5.5,4.13-8.2,6.16Z" }),
        /* @__PURE__ */ jsx("path", { d: "M422.79,2.26c-1.74,1.31-3.46,2.6-5.16,3.88,1.68,1.28,3.36,2.56,5.01,3.82,1.79-1.32,3.53-2.59,5.17-3.8-1.71-1.33-3.4-2.64-5.01-3.89Z" }),
        /* @__PURE__ */ jsx("path", { d: "M12.87,6.19c2.61,1.92,5.36,3.94,8.21,6.04,2.62-2,5.29-4.03,7.96-6.06-2.71-2.03-5.43-4.08-8.2-6.16-2.56,1.99-5.24,4.07-7.96,6.19Z" }),
        /* @__PURE__ */ jsx("path", { d: "M0,6.16c1.64,1.21,3.38,2.48,5.17,3.8,1.65-1.26,3.33-2.54,5.01-3.82-1.7-1.28-3.42-2.57-5.16-3.88C3.4,3.52,1.71,4.83,0,6.16Z" }),
        /* @__PURE__ */ jsx("path", { d: "M118.7,16.8c-21.16,0-42.32,0-63.48,0l-5.2,1.95,4.73,1.9c41.82,0,83.65,0,125.47-.01l6.08-1.94-5.61-1.91c-20.66,0-41.32,0-61.98,0Z" }),
        /* @__PURE__ */ jsx("path", { d: "M311.25,16.8c-21.16,0-42.32,0-63.48,0l-5.2,1.95,4.73,1.9c41.82,0,83.65,0,125.47-.01l6.08-1.94-5.61-1.91c-20.66,0-41.32,0-61.98,0Z" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap max-w-100 max-h-75 justify-center items-center gap-2 overflow-y-scroll", children: Object.entries(Backgrounds).map(([backgroundName, backgroundImage]) => /* @__PURE__ */ jsx("div", { className: `border-4 rounded-sm cursor-pointer ${character.background === backgroundName ? "border-primary" : "border-gray-300"}`, onClick: () => handleOriginSelect(backgroundName), children: /* @__PURE__ */ jsx("img", { src: backgroundImage.src, alt: backgroundName, className: "" }) }, backgroundName)) })
  ] });
}

const aasimar = new Proxy({"src":"/_astro/aasimar.CeGejFlq.png","width":301,"height":301,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/aasimar.png";
							}
							
							return target[name];
						}
					});

const dragonborn = new Proxy({"src":"/_astro/dragonborn.DXbMHbTG.png","width":301,"height":301,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/dragonborn.png";
							}
							
							return target[name];
						}
					});

const dwarf = new Proxy({"src":"/_astro/dwarf.DlhHqmh-.png","width":301,"height":301,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/dwarf.png";
							}
							
							return target[name];
						}
					});

const elf = new Proxy({"src":"/_astro/elf.BSS8cyJw.png","width":301,"height":301,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/elf.png";
							}
							
							return target[name];
						}
					});

const gnome = new Proxy({"src":"/_astro/gnome.Cqxo-Qf4.png","width":301,"height":301,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/gnome.png";
							}
							
							return target[name];
						}
					});

const halfling = new Proxy({"src":"/_astro/halfling.D95gh9wI.png","width":301,"height":301,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/halfling.png";
							}
							
							return target[name];
						}
					});

const human = new Proxy({"src":"/_astro/human.4mvphw7Q.png","width":301,"height":301,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/human.png";
							}
							
							return target[name];
						}
					});

const orc = new Proxy({"src":"/_astro/orc.C8lzhb9X.png","width":301,"height":301,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/orc.png";
							}
							
							return target[name];
						}
					});

const tiefling = new Proxy({"src":"/_astro/tiefling.D22umeUY.png","width":301,"height":301,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/assets/tiefling.png";
							}
							
							return target[name];
						}
					});

const species = {
  aasimar,
  dragonborn,
  dwarf,
  elf,
  gnome,
  /* goliath, */
  halfling,
  human,
  orc,
  tiefling
};

function SpecieStep() {
  const { character, updateCharacter } = useCharacter();
  const handleSpecieSelect = (Specie) => {
    updateCharacter({ ...character, species: Specie });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center max-w-screen px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center text-center mb-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Elije una especie: " }),
      /* @__PURE__ */ jsx("span", { className: "h-8 text-2xl text-primary font-bold mt-2", children: character.species }),
      /* @__PURE__ */ jsx("svg", { className: "text-primary", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 427.81 37.11", fill: "currentColor", children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx("path", { d: "M245.84,4.33c-2.46,.01-5.44,1.4-7.29,3.12-7.08,6.56-14,13.32-20.56,20.4-3.12,3.37-3.9,3.41-7.5-.29-6.15-6.33-12.6-12.39-18.53-18.91-3.24-3.56-6.82-4.57-11.41-4.56-47.33,.1-94.66,.06-141.99,.06l-5.05,1.68,4.97,2.24c46,0,96.62-.07,142.61,.12,2.61,.01,5.85,1.36,7.71,3.19,8.41,8.26,17.01,16.91,25.47,25.73q3.07-3.23,4.32-4.49c7.08-7.05,13.97-14.31,21.31-21.08,2.06-1.9,5.42-3.35,8.2-3.36,47.33-.19,94.66-.12,141.99-.11l5.5-1.83-5.25-2.07c-48.16,.01-96.33-.02-144.49,.18Z" }),
        /* @__PURE__ */ jsx("path", { d: "M224,13.92c-3.28-3.36-6.5-6.67-9.59-9.83-3.33,3.31-6.62,6.56-9.87,9.79,3.2,3.22,6.42,6.46,9.58,9.64,3.43-3.33,6.74-6.55,9.88-9.6Z" }),
        /* @__PURE__ */ jsx("path", { d: "M398.77,6.16c2.66,2.03,5.34,4.07,7.96,6.06,2.85-2.1,5.6-4.12,8.21-6.04-2.72-2.11-5.4-4.2-7.96-6.19-2.77,2.08-5.5,4.13-8.2,6.16Z" }),
        /* @__PURE__ */ jsx("path", { d: "M422.79,2.26c-1.74,1.31-3.46,2.6-5.16,3.88,1.68,1.28,3.36,2.56,5.01,3.82,1.79-1.32,3.53-2.59,5.17-3.8-1.71-1.33-3.4-2.64-5.01-3.89Z" }),
        /* @__PURE__ */ jsx("path", { d: "M12.87,6.19c2.61,1.92,5.36,3.94,8.21,6.04,2.62-2,5.29-4.03,7.96-6.06-2.71-2.03-5.43-4.08-8.2-6.16-2.56,1.99-5.24,4.07-7.96,6.19Z" }),
        /* @__PURE__ */ jsx("path", { d: "M0,6.16c1.64,1.21,3.38,2.48,5.17,3.8,1.65-1.26,3.33-2.54,5.01-3.82-1.7-1.28-3.42-2.57-5.16-3.88C3.4,3.52,1.71,4.83,0,6.16Z" }),
        /* @__PURE__ */ jsx("path", { d: "M118.7,16.8c-21.16,0-42.32,0-63.48,0l-5.2,1.95,4.73,1.9c41.82,0,83.65,0,125.47-.01l6.08-1.94-5.61-1.91c-20.66,0-41.32,0-61.98,0Z" }),
        /* @__PURE__ */ jsx("path", { d: "M311.25,16.8c-21.16,0-42.32,0-63.48,0l-5.2,1.95,4.73,1.9c41.82,0,83.65,0,125.47-.01l6.08-1.94-5.61-1.91c-20.66,0-41.32,0-61.98,0Z" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap max-w-100 max-h-75 justify-center items-center gap-2 overflow-y-scroll", children: Object.entries(species).map(([specieName, specieImage]) => /* @__PURE__ */ jsx("div", { className: `border-4 rounded-full cursor-pointer ${character.species === specieName ? "border-primary" : "border-gray-300"}`, onClick: () => handleSpecieSelect(specieName), children: /* @__PURE__ */ jsx("img", { src: specieImage.src, alt: specieName, className: "size-71" }) }, specieName)) })
  ] });
}

const standardArray = [15, 14, 13, 12, 10, 8];
function ClassStep() {
  const { character, updateCharacter, nextStep } = useCharacter();
  const currentScoreIndex = Object.values(character.abilities).filter((score) => score !== null).length;
  const currentScore = standardArray[currentScoreIndex];
  const isCompleted = Object.values(character.abilities).every((score) => score !== null);
  const handleStatSelect = (ability) => {
    if (currentScore == null) return;
    updateCharacter({
      abilities: {
        ...character.abilities,
        [ability]: currentScore
      }
    });
    if (currentScoreIndex === standardArray.length - 1) {
      nextStep();
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center text-center mb-4", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-xl font-semibold", children: [
        !isCompleted ? "Distribuye tus habiliades" : "Tus puntuaciones",
        " "
      ] }),
      /* @__PURE__ */ jsx("svg", { className: "text-primary", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 427.81 37.11", fill: "currentColor", children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx("path", { d: "M245.84,4.33c-2.46,.01-5.44,1.4-7.29,3.12-7.08,6.56-14,13.32-20.56,20.4-3.12,3.37-3.9,3.41-7.5-.29-6.15-6.33-12.6-12.39-18.53-18.91-3.24-3.56-6.82-4.57-11.41-4.56-47.33,.1-94.66,.06-141.99,.06l-5.05,1.68,4.97,2.24c46,0,96.62-.07,142.61,.12,2.61,.01,5.85,1.36,7.71,3.19,8.41,8.26,17.01,16.91,25.47,25.73q3.07-3.23,4.32-4.49c7.08-7.05,13.97-14.31,21.31-21.08,2.06-1.9,5.42-3.35,8.2-3.36,47.33-.19,94.66-.12,141.99-.11l5.5-1.83-5.25-2.07c-48.16,.01-96.33-.02-144.49,.18Z" }),
        /* @__PURE__ */ jsx("path", { d: "M224,13.92c-3.28-3.36-6.5-6.67-9.59-9.83-3.33,3.31-6.62,6.56-9.87,9.79,3.2,3.22,6.42,6.46,9.58,9.64,3.43-3.33,6.74-6.55,9.88-9.6Z" }),
        /* @__PURE__ */ jsx("path", { d: "M398.77,6.16c2.66,2.03,5.34,4.07,7.96,6.06,2.85-2.1,5.6-4.12,8.21-6.04-2.72-2.11-5.4-4.2-7.96-6.19-2.77,2.08-5.5,4.13-8.2,6.16Z" }),
        /* @__PURE__ */ jsx("path", { d: "M422.79,2.26c-1.74,1.31-3.46,2.6-5.16,3.88,1.68,1.28,3.36,2.56,5.01,3.82,1.79-1.32,3.53-2.59,5.17-3.8-1.71-1.33-3.4-2.64-5.01-3.89Z" }),
        /* @__PURE__ */ jsx("path", { d: "M12.87,6.19c2.61,1.92,5.36,3.94,8.21,6.04,2.62-2,5.29-4.03,7.96-6.06-2.71-2.03-5.43-4.08-8.2-6.16-2.56,1.99-5.24,4.07-7.96,6.19Z" }),
        /* @__PURE__ */ jsx("path", { d: "M0,6.16c1.64,1.21,3.38,2.48,5.17,3.8,1.65-1.26,3.33-2.54,5.01-3.82-1.7-1.28-3.42-2.57-5.16-3.88C3.4,3.52,1.71,4.83,0,6.16Z" }),
        /* @__PURE__ */ jsx("path", { d: "M118.7,16.8c-21.16,0-42.32,0-63.48,0l-5.2,1.95,4.73,1.9c41.82,0,83.65,0,125.47-.01l6.08-1.94-5.61-1.91c-20.66,0-41.32,0-61.98,0Z" }),
        /* @__PURE__ */ jsx("path", { d: "M311.25,16.8c-21.16,0-42.32,0-63.48,0l-5.2,1.95,4.73,1.9c41.82,0,83.65,0,125.47-.01l6.08-1.94-5.61-1.91c-20.66,0-41.32,0-61.98,0Z" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "text-6xl text-primary font-bold", children: currentScore }) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap max-w-100  h-62.5 justify-center items-center gap-2", children: !isCompleted ? Object.entries(character.abilities).filter(([, score]) => score === null).map(([ability]) => /* @__PURE__ */ jsx("div", { className: `w-29 p-2 border-4 rounded-sm cursor-pointer border-gray-300 hover:text-primary hover:border-primary`, onClick: () => handleStatSelect(ability), children: /* @__PURE__ */ jsx("span", { className: "w-15 text-2xl font-semibold", children: ability }) }, ability)) : Object.entries(character.abilities).map(([ability, score]) => /* @__PURE__ */ jsxs("div", { className: `w-29 p-2 border-4 rounded-sm cursor-pointer border-gray-300 hover:text-primary hover:border-primary`, onClick: () => handleStatSelect(ability), children: [
      /* @__PURE__ */ jsxs("span", { className: "w-15 text-2xl font-semibold", children: [
        ability,
        " |"
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "w-15 text-2xl font-semibold", children: [
        " ",
        score
      ] })
    ] }, ability)) })
  ] });
}

const steps = [
  {
    id: "Class",
    component: ClassStep$1
  },
  {
    id: "Origin",
    component: OriginStep
  },
  {
    id: "Specie",
    component: SpecieStep
  },
  {
    id: "Abilities",
    component: ClassStep
  },
  {
    id: "Name",
    component: NameStep
  }
];
function CharacterProvider({ children }) {
  const initialCharacter = {
    name: "",
    species: "aasimar",
    background: "soldier",
    abilities: {
      str: null,
      dex: null,
      con: null,
      int: null,
      wis: null,
      cha: null
    }
  };
  const [character, setCharacter] = useState(initialCharacter);
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];
  const CurrentStep = step.component;
  const updateCharacter = (values) => {
    setCharacter((prev) => ({
      ...prev,
      ...values
    }));
  };
  const nextStep = () => {
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  };
  const previousStep = () => {
    setStepIndex((i) => Math.max(i - 1, 0));
  };
  const toStep = (stepIndex2) => {
    setStepIndex(stepIndex2);
  };
  const resetCharacter = () => {
    setCharacter(initialCharacter);
    setStepIndex(0);
  };
  return /* @__PURE__ */ jsx(CharacterContext.Provider, { value: { character, stepIndex, toStep, CurrentStep, nextStep, previousStep, updateCharacter, resetCharacter }, children });
}
const CharacterContext = createContext(null);

function useCharacter() {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("useCharacter debe usarse dentro de CharacterProvider");
  }
  return context;
}

function ProfileFrame(props) {
  return /* @__PURE__ */ jsx("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 93.34 93.33", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M80.17,59.98l13.17-12.98-13.17-13.35V13.17h-20.19L47,0l-13.35,13.17H13.17v20.19L0,46.34l13.17,13.35v20.47h20.19l12.98,13.17,13.35-13.17h20.47v-20.19Zm10.34-13l-10.34,10.2v-4.97l5.53-5.53-5.53-5.53v-4.64l10.34,10.49ZM16.17,59.89v-8.93l-4.29-4.29,4.29-4.29v-9.17l5.53-5.45,.04-6.36,6.36,.04,5.34-5.27h8.93l4.29-4.29,4.29,4.29h9.17l5.45,5.53,6.36,.04-.04,6.36,5.27,5.34v8.93l4.29,4.29-4.29,4.29v9.17l-5.53,5.45-.04,6.36-6.36-.04-5.34,5.27h-8.93l-4.29,4.29-4.29-4.29h-9.17l-5.45-5.53-6.36-.04,.04-6.36-5.27-5.34ZM77.17,16.17v14.43l-3.26-3.31,.05-7.53-7.53-.05-3.49-3.54h14.23ZM46.98,2.83l10.2,10.34h-4.97l-5.53-5.53-5.53,5.53h-4.64L46.98,2.83Zm-30.81,13.34h14.43l-3.31,3.26-7.53-.05-.05,7.53-3.54,3.49v-14.23ZM2.83,46.36l10.34-10.2v4.97l-5.53,5.53,5.53,5.53v4.64L2.83,46.36Zm13.34,30.81v-14.43l3.26,3.31-.05,7.53,7.53,.05,3.49,3.54h-14.23Zm30.19,13.34l-10.19-10.34h4.97l5.53,5.53,5.53-5.53h4.64l-10.49,10.34Zm16.38-13.34l3.31-3.26,7.53,.05,.05-7.53,3.54-3.49v14.23h-14.43Z" }) });
}

function Avatar({ avatar }) {
  const { character } = useCharacter();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative group grid place-items-center", children: [
      /* @__PURE__ */ jsx(ProfileFrame, { className: "w-40 text-primary group-hover:text-primary-hover transition-all duration-300" }),
      avatar && /* @__PURE__ */ jsx(
        "img",
        {
          src: avatar ? Classes[avatar].src : species["human"].src,
          alt: avatar,
          className: "absolute w-25 rounded-full"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("span", { className: "text-primary-hover h-5", children: character.name })
  ] });
}

function CharacterForm() {
  const { character, stepIndex, toStep, CurrentStep, nextStep, previousStep } = useCharacter();
  const handleNextStep = () => {
    if (stepIndex === 4) {
      toStep(0);
    } else {
      nextStep();
    }
  };
  const handlePrevStep = () => {
    if (stepIndex === 0) {
      navigate();
    } else {
      previousStep();
    }
  };
  return /* @__PURE__ */ jsxs("form", { className: "relative flex flex-col justify-center gap-3", children: [
    /* @__PURE__ */ jsx(Avatar, { avatar: character?.class ? character?.class : "druid" }),
    /* @__PURE__ */ jsx(CurrentStep, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-3", children: [
      /* @__PURE__ */ jsx(Button, { size: "sm", onClick: handleNextStep, children: "Siguiente" }),
      /* @__PURE__ */ jsx(Button, { secondary: true, size: "sm", onClick: handlePrevStep, children: "Anterior" })
    ] })
  ] });
}

function CharacterCreator() {
  return /* @__PURE__ */ jsx(CharacterProvider, { children: /* @__PURE__ */ jsx(CharacterForm, {}) });
}

const $$Creation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CharacterCreator", CharacterCreator, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/components/CharacterCreator/CharacterCreator.tsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/pages/characters/creation.astro", void 0);

const $$file = "C:/Users/Liam Darkmoon/Desktop/Projects/Wolf-Den/src/pages/characters/creation.astro";
const $$url = "/characters/creation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Creation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
