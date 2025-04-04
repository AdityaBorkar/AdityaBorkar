import { c as createComponent, u as unescapeHTML, s as spreadAttributes, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderComponent, b as renderSlot, d as createAstro, h as renderScript, t as createTransitionScope, k as renderTransition } from './astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import 'clsx';
import { cva } from 'class-variance-authority';
import { $ as $$RootLayout } from './RootLayout_0Md_7O_Y.mjs';
/* empty css                         */
/* empty css                         */

const SOCIALS = {
  email: "hello@adityab.com",
  // discord: 'adityab#0001',
  x: "https://x.com/adityab_tech",
  github: "https://github.com/AdityaBorkar",
  linkedin: "https://linkedin.com/in/adityab_tech"
};
const PRICING = "35-60";

const countersByPage = /* @__PURE__ */ new WeakMap();
function createSvgComponent({ meta, attributes, children }) {
  const renderedIds = /* @__PURE__ */ new WeakMap();
  const Component = createComponent((result, props) => {
    let counter = countersByPage.get(result) ?? 0;
    const {
      title: titleProp,
      viewBox,
      mode,
      ...normalizedProps
    } = normalizeProps(attributes, props);
    const title = titleProp ? unescapeHTML(`<title>${titleProp}</title>`) : "";
    if (mode === "sprite") {
      let symbol = "";
      let id = renderedIds.get(result);
      if (!id) {
        countersByPage.set(result, ++counter);
        id = `a:${counter}`;
        symbol = unescapeHTML(`<symbol${spreadAttributes({ viewBox, id })}>${children}</symbol>`);
        renderedIds.set(result, id);
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${title}${symbol}<use href="#${id}" /></svg>`;
    }
    return renderTemplate`<svg${spreadAttributes({ viewBox, ...normalizedProps })}>${title}${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = { role: "img" };
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, { size, ...props }) {
  if (size !== undefined && props.width === undefined && props.height === undefined) {
    props.height = size;
    props.width = size;
  }
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const GitHubIcon = createSvgComponent({"meta":{"src":"/_astro/GitHub.CUAFFZZY.svg","width":24,"height":24,"format":"svg"},"attributes":{"mode":"inline","width":"24","height":"24","viewBox":"0 0 24 24","style":"transform: ;msFilter:;"},"children":"\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z\"></path>\n"});

const GitHub = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: GitHubIcon
}, Symbol.toStringTag, { value: 'Module' }));

const LinkedinIcon = createSvgComponent({"meta":{"src":"/_astro/LinkedIn.Bex3wH_w.svg","width":24,"height":24,"format":"svg"},"attributes":{"mode":"inline","width":"24","height":"24","viewBox":"0 0 24 24","style":"transform: ;msFilter:;"},"children":"\n    <circle cx=\"4.983\" cy=\"5.009\" r=\"2.188\"></circle>\n    <path =\"\" d=\"M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z\"></path>\n"});

const LinkedIn = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: LinkedinIcon
}, Symbol.toStringTag, { value: 'Module' }));

const RefreshIcon = createSvgComponent({"meta":{"src":"/_astro/Refresh.CGGULuiE.svg","width":256,"height":256,"format":"svg"},"attributes":{"mode":"inline","viewBox":"0 0 256 256"},"children":"\n    <rect width=\"256\" height=\"256\" fill=\"none\" />\n    <polyline points=\"168 96 216 96 216 48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" />\n    <path d=\"M216,96,187.72,67.72A88,88,0,0,0,64,67\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" />\n    <polyline points=\"88 160 40 160 40 208\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" />\n    <path d=\"M40,160l28.28,28.28A88,88,0,0,0,192,189\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" />\n"});

const Refresh = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: RefreshIcon
}, Symbol.toStringTag, { value: 'Module' }));

const TwitterIcon = createSvgComponent({"meta":{"src":"/_astro/Twitter.BygiC42Y.svg","width":24,"height":24,"format":"svg"},"attributes":{"mode":"inline","width":"24","height":"24","viewBox":"0 0 24 24","style":"transform: ;msFilter:;"},"children":"\n    <path =\"\" d=\"M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z\"></path>\n"});

const Twitter = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: TwitterIcon
}, Symbol.toStringTag, { value: 'Module' }));

const RoundMessage = createSvgComponent({"meta":{"src":"/_astro/RoundMessage.BthED8nd.svg","width":24,"height":24,"format":"svg"},"attributes":{"mode":"inline","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","class":"lucide lucide-message-circle-icon lucide-message-circle"},"children":"\n    <path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\" />\n"});

