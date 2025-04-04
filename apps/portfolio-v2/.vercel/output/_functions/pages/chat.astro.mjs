import { c as createComponent, r as renderTemplate, e as renderComponent } from '../chunks/astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import { $ as $$RootLayout } from '../chunks/RootLayout_0Md_7O_Y.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <!-- \n<script>\n    import Lenis from "lenis";\n\n    setTimeout(() => {\n        const wrapper = document.getElementById("chat-window");\n        console.log({ ok: wrapper?.querySelector("main") });\n        if (!wrapper) return;\n        const modalLenis = new Lenis({\n            autoRaf: true,\n            wrapper,\n            content: wrapper.querySelector("main"),\n        });\n    }, 1000);\n<\/script> -->'])), renderComponent($$result, "RootLayout", $$RootLayout, { "title": "Chat with Aditya Borkar", "description": "Chat with Aditya Borkar", "keywords": ["chat", "aditya borkar", "aditya", "borkar"] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Chat", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/chat/index.tsx", "client:component-export": "default" })} ` }));
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/chat/index.astro", undefined);

const $$file = "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/chat/index.astro";
const $$url = "/chat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
