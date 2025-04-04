import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot } from './astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import 'clsx';

const $$InlineBold = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="font-semibold text-text-secondary"> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/ui/InlineBold.astro", undefined);

export { $$InlineBold as $ };
