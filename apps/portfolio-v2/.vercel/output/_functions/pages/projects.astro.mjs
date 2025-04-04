import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as createAstro, e as renderComponent } from '../chunks/astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Section, a as $$BookCta } from '../chunks/_Section_DXMeM0iw.mjs';
import { $ as $$Icon } from '../chunks/Icon_Bat0AmsK.mjs';
import { $ as $$InlineBold } from '../chunks/InlineBold_Cog-2hUd.mjs';
import { $ as $$Index$1 } from '../chunks/index_BR4l97ZW.mjs';
import { g as getSchemaMarkup } from '../chunks/utils_DVGZa7EU.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    data: { title, description, hero_image, tags, featured, open_source }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/projects/${title.toLowerCase().replace(/[\s\W]+/g, "-")}`, "href")} class="group relative rounded-3xl border border-border/10 bg-bg-primary/50 p-4 transition-all hover:shadow-lg"> <div class="h-56 md:h-64 rounded-xl relative"> <img${addAttribute(hero_image, "src")}${addAttribute(`Visual Representation of ${title}`, "alt")} class="group-hover:zoom-105 mx-auto h-full text-text-quarternary rounded-xl bg-bg-secondary text-center"> ${(featured || open_source) && renderTemplate`<div${addAttribute([
    "absolute top-2 right-2 uppercase text-xs py-1 px-2 rounded-md",
    featured && "text-yellow-200 bg-yellow-950 border border-yellow-900",
    open_source && "text-green-200 bg-green-950 border border-green-900"
  ], "class:list")}> ${featured && "Featured"} ${open_source && "Open Source"} </div>`} </div> <div class="cursor-pointer px-2 pb-2 pt-4"> <div class="cursor-pointer text-base font-semibold"> ${title} </div> <div class="mt-2 cursor-pointer text-text-secondary"> ${description} </div> <ul class="mt-4 flex cursor-pointer flex-row flex-wrap md:gap-x-1 md:gap-y-2 gap-1"> ${tags.map((tag) => renderTemplate`<li class="cursor-pointer rounded-full bg-bg-secondary px-2.5 py-1 text-xs text-text-tertiary"> ${tag} </li>`)} </ul> </div> </a>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/projects/_ProjectCard.astro", undefined);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Projects";
  const description = "Projects";
  const keywords = ["projects"];
  const SchemaMarkup = [getSchemaMarkup("person")];
  const AllProjects = await getCollection("projects");
  const AllCategories = [
    ...new Set(AllProjects.flatMap((project) => project.data.categories))
  ];
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$Index$1, { "title": title, "keywords": keywords, "description": description, "schemaMarkup": SchemaMarkup }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1${addAttribute(["mt-16 text-3xl font-bold", "md:mt-36 md:text-5xl"], "class:list")}>
Selected Projects
</h1> <p${addAttribute([
    "mt-8 text-sm text-text-tertiary",
    "md:mt-12 md:max-w-[70%] md:text-balance md:text-base"
  ], "class:list")}>
I craft products and signature projects that make a difference.
<br class="hidden md:block">
My work empowers businesses to serve ${renderComponent($$result3, "InlineBold", $$InlineBold, {}, { "default": ($$result4) => renderTemplate`better products, enhance efficiency, and boost profitability` })} through technology. It includes ${renderComponent($$result3, "InlineBold", $$InlineBold, {}, { "default": ($$result4) => renderTemplate`open-source contributions` })} that support fellow engineers and developers in creating better software.
</p> <div${addAttribute([
    "mt-12 flex items-center flex-row gap-4",
    "!hidden md:mt-16"
  ], "class:list")}> <div class="shrink-0 py-2 text-text-secondary px-4 rounded-full bg-bg-primary"> ${renderComponent($$result3, "Icon", $$Icon, { "icon": "Filter", "class": "-mt-0.5 mr-1 inline-block size-5" })}
Filter:
</div> <div class="flex flex-grow flex-row flex-nowrap overflow-auto whitespace-nowrap gap-2"> ${AllCategories.map((tag) => renderTemplate`<button type="button"${addAttribute([
    "cursor-pointer rounded-full bg-bg-primary hover:bg-bg-secondary px-4 py-1.5 text-sm font-medium text-text-secondary",
    // filterCategory === tag && "bg-foreground text-background",
    "hover:bg-orange-900 hover:text-text-primary"
  ], "class:list")}> ${tag} </button>`)} </div> </div> <div class="mt-20 max-md:mt-12 grid md:grid-cols-2 grid-cols-1 gap-12"> ${AllProjects.map((project) => renderTemplate`${renderComponent($$result3, "ProjectCard", $$ProjectCard, { ...project })}`)} </div> ` })} ${renderComponent($$result2, "BookCta", $$BookCta, {})} ` })}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/projects/index.astro", undefined);

const $$file = "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
