import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderSlot, d as createAstro } from './astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import 'clsx';
import { b as buttonVariants } from './index_BR4l97ZW.mjs';

const $$Astro = createAstro();
const $$ButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ButtonLink;
  const { href, class: className, ...variantProps } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([buttonVariants({ ...variantProps }), className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/ui/ButtonLink.astro", undefined);

export { $$ButtonLink as $ };