const RoundMessage$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: RoundMessage
}, Symbol.toStringTag, { value: 'Module' }));

const $$AiAssistant = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button${addAttribute([
    "fixed z-40 bottom-4 right-4 px-3 shadow-lg py-3 rounded-full border border-border/20 bg-background text-text-tertiary cursor-pointer",
    "md:bottom-8 md:right-8 md:px-6 md:z-50 md:hover:scale-110",
    false
  ], "class:list")} onclick="document.getElementById('chat-dialog').showModal()"> <!-- TODO: EXPERIMENT: Morph with Bot.svg --> ${renderComponent($$result, "RoundMessage", RoundMessage, { "class": "inline-block size-5 -mt-1" })} <span class="max-md:hidden">Ask AI</span> </button> ${renderComponent($$result, "Chat", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/chat", "client:component-export": "default" })}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/AiAssistant.astro", undefined);

const $$Astro$3 = createAstro();
const buttonVariants = cva("rounded-xl font-semibold text-background", {
  // TODO: Work on hover effects
  // TODO: Add ring offset for primary button
  variants: {
    variant: {
      primary: "bg-text-secondary text-bg-primary",
      // "bg-gradient-to-b from-text-secondary to-text-primary hover:bg-gradient-to-t",
      secondary: "border border-border/20 bg-background text-text-primary"
    },
    size: {
      lg: "px-6 py-3 text-base",
      md: "px-4 py-3 text-sm",
      sm: "px-2 py-2 text-xs"
    }
  }
});
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const { type = "button", classList, ...variantProps } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute([buttonVariants({ ...variantProps }), classList], "class:list")}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/ui/Button.astro", undefined);

const $$Astro$2 = createAstro();
const $$FooterLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FooterLink;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(href.startsWith("/") ? undefined : "_blank", "target")} class="mt-2 block w-fit shrink-0 hover:text-text-primary text-text-secondary"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/layouts/LandingLayout/FooterLink.astro", undefined);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$GenerativeArt = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- CSS Paint API Polyfill --><script type="module" src="https://unpkg.com/css-paint-polyfill"><\/script> ', '<div class="worklet-canvas bg-background" style="background-image: paint(bauhausPattern);" data-astro-cid-kdwchdjt></div> <script>\n    document.addEventListener("DOMContentLoaded", () => {\n        if (CSS && CSS.paintWorklet) {\n            CSS.paintWorklet.addModule("/css-worklet/bauhaus-pattern.js");\n            document.documentElement.style.setProperty(\n                "--pattern-seed",\n                String(Math.floor(Math.random() * 10000)),\n            );\n        } else {\n            console.warn("CSS Paint API is not supported in this browser");\n        }\n    });\n<\/script> '])), maybeRenderHead());
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/layouts/LandingLayout/GenerativeArt.astro", undefined);

const MenuIcon = createSvgComponent({"meta":{"src":"/_astro/Menu.CCFx13Uf.svg","width":24,"height":24,"format":"svg"},"attributes":{"mode":"inline","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},"children":"\n    <line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\" />\n    <line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\" />\n    <line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\" />\n"});

const Menu = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: MenuIcon
}, Symbol.toStringTag, { value: 'Module' }));

const MoonIcon = createSvgComponent({"meta":{"src":"/_astro/Moon.L6SnJkyJ.svg","width":256,"height":256,"format":"svg"},"attributes":{"mode":"inline","viewBox":"0 0 256 256"},"children":"\n    <rect width=\"256\" height=\"256\" fill=\"none\" />\n    <path d=\"M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" />\n"});

const Moon = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: MoonIcon
}, Symbol.toStringTag, { value: 'Module' }));

const SunIcon = createSvgComponent({"meta":{"src":"/_astro/Sun.BbqcQfAh.svg","width":256,"height":256,"format":"svg"},"attributes":{"mode":"inline","viewBox":"0 0 256 256"},"children":"\n    <rect width=\"256\" height=\"256\" fill=\"none\" />\n    <line x1=\"128\" y1=\"40\" x2=\"128\" y2=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" />\n    <circle cx=\"128\" cy=\"128\" r=\"56\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" />\n    <line x1=\"64\" y1=\"64\" x2=\"48\" y2=\"48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" />\n    <line x1=\"64\" y1=\"192\" x2=\"48\" y2=\"208\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" />\n    <line x1=\"192\" y1=\"64\" x2=\"208\" y2=\"48\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" />\n    <line x1=\"192\" y1=\"192\" x2=\"208\" y2=\"208\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" />\n    <line x1=\"40\" y1=\"128\" x2=\"16\" y2=\"128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" />\n    <line x1=\"128\" y1=\"216\" x2=\"128\" y2=\"240\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" />\n    <line x1=\"216\" y1=\"128\" x2=\"240\" y2=\"128\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\" />\n"});

