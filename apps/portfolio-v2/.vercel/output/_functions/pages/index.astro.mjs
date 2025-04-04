import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderSlot, e as renderComponent, d as createAstro, h as renderScript } from '../chunks/astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import { c as $$Image, $ as $$ResponsiveImage } from '../chunks/_astro_assets_CrqN3lCC.mjs';
import { g as getCollection, $ as $$Section, a as $$BookCta } from '../chunks/_Section_DXMeM0iw.mjs';
import { $ as $$Index$1, S as SOCIALS } from '../chunks/index_BR4l97ZW.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_DMT7nzeq.mjs';
import { $ as $$ButtonLink } from '../chunks/ButtonLink_DFWxUghA.mjs';
import { $ as $$Icon, g as getImage } from '../chunks/Icon_Bat0AmsK.mjs';
import { $ as $$InlineBold } from '../chunks/InlineBold_Cog-2hUd.mjs';
import { g as getSchemaMarkup } from '../chunks/utils_DVGZa7EU.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { video } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details${addAttribute([
    "relative px-4 py-2 cursor-pointer rounded-3xl border border-border/10 bg-bg-primary transition-all duration-300",
    "md:px-8 md:py-4",
    "hover:scale-105 hover:shadow-lg"
  ], "class:list")} onmouseover="this.children[0].children[0].play()" onmouseout="this.children[0].children[0].pause()"> <summary> ${renderTemplate`<video${addAttribute(video, "src")}${addAttribute(["mx-auto block h-auto object-cover w-full"], "class:list")} loop muted></video>`} <div${addAttribute([
    "text-left text-base font-semibold text-text-secondary",
    "md:text-xl"
  ], "class:list")}> ${renderSlot($$result, $$slots["title"])} </div> <!-- @ts-expect-error --> ${renderComponent($$result, "Icon", $$Icon, { "icon": "CirclePlus", "class:list": [
    "absolute bottom-3 right-3 text-neutral-500",
    "md:bottom-5 md:right-5"
  ] })} </summary> ${renderSlot($$result, $$slots["default"])} </details>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/home/_ServiceCard.astro", undefined);

