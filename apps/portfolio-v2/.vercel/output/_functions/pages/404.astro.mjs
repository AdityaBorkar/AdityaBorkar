import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import { $ as $$Index } from '../chunks/index_BR4l97ZW.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "404 - Page Not Found";
  const description = "The link you followed may be broken, or the page must not exist.";
  const keywords = ["404", "Page Not Found"];
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$Index, { "title": title, "description": description, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto h-screen max-w-[64rem] py-48"> <h2 class="text-3xl font-semibold leading-relaxed">
The link you followed may be broken,
<br> or the page must not exist.
</h2> <a href="/" class="mt-16 block w-fit rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-lg text-neutral-300">
Go to Home Page
</a> <div class="mb-12 mt-28 block rounded-md text-lg font-medium text-neutral-400">
You can browse my Recent Blog Posts:
</div> <div>ARTICLES LIST</div> </div> ` })}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/404.astro", undefined);

const $$file = "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