const Sun = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: SunIcon
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Theme = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Theme;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(props.class, "class")}> ${renderComponent($$result, "MoonIcon", MoonIcon, { "data-theme": "toggle", "class": "hidden dark:block size-9 cursor-pointer rounded-full p-2 text-text-secondary hover:bg-bg-primary transition-colors duration-300" })} ${renderComponent($$result, "SunIcon", SunIcon, { "data-theme": "toggle", "class": "dark:hidden size-9 cursor-pointer rounded-full p-2 text-text-secondary hover:bg-bg-primary transition-colors duration-300" })} </div> ${renderScript($$result, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/layouts/LandingLayout/Theme.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/layouts/LandingLayout/Theme.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const NavItems = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About" },
    { link: "/services", label: "Services" },
    { link: "/projects", label: "Projects" },
    // { link: "/blog", label: "Blog" },
    { link: "/contact", label: "Contact" }
  ];
  const path = "";
  return renderTemplate(_a || (_a = __template(["", '<header id="primary-header" data-open=""', "", "", '> <div class="flex flex-row items-center justify-between"> <a href="/" class="my-2 font-bold flex flex-row items-center text-text-primary"> <div class="inline-block rounded-full border-2 border-border px-2 py-0 text-xl tracking-wider">\nA/B\n</div> <div class="ml-2 inline-block align-bottom text-2xl">Adi.</div> </a> <!-- TODO: Dynamic Island Effect --> <div class="flex flex-row items-center gap-2"> ', " ", ' </div> <nav class="relative z-20 hidden flex-row items-center md:flex lg:gap-2" id="header-nav-wrapper"> <div data-header-shadow class="absolute right-0 -top-1 -z-10 h-9 w-20 rounded-full bg-bg-primary opacity-0 duration-300"></div> ', " ", " </nav> </div> <nav", '> <div class="flex flex-col my-[20%] justify-between items-center gap-4"> ', ' </div> </nav> <script>\n        const toggleElement = document.querySelector("[data-toggle-element]");\n        toggleElement.addEventListener("click", () => {\n            const target = document.querySelector(\n                toggleElement.dataset.toggleElement,\n            );\n            if (!target) return;\n            console.log({ target: target.dataset.open });\n            const isOpen = target.dataset.open === "true";\n            target.dataset.open = isOpen ? "false" : "true";\n        });\n    <\/script> </header>'])), maybeRenderHead(), addAttribute([
    "group/header rounded-3xl w-[80vw] max-w-[54rem] fixed top-4 z-50 mx-auto select-none mt-4 border border-border/10 px-2 bg-bg-primary/50 shadow-bg-tertiary/10 shadow-md backdrop-blur-3xl",
    "md:top-8 md:w-[85vw] md:left-[calc(50%-27rem)] max-md:left-[10vw]"
  ], "class:list"), addAttribute(renderTransition($$result, "gtahssew", "none"), "data-astro-transition-scope"), addAttribute(createTransitionScope($$result, "gtahssew"), "data-astro-transition-persist"), renderComponent($$result, "Theme", $$Theme, { "class:list": ["md:absolute md:-right-14 md:top-1.5", ""] }), renderComponent($$result, "MenuIcon", MenuIcon, { "class": "mr-2 block size-6 md:hidden", "data-toggle-element": "#primary-header" }), NavItems.map(({ link, label }) => renderTemplate`<a data-header-link${addAttribute(link, "href")}${addAttribute([
    "relative h-fit cursor-pointer rounded-full px-4 py-1 text-sm font-medium text-text-secondary hover:text-text-primary",
    // path === link &&
    //   'after:bg-bg-secondary after:absolute after:-bottom-1 after:left-[37.5%] after:h-2 after:w-1/4 after:rounded-md after:bg-amber-500 after:blur after:dark:bg-amber-800',
    path === link && "text-text-primary",
    path === link && "before:absolute before:-bottom-2.5 before:left-[10%] before:w-4/5 before:rounded-[4px] before:border-b before:border-amber-600"
  ], "class:list")}> ${label} </a>`), renderScript($$result, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/layouts/LandingLayout/Navbar.astro?astro&type=script&index=0&lang.ts"), addAttribute([
    "hidden group-data-[open=true]/header:flex flex-col items-center justify-around",
    "md:hidden lg:gap-2"
  ], "class:list"), NavItems.map(({ link, label }) => renderTemplate`<a${addAttribute(link, "href")}${addAttribute([
    "relative h-fit cursor-pointer rounded-full px-4 py-1 font-medium text-text-secondary hover:text-text-primary",
    path === link && "text-text-primary",
    // path === link &&
    //   "after:bg-bg-secondary after:absolute after:-bottom-1 after:left-[37.5%] after:h-2 after:w-1/4 after:rounded-md after:bg-amber-500 after:blur after:dark:bg-amber-800",
    path === link && "before:absolute before:-bottom-2.5 before:left-[10%] before:w-4/5 before:rounded-[4px] before:border-b before:border-amber-600",
    "text-lg"
  ], "class:list")}> ${label} </a>`));
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/layouts/LandingLayout/Navbar.astro", "self");

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})}    ${renderComponent($$result2, "AiAssistant", $$AiAssistant, {})} ${maybeRenderHead()}<div class="pt-20"></div> ${renderSlot($$result2, $$slots["default"])} <footer class=""> <div class="mx-[5vw] md:mx-auto relative z-40 max-w-[64rem] rounded-4xl *:px-8 bg-bg-primary mt-16 md:grid grid-cols-2"> <div${addAttribute([
    "h-[35vh] !px-0 border-border/10 relative",
    "max-md:h-[25vh] max-md:border-b md:border-r"
  ], "class:list")}> ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary", "size": "sm", "class:list": ["absolute bottom-2 right-2"] }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "RefreshIcon", RefreshIcon, { "class": "size-5 text-text-quarternary" })} ` })} ${renderComponent($$result2, "GenerativeArt", $$GenerativeArt, {})} <!-- TODO: Insert Generative Artwork here with refresh button and svg morphing. --> </div> <div> <div class="flex flex-row gap-8 py-8 justify-between md:pr-[20%]"> <div class=""> <div class="mb-3 font-medium text-neutral-500">Me</div> ${renderComponent($$result2, "FooterLink", $$FooterLink, { "href": "/" }, { "default": ($$result3) => renderTemplate`Home` })} ${renderComponent($$result2, "FooterLink", $$FooterLink, { "href": "/about" }, { "default": ($$result3) => renderTemplate`About` })} ${renderComponent($$result2, "FooterLink", $$FooterLink, { "href": "/contact" }, { "default": ($$result3) => renderTemplate`Contact` })} </div> <div class=""> <div class="mb-3 font-medium text-neutral-500">Work</div> ${renderComponent($$result2, "FooterLink", $$FooterLink, { "href": "/projects" }, { "default": ($$result3) => renderTemplate`Projects` })} ${renderComponent($$result2, "FooterLink", $$FooterLink, { "href": "/labs" }, { "default": ($$result3) => renderTemplate`Labs` })} <!-- <FooterLink href="/blog">Blog</FooterLink> --> </div> <div class=""> <div class="mb-3 shrink-0 font-medium text-neutral-500">