const $$Astro$3 = createAstro();
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Heading;
  const { icon, label, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "mx-auto mb-2 mt-36 max-w-[64rem] text-base text-text-quaternary",
    "max-md:px-4 md:mb-4 md:mt-48"
  ], "class:list")}> ${renderComponent($$result, "Icon", $$Icon, { "icon": icon, "class": "inline size-4 align-[-1px] font-medium" })} ${label} </div> <h3${addAttribute([
    "text-3xl text-left mb-10 font-semibold mx-auto max-w-[64rem] text-text-primary",
    "max-md:px-4 md:text-4xl md:mb-16",
    className
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </h3>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/home/_Heading.astro", undefined);

const $$Astro$2 = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { slug, title, description, hero_image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/projects/${slug}`, "href")}${addAttribute([
    "rounded-2xl border border-border/10 bg-bg-primary pl-4 pr-2 py-2",
    "md:px-8 md:py-6 max-md:grid max-md:grid-cols-2 max-md:gap-4"
  ], "class:list")}> <div> <div${addAttribute([
    "text-lg font-semibold text-text-primary",
    "max-md:my-2 md:text-xl"
  ], "class:list")}> ${title} </div> <p${addAttribute([
    "mt-1 text-xs text-text-tertiary line-clamp-3",
    "md:mt-2 md:text-sm"
  ], "class:list")}> ${description} </p> </div> ${renderComponent($$result, "Image", $$Image, { "src": getImage("illustrations/laptop-with-notes.png"), "alt": "", "class:list": [
    "mx-auto bg-background rounded-xl block h-36 w-full object-cover",
    "md:mt-4 md:h-72"
  ] })} <!-- image slideshow - preview, stats, preview. --> </a> ${renderScript($$result, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/home/_ProjectCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/home/_ProjectCard.astro", undefined);

const $$Astro$1 = createAstro();
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tag;
  const { href, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a target="_blank"${addAttribute(href, "href")} class="rounded bg-emerald-700 px-2 py-1 font-medium tracking-wide text-white hover:bg-emerald-800 cursor-alias"> ${label} </a>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/home/_Tag.astro", undefined);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const FEATURED_PROJECTS = [
    "Platipie",
    "Vasundhara",
    "Hooop Cloud",
    "Amy",
    "Blog Platform"
  ];
  const Projects = (await getCollection("projects")).filter(
    (project) => FEATURED_PROJECTS.includes(project.data.title)
  );
  const Mockups = await getCollection("mockups");
  const Technologies = await getCollection("technologies");
  Mockups.slice(0, Mockups.length / 2);
  Mockups.slice(Mockups.length / 2, Mockups.length);
  Technologies.slice(0, Technologies.length / 2);
  Technologies.slice(
    Technologies.length / 2,
    Technologies.length
  );
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$Index$1, { "title": "Aditya Borkar - Product Engineer", "keywords": [
    "about",
    "product engineer",
    "full-stack developer",
    "web development",
    "user interface",
    "user interaction",
    ""
  ], "description": "Showcasing the work of Aditya Borkar, a Mumbai-based product engineer and full-stack developer, specializing in web development, internal communications, and front-end development.", "schemaMarkup": [getSchemaMarkup("person")] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class:list": [
    "mx-auto pb-24 pt-12 grid-cols-1 px-4 grid max-w-[64rem] min-h-fit",
    "md:grid-cols-[1fr_2fr] md:pt-36 md:gap-16 md:px-0 md:max-h-[56rem] md:h-[80vh]"
  ] }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div${addAttribute([
    "mr-auto md:mx-auto size-36 overflow-hidden rounded-4xl md:rounded-full",
    "md:size-80"
  ], "class:list")}> ${renderComponent($$result3, "Image", $$ResponsiveImage, { "class:list": [
    "h-full w-full -scale-x-100 rounded-2xl object-cover",
    "magic-fade-right"
  ], "src": getImage("profile.png"), "alt": "" })} </div> <div${addAttribute(["mt-4 w-[100%]", "lg:-mt-8"], "class:list")}> <div${addAttribute([
    "text-2xl font-bold bg-clip-text leading-normal text-transparent from-text-primary to-text-quarternary bg-gradient-to-br",
    "md:text-4xl",
    "magic-fade-down delay-300"
  ], "class:list")}>
Product Engineer.
<!-- <br class="md:hidden" /> OSS Maintainer.  --> <br>
Full Stack Web Developer.
</div> <div${addAttribute([
    "mt-4 text-xs flex flex-row gap-2",
    "magic-fade-down delay-500"
  ], "class:list")}> ${renderComponent($$result3, "Tag", $$Tag, { "href": "https://ossacc.com/", "label": "oss/acc" })} ${renderComponent($$result3, "Tag", $$Tag, { "href": "https://en.wikipedia.org/wiki/Effective_altruism", "label": "e/altruism" })} </div> <div${addAttribute([
    "mt-4 flex flex-row items-center gap-4 text-text-tertiary",
    "magic-fade-down delay-700"
  ], "class:list")}> <a target="_blank"${addAttribute(SOCIALS.github, "href")}> ${renderComponent($$result3, "Icon", $$Icon, { "icon": "GitHub", "class": "size-6 hover:fill-text-primary fill-text-quarternary" })} </a> <a target="_blank"${addAttribute(SOCIALS.x, "href")}> ${renderComponent($$result3, "Icon", $$Icon, { "icon": "Twitter", "class": "size-6 hover:fill-text-primary fill-text-quarternary" })} </a> <a target="_blank"${addAttribute(SOCIALS.linkedin, "href")}> ${renderComponent($$result3, "Icon", $$Icon, { "icon": "LinkedIn", "class": "size-6 hover:fill-text-primary fill-text-quarternary" })} </a> <a${addAttribute(`mailto:${SOCIALS.email}`, "href")} class="mt-0.5"> ${renderComponent($$result3, "Icon", $$Icon, { "icon": "Mail", "class": "size-5 hover:text-text-primary text-text-quarternary" })} </a> </div> <p${addAttribute([
    "text-balance leading-relaxed text-text-tertiary",
    "mt-8 md:mt-12 text-sm md:text-lg",
    "magic-fade-down delay-1000"
  ], "class:list")}> ${"I'm Aditya, an "} ${renderComponent($$result3, "InlineBold", $$InlineBold, {}, { "default": ($$result4) => renderTemplate`product engineer` })} ${" based in "} ${renderComponent($$result3, "Image", $$ResponsiveImage, { "src": getImage("emoji/in-flag.png"), "alt": "", "class": "inline-block h-6 w-fit" })} ${" India with"} ${renderComponent($$result3, "InlineBold", $$InlineBold, {}, { "default": ($$result4) => renderTemplate`3+ years of experience` })} ${" in creating "} ${renderComponent($$result3, "InlineBold", $$InlineBold, {}, { "default": ($$result4) => renderTemplate`high-quality products` })} ${" with "} ${renderComponent($$result3, "InlineBold", $$InlineBold, {}, { "default": ($$result4) => renderTemplate`humanizing user experience` })} ${" that drives "} ${renderComponent($$result3, "InlineBold", $$InlineBold, {}, { "default": ($$result4) => renderTemplate`user engagement` })} ${" and "} ${renderComponent($$result3, "InlineBold", $$InlineBold, {}, { "default": ($$result4) => renderTemplate`business growth.` })} ${" I am opinionated to deliver clean, maintainable, scalable, production-ready, tested code in a"} ${renderComponent($$result3, "InlineBold", $$InlineBold, {}, { "default": ($$result4) => renderTemplate`timely manner.` })} </p> <div${addAttribute([
    "mt-8 flex flex-row gap-4 ",
    "md:mt-16 md:gap-8",
    "magic-fade-down delay-1100"
  ], "class:list")}> ${renderComponent($$result3, "ButtonLink", $$ButtonLink, { "variant": "primary", "size": "lg", "href": "/contact" }, { "default": ($$result4) => renderTemplate`
Enquire / Contact
` })} ${renderComponent($$result3, "ButtonLink", $$ButtonLink, { "variant": "secondary", "size": "lg", "href": "/projects" }, { "default": ($$result4) => renderTemplate`
View Work
` })} </div> <div${addAttribute([
    "mt-6 w-fit px-4 text-center text-sm text-text-secondary",
    "magic-fade-down delay-1200"
  ], "class:list")}> <div${addAttribute([
    "relative mr-2 inline-block size-3 rounded-full ",
    "bg-green-500" 
  ], "class:list")}> <div${addAttribute([
    "absolute -top-0.5 -ml-0.5 size-4 animate-ping rounded-full",
    "[animation-duration:2s] [animation-delay:0.4s]",
    "bg-green-500" 
  ], "class:list")}></div> </div> ${"Available Now" } </div> </div> ` })}  ${renderComponent($$result2, "Heading", $$Heading, { "icon": "Smile", "label": "About" }, { "default": ($$result3) => renderTemplate`Brief About Myself` })} ${renderComponent($$result2, "Section", $$Section, { "class:list": ["grid grid-cols-8 gap-4", "md:grid-cols-8"] }, { "default": ($$result3) => renderTemplate`                 ` })} ${renderComponent($$result2, "Heading", $$Heading, { "icon": "Gift", "label": "Services" }, { "default": ($$result3) => renderTemplate` How I Can Help You ` })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` <div${addAttribute(["grid grid-cols-2 gap-4", "md:grid-cols-3 md:gap-8"], "class:list")}> ${renderComponent($$result3, "ServiceCard", $$ServiceCard, { "video": "/assets/video/product-engineering.webm" }, { "default": ($$result4) => renderTemplate`  <div>Hello World</div> `, "title": ($$result4) => renderTemplate`<div>
Product <br>
Engineering
</div>` })} ${renderComponent($$result3, "ServiceCard", $$ServiceCard, { "video": "/assets/video/prototype-dev.webm" }, { "default": ($$result4) => renderTemplate`  <div>Hello World</div> `, "title": ($$result4) => renderTemplate`<div>
Prototype & MVP <br> Development
</div>` })} ${renderComponent($$result3, "ServiceCard", $$ServiceCard, { "video": "/assets/video/tech-consulting.webm" }, { "default": ($$result4) => renderTemplate`  <div>Hello World</div> `, "title": ($$result4) => renderTemplate`<div>
Technical <br>
Consultancy
</div>` })} ${renderComponent($$result3, "ServiceCard", $$ServiceCard, { "video": "/assets/video/ai.webm" }, { "default": ($$result4) => renderTemplate`  <div>Hello World</div> `, "title": ($$result4) => renderTemplate`<div>
AI / Automation <br>
Development
</div>` })} ${renderComponent($$result3, "ServiceCard", $$ServiceCard, { "video": "/assets/video/backend-dev.webm" }, { "default": ($$result4) => renderTemplate`  <div>Working with Tools like: IMAGE SLIDEDOWN / TEXT TABLE</div> `, "title": ($$result4) => renderTemplate`<div>
Backend <br>
Development
</div>` })} ${renderComponent($$result3, "ServiceCard", $$ServiceCard, { "video": "/assets/video/frontend-dev.webm" }, { "default": ($$result4) => renderTemplate`  <div>Hello World</div> `, "title": ($$result4) => renderTemplate`<div>
Frontend <br>
Development
</div>` })} </div>   ` })} ${renderComponent($$result2, "ButtonLink", $$ButtonLink, { "variant": "primary", "size": "lg", "href": "/services/", "class": "block w-fit mx-auto mt-12" }, { "default": ($$result3) => renderTemplate`
View Service Offerings
` })} ${renderComponent($$result2, "Heading", $$Heading, { "icon": "Atom", "label": "Projects" }, { "default": ($$result3) => renderTemplate` Selected Works ` })} ${renderComponent($$result2, "Section", $$Section, { "class:list": ["grid w-full grid-cols-1 gap-6", "md:grid-cols-2 md:gap-8"] }, { "default": ($$result3) => renderTemplate`${Projects.map(({ data: project, id }) => renderTemplate`${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "slug": id, ...project })}`)}` })} ${renderComponent($$result2, "ButtonLink", $$ButtonLink, { "variant": "primary", "size": "lg", "href": "/projects/", "class": "mx-auto mt-12 block w-fit" }, { "default": ($$result3) => renderTemplate`
View All Projects
` })}  ${renderComponent($$result2, "Heading", $$Heading, { "icon": "UserCircle", "label": "Testimonials" }, { "default": ($$result3) => renderTemplate`What People Speak` })} ${renderComponent($$result2, "TestimonialSection", $$Testimonials, {})} ${renderComponent($$result2, "BookCta", $$BookCta, {})} ` })}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/index.astro", undefined);

const $$file = "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
