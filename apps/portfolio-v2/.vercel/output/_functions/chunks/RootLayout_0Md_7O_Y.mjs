import { c as createComponent, r as renderTemplate, a as addAttribute, h as renderScript, d as createAstro, m as maybeRenderHead, e as renderComponent, b as renderSlot, k as renderTransition, l as renderHead, u as unescapeHTML } from './astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/aditya/projects/AdityaBorkar/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/aditya/projects/AdityaBorkar/node_modules/astro/components/ClientRouter.astro", undefined);

const $$CookiePopup = createComponent(($$result, $$props, $$slots) => {
  const showModal = false;
  return renderTemplate`<!-- modal popup close animation -->${maybeRenderHead()}<div${addAttribute([
    "fixed hidden bottom-4 max-w-64 left-4 py-4 px-5 z-50 rounded-3xl backdrop-blur-xl border border-border/10",
    showModal
  ], "class:list")}> <div class="text-xs">
We are transparent about privacy. We use only a single in-house cookie
        to remember your preferences.
</div> <button class="border mx-auto block border-border/10 bg-background rounded-xl w-full mt-3 py-3"> <!-- pressed effect -->
Alright, got it!
</button> </div>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/CookiePopup.astro", undefined);

const $$Astro$1 = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/home/aditya/projects/AdityaBorkar/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/aditya/projects/AdityaBorkar/node_modules/@vercel/speed-insights/dist/astro/index.astro", undefined);

const $$Posthog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SpeedInsights", $$Index, {})} ${renderScript($$result, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/Posthog.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/Posthog.astro", undefined);

const $$VercelToolbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/VercelToolbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/VercelToolbar.astro", undefined);

function JsonLd(item, space) {
  return JSON.stringify(item, safeJsonLdReplacer, space);
}
const ESCAPE_ENTITIES = Object.freeze({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
});
const ESCAPE_REGEX = new RegExp(
  `[${Object.keys(ESCAPE_ENTITIES).join("")}]`,
  "g"
);
const ESCAPE_REPLACER = (t) => ESCAPE_ENTITIES[t];
const safeJsonLdReplacer = /* @__PURE__ */ (() => {
  return (_, value) => {
    switch (typeof value) {
      case "object":
        if (value === null) {
          return undefined;
        }
        return value;
      // JSON.stringify will recursively call replacer.
      case "number":
      case "boolean":
      case "bigint":
        return value;
      // These values are not risky.
      case "string":
        return value.replace(ESCAPE_REGEX, ESCAPE_REPLACER);
      default: {
        return undefined;
      }
    }
  };
})();

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$RootLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RootLayout;
  const { title, description, keywords, schemaMarkup = [] } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!--\n        themeColor	false	"#000000"	Browser theme color.\n        colorScheme	false	"light"	Preferred color scheme.\n        --><title>', '</title><meta name="description"', '><meta name="keywords"', '><script type="application/ld+json">', '<\/script><!-- Open Graph --><!--\n        facebook.image	false	"/facebook.png"	Facebook share image.\n        facebook.url	false	"https://astro.build"	Page URL.\n        facebook.type	false	"website"	Type of resource. See all types here.\n        twitter.image	false	"/twitter.png"	Twitter share image.\n        twitter.site	false	"@astrodotbuild"	Twitter handle of publishing site.\n        twitter.card	false	"summary"	Format of Twitter share card. See all types here.\n        -->', '<script data-astro-rerun type="module">\n            const doc = document.documentElement;\n            window\n                .matchMedia("(prefers-color-scheme: dark)")\n                .addEventListener("change", (event) => {\n                    const isDark = event.matches;\n                    doc.classList.toggle("dark", isDark);\n                    window.localStorage.setItem(\n                        "theme",\n                        isDark ? "dark" : "light",\n                    );\n                });\n\n            const theme =\n                window.localStorage.getItem("theme") ||\n                (window.matchMedia("(prefers-color-scheme: dark)").matches\n                    ? "dark"\n                    : "light");\n            doc.classList.toggle(theme);\n\n            document.body.style.visibility = "visible";\n            document.body.style.opacity = "1";\n        <\/script>', '</head> <body class="text-sm leading-normal antialiased relative min-h-screen cursor-default bg-background text-text-secondary"', "> <!-- The sideones must be darker than the body --> <!--\n        'before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full',\n        'before:[background-image:radial-gradient(#cbd5e1,_transparent_3px)] before:[background-size:25px_25px]',\n        --> ", " ", " ", " ", " ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(keywords?.join(", "), "content"), unescapeHTML(schemaMarkup.map(JsonLd).join("\n")), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), addAttribute(renderTransition($$result, "uozriyjp", "slide"), "data-astro-transition-scope"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "CookiePopup", $$CookiePopup, {}), renderScript($$result, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/layouts/RootLayout.astro?astro&type=script&index=0&lang.ts"), process.env.NODE_ENV !== "development" && renderTemplate`${renderComponent($$result, "Posthog", $$Posthog, {})}`, process.env.NODE_ENV === "development" && renderTemplate`${renderComponent($$result, "VercelToolbar", $$VercelToolbar, {})}`);
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/layouts/RootLayout.astro", "self");

export { $$RootLayout as $ };
