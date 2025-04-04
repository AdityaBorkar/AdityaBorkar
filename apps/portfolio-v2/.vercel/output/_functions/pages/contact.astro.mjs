import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as createAstro, e as renderComponent, h as renderScript } from '../chunks/astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import { $ as $$ScheduleMeetBtn } from '../chunks/ScheduleMeetBtn_CTAA-edi.mjs';
import { a as $$Button, $ as $$Index$1 } from '../chunks/index_BR4l97ZW.mjs';
import 'clsx';
import { g as getSchemaMarkup } from '../chunks/utils_DVGZa7EU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Input;
  const { label, id, placeholder, type = "text" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="mb-1 block font-medium text-text-primary"> ${label} </label> <input${addAttribute(id, "id")}${addAttribute(type, "type")}${addAttribute(placeholder, "placeholder")}${addAttribute({ display: "none" }, "style")}> </div>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/ui/Input.astro", undefined);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Contact";
  const description = "Reach out to collaborate on innovative projects, insightful podcasts, engaging talks, expert consultations, and exciting collaborations. Let's create something amazing together!";
  const keywords = [
    "contact me",
    "collaborate with me",
    "project consultation",
    "podcast guest",
    "public speaking",
    "business inquiries",
    "partnership opportunities",
    "freelance projects",
    "hire a developer"
  ];
  const SchemaMarkup = [getSchemaMarkup("person"), getSchemaMarkup("contact")];
  const errors = { username: "", email: "", password: "" };
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$Index$1, { "title": title, "keywords": keywords, "description": description, "schemaMarkup": SchemaMarkup }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main${addAttribute([
    "mx-auto my-12 md:my-36 w-full max-w-[36rem] max-md:px-4 max-md:text-sm"
  ], "class:list")}> <h2${addAttribute([
    "mb-4  font-bold text-transparent bg-clip-text bg-gradient-to-t from-text-primary to-text-secondary magic-fade-down delay-300",
    "text-4xl max-md:text-3xl"
  ], "class:list")}>
How can I help you?
</h2> <p class="font-medium text-balance text-text-tertiary magic-fade-down delay-500">
I'm available for projects, consultations, and collaborations. Looking to
      start a new project or want a consult regarding your current project?
</p> <p class="mt-2 font-medium text-text-tertiary magic-fade-down delay-500">
I usually reply within 24 hours.
</p> <form class="mt-8 grid grid-cols-2 gap-4 magic-fade-down delay-900"> <div class="max-md:col-span-2"> ${renderComponent($$result2, "Input", $$Input, { "id": "contactForm_name", "label": "Your Name:", "placeholder": "Harvey Specter" })} ${errors.username} </div> <div class="max-md:col-span-2"> ${renderComponent($$result2, "Input", $$Input, { "id": "contactForm_name", "label": "Your Phone", "placeholder": "9820748096" })} ${errors.username} </div> <div class="max-md:col-span-2"> ${renderComponent($$result2, "Input", $$Input, { "id": "contactForm_email", "type": "email", "label": "Your Email:", "placeholder": "harvey.specter@suits.com" })} ${errors.email} </div> <div class="group relative col-span-2"> <label for="contactForm_details" class="mb-1 block font-medium text-text-primary">
Tell me about your project:
</label> <textarea id="contactForm_details" placeholder="Feel free to write here..." class="peer block h-64 w-full rounded-md bg-bg-primary px-4 py-2 border border-border/10 placeholder:text-text-tertiary group-hover:pb-24"></textarea> <!-- TODO: Handle responsiveness --> <div${addAttribute([
    "hidden magic-fade absolute top-6 -right-[calc(60%+0.5rem)] text-pretty w-[60%] rounded-md border border-border/20 text-text-secondary px-3 py-2 text-sm starting:opacity-0 ease-in-out duration-300",
    "md:group-focus:block md:peer-focus:block"
  ], "class:list")}>
Share your vision and ideas. Include any relevant links to references,
          prototypes, existing websites, or sources of inspiration. This will
          help me to understand your project better.
</div> </div> <div class="max-md:col-span-2"> ${renderComponent($$result2, "Input", $$Input, { "id": "contactForm_phone", "type": "tel", "label": "Attach Files", "placeholder": "+91 9876543210" })} </div> <!-- Add Turnstile Captcha or Google Recaptcha --> <!-- TODO: Response collected successfully. Expect a reply within <span class="font-semibold underline underline-offset-4 decoration-dashed">three hours</span>. --> <div class="mt-4"> ${renderComponent($$result2, "Button", $$Button, { "type": "submit", "variant": "primary", "size": "md" }, { "default": ($$result3) => renderTemplate`Submit Inquiry` })} </div> </form> <div class="mt-16 text-text-tertiary magic-fade-down delay-1200"> <div> <p class="mb-2"> ${"Prefer a more direct approach?  "} </p> ${"Email me at"} <a href="mailto:hi@adityab.com" class="font-medium underline underline-offset-4 hover:underline-offset-8">
hello@adityab.com
</a> ${" or "} ${renderComponent($$result2, "ScheduleMeetBtn", $$ScheduleMeetBtn, { "className": "font-medium underline underline-offset-4 hover:underline-offset-8 cursor-pointer" }, { "default": ($$result3) => renderTemplate`
Schedule a call
` })} </div> <div>Social Links + Discord User ID Link</div> </div> <!-- Your message has been sent. Expect a reply within <span class="font-semibold underline underline-offset-4 decoration-dashed">three</span> hours. --> <!-- TODO - 3 hours during working hours and 12 hours during non-working hours and 24 hours during non-working days --> </main> ${renderScript($$result2, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/contact/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/contact/index.astro", undefined);

const $$file = "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
