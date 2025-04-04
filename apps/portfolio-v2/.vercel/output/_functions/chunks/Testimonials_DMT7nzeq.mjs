import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Section } from './_Section_DXMeM0iw.mjs';
import { $ as $$Icon } from './Icon_Bat0AmsK.mjs';

const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const items = await getCollection("testimonials");
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class:list": [
    "grid grid-cols-1 gap-4",
    "md:flex md:flex-row md:flex-wrap md:items-center md:justify-evenly md:gap-8"
  ] }, { "default": ($$result2) => renderTemplate`${items.map(({ data: testimonial }) => renderTemplate`${maybeRenderHead()}<div class="group h-fit flex-[1_0_30%] rounded-3xl border border-border/10 bg-bg-primary/50 px-6 py-5"> <div class="w-fit flex flex-row gap-1 text-xl tracking-tighter group-hover:effect-shine"> ${renderComponent($$result2, "Icon", $$Icon, { "icon": "Star", "class": "size-4 text-yellow-600 fill-yellow-500 stroke-1" })} ${renderComponent($$result2, "Icon", $$Icon, { "icon": "Star", "class": "size-4 text-yellow-600 fill-yellow-500 stroke-1" })} ${renderComponent($$result2, "Icon", $$Icon, { "icon": "Star", "class": "size-4 text-yellow-600 fill-yellow-500 stroke-1" })} ${renderComponent($$result2, "Icon", $$Icon, { "icon": "Star", "class": "size-4 text-yellow-600 fill-yellow-500 stroke-1" })} ${renderComponent($$result2, "Icon", $$Icon, { "icon": "Star", "class": "size-4 text-yellow-600 fill-yellow-500 stroke-1" })} </div> <p class="mt-4 text-pretty text-xs md:text-sm"> ${testimonial.text} </p> <div class="mt-4"> <div class="font-medium text-text-primary"> ${testimonial.id} </div> <div class="text-text-tertiary leading-tight"> ${testimonial.role} </div> </div> </div>`)}` })}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/sections/Testimonials.astro", undefined);

export { $$Testimonials as $ };