Services
</div> ${renderComponent($$result2, "FooterLink", $$FooterLink, { "href": "/services" }, { "default": ($$result3) => renderTemplate`Product Engineer` })} ${renderComponent($$result2, "FooterLink", $$FooterLink, { "href": "/services" }, { "default": ($$result3) => renderTemplate`AI Engineer` })} </div> </div> <div${addAttribute([
    "flex flex-row pb-6 justify-between",
    "md:justify-normal gap-8"
  ], "class:list")}> <!-- <div class="mb-3 font-medium text-bg-tertiary/60">Socials</div> --> ${renderComponent($$result2, "FooterLink", $$FooterLink, { "href": SOCIALS.x }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TwitterIcon", TwitterIcon, { "class": "size-5 -mt-1 inline-block fill-text-tertiary" })}
Twitter (X)
` })} ${renderComponent($$result2, "FooterLink", $$FooterLink, { "href": SOCIALS.linkedin }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "LinkedinIcon", LinkedinIcon, { "class": "size-5 -mt-1 inline-block fill-text-tertiary" })}
LinkedIn
` })} ${renderComponent($$result2, "FooterLink", $$FooterLink, { "href": SOCIALS.github }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "GitHubIcon", GitHubIcon, { "class": "size-5 -mt-1 inline-block fill-text-tertiary" })}
GitHub
` })} </div> <!-- <div class="mr-[5vw] w-fit text-center text-bg-primary">
          <a class="mt-2 block" href="mailto:hi@adityab.tech">hello@adityab.com</a
          >
        </div> --> <a href="/policy" class="py-4 text-center md:text-left text-xs block w-fit mx-auto text-text-tertiary hover:underline starting:underline-offset-0 underline-offset-4 decoration-bg-tertiary/50 hover:underline-offset-8">
Read Legal Policies
</a> </div> </div> <div class="py-6 mx-[5vw] md:mx-auto py-12 bg-inherit z-40 relative text-center text-text-tertiary/80 hover:text-text-tertiary transition-all duration-500"> <!-- href="https://www.adityab.tech/eco-friendly" --> <!-- A+ 0.095 --> <!-- A	0.186 --> <!-- https://ecograder.com/report/Rhbn0HP7jMeYxLH9oEQIwQxh --> <!-- TODO: Introduce a per-page carbon footprint number / average number for all pages. --> <a target="_blank" href="https://www.websitecarbon.com/website/adityaborkar-com/" class="hover:underline underline-offset-8 hover:text-emerald-400 cursor-alias">
This page is eco-friendly, consumes 100% Clean Energy and produces only
        🍃 0.19g of CO2 on every visit.
</a> <br><br><br>
Designed & Developed with ❤️ by Aditya Borkar
<br>
Copyright © CC BY-NC 4.0
</div> </footer> ` })} <!-- <footer class="text-base hidden md:py-4 bg-text-primary text-bg-tertiary">
    <div class="mx-auto pt-12 flex max-w-[56rem] flex-row justify-between">
      <div class="w-fit">
        <div class="mr-[5vw] w-fit text-center text-bg-primary">
          <div
            class="w-fit rounded-md border-2 border-bg-primary/80 px-3 py-1 text-center font-medium uppercase tracking-wide"
          >
            Aditya Borkar
          </div>
          <a class="mt-2 block" href="mailto:hi@adityab.tech"
            >hello@adityab.com</a
          >
        </div>
      </div>
      <div class="flex flex-row gap-14">
        <div>
          <div class="mb-3 font-medium text-bg-tertiary/60">Me</div>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </div>
        <div>
          <div class="mb-3 font-medium text-bg-tertiary/60">Work</div>
          <FooterLink href="/projects">Projects</FooterLink>
          <FooterLink href="/labs">Labs</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
        </div>
        <div>
          <div class="mb-3 shrink-0 font-medium text-bg-tertiary/60">
            Services
          </div>
          <FooterLink href="/services">Product Engineer</FooterLink>
          <FooterLink href="/services">AI Engineer</FooterLink>
        </div>
        <div>
          <div class="mb-3 font-medium text-bg-tertiary/60">Socials</div>
          <FooterLink href="https://x.com/adityab_tech">
            <TwitterIcon
              class="size-5 -mt-1 inline-block fill-bg-secondary/70"
            />
            Twitter (X)
          </FooterLink>
          <FooterLink href="https://linkedin.com/in/adityab_tech">
            <LinkedinIcon
              class="size-5 -mt-1 inline-block fill-bg-secondary/70"
            />
            LinkedIn
          </FooterLink>
          <FooterLink href="https://github.com/AdityaBorkar">
            <GitHubIcon
              class="size-5 -mt-1 inline-block fill-bg-secondary/70"
            />
            GitHub
          </FooterLink>
        </div>
      </div>
    </div>

    <a
      href="/policy"
      class="mt-8 py-4 text-center text-xs block w-fit mx-auto hover:underline starting:underline-offset-0 underline-offset-4 decoration-bg-tertiary/50 hover:underline-offset-8"
    >
      Read Terms of Service, Privacy Policy, and Cookie Policy.
    </a>
  </footer> -->`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/layouts/LandingLayout/index.astro", undefined);

export { $$Index as $, GitHub as G, LinkedIn as L, Menu as M, PRICING as P, Refresh as R, SOCIALS as S, Twitter as T, $$Button as a, buttonVariants as b, createSvgComponent as c, RoundMessage$1 as d, Moon as e, Sun as f };
