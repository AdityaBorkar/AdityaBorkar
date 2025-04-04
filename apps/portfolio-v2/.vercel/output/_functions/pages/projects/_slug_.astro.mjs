import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection, $ as $$Section, a as $$BookCta } from '../../chunks/_Section_DXMeM0iw.mjs';
import { $ as $$ButtonLink } from '../../chunks/ButtonLink_DFWxUghA.mjs';
import { $ as $$Index$1 } from '../../chunks/index_BR4l97ZW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { slug: project.id },
    props: { project }
  }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { project } = Astro2.props;
  if (!project) return Astro2.redirect("/404");
  const {
    title,
    tags,
    description,
    hero_image,
    preview_link,
    categories,
    github_link
    // featured,
    // open_source,
  } = project.data;
  const SchemaMarkup = [];
  const { Content } = await renderEntry(project);
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$Index$1, { "title": title, "keywords": tags, "description": description, "schemaMarkup": SchemaMarkup }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex mx-auto max-w-[64rem] flex-row gap-2 text-sm mb-6 mt-12 max-md:px-4 md:mt-24 text-text-tertiary"> <a href="/projects" class="rounded-full bg-bg-primary/50 px-4 py-2 text-xs font-medium text-text-tertiary hover:bg-bg-primary"> <!-- <HiChevronRight
      className="inline-block size-3 stroke-1 align-[-1px]"
    /> -->
Back to All Projects</a> </div> ${renderComponent($$result2, "Section", $$Section, { "class:list": [
    "grid border-b border-border/20 pb-16",
    "md:grid-cols-[auto_18rem] md:grid-rows-[1fr_auto] md:auto-rows-max md:gap-x-8"
  ] }, { "default": ($$result3) => renderTemplate` <div> <h1 class="mb-4 text-left text-3xl font-bold md:text-5xl"> ${title} </h1> <p class="text-left md:text-base text-sm text-text-tertiary"> ${description} </p> </div> <div></div> <div class="max-md:contents"> <img${addAttribute(hero_image, "src")}${addAttribute(title, "alt")} class="mt-4 md:my-8 aspect-video rounded-xl border border-border/10 object-cover"> <div class="order-2 max-md:mt-8 prose min-w-full dark:prose-invert"> ${renderComponent($$result3, "Content", Content, {})} </div> </div> <div class=""> <div class="md:sticky mt-4 md:mt-8 md:top-[max(25vh,10rem)] flex flex-col gap-4 text-text-tertiary font-normal"> <div class="grid grid-cols-2 gap-4 text-center"> ${renderComponent($$result3, "ButtonLink", $$ButtonLink, { "variant": "secondary", "size": "md", "href": preview_link, "target": "_blank" }, { "default": ($$result4) => renderTemplate`  
Live Preview
` })} ${renderComponent($$result3, "ButtonLink", $$ButtonLink, { "variant": "secondary", "size": "md", "href": preview_link, "target": "_blank" }, { "default": ($$result4) => renderTemplate`  
Quick Peek
` })} <!-- <a
              href={project.url}
              target="_blank"
              class="rounded-md bg-bg-tertiary px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-bg-secondary"
            >
              <LuGithub className="inline-block size-4 stroke-2 align-[-3px]" />
              View Code
            </a> --> </div> <div class="py-4 pb-4 text-sm font-medium px-4 rounded-xl border border-border/20"> <div class="grid grid-cols-[1fr_4fr] max-md:grid-cols-[1fr_3fr_1fr_3fr] gap-y-2 items-center text-base"> <span class="text-2xl -mt-0.5 font-semibold text-center text-text-secondary">
2x
</span> <div>Revenue</div> <span class="text-2xl -mt-0.5 font-semibold text-center text-text-secondary">
2x
</span> <div>Revenue</div> <span class="text-2xl -mt-0.5 font-semibold text-center text-text-secondary">
10x
</span> <div>Customer Retention</div> </div> </div> <div class="py-4 pb-4 text-sm font-medium px-4 rounded-xl border border-border/20"> <div>Client: Vasundhara Transport Service</div> <div class="my-6">LOGO</div> </div> <!-- <div class="border p-4 rounded-xl border-border/20">
          Looking for consultation? Looking for an engineer (or team) to build
          your project?
          <a href="/contact" class="my-2 block">Contact</a>
        </div> --> </div> </div> ` })} ${renderComponent($$result2, "BookCta", $$BookCta, {})} ` })}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/projects/[slug]/index.astro", undefined);

const $$file = "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/projects/[slug]/index.astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
