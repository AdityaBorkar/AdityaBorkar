import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderComponent, b as renderSlot, h as renderScript, d as createAstro, u as unescapeHTML } from '../chunks/astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import { g as getCollection, a as $$BookCta } from '../chunks/_Section_DXMeM0iw.mjs';
import { P as PRICING, $ as $$Index$1 } from '../chunks/index_BR4l97ZW.mjs';
import { c as cn, g as getSchemaMarkup } from '../chunks/utils_DVGZa7EU.mjs';
import { $ as $$Icon, g as getImage } from '../chunks/Icon_Bat0AmsK.mjs';
import 'clsx';
import { $ as $$ResponsiveImage, c as $$Image } from '../chunks/_astro_assets_CrqN3lCC.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_DMT7nzeq.mjs';
export { renderers } from '../renderers.mjs';

const $$Dock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "fixed bottom-4 left-0 flex items-center justify-center w-full z-30",
    "md:hidden"
  ], "class:list")}> <div class="text-center text-sm text-text-secondary px-6 py-2 border border-border/10 rounded-full backdrop-blur-lg">
On this Page
</div> </div> <div${addAttribute([
    "fixed border flex flex-row justify-around border-border/10 shadow-lg rounded-full py-3 text-center w-[20rem] backdrop-blur-md left-[calc(50%-10rem)] hover:bottom-6 -bottom-6 z-50",
    "max-md:bottom-6 max-md:justify-normal max-md:gap-4 max-md:px-4 w-fit",
    "max-md:hidden"
  ], "class:list")}> <a href="#top"> ${renderComponent($$result, "Icon", $$Icon, { "icon": "ArrowUp", "class": "size-6 fill-text-tertiary hover:fill-text-primary" })} </a> <a href="#benefits"> ${renderComponent($$result, "Icon", $$Icon, { "icon": "HandHeart", "class": "size-6 fill-text-tertiary hover:fill-text-primary" })} </a> <a href="#services"> ${renderComponent($$result, "Icon", $$Icon, { "icon": "Flower", "class": "size-6 fill-text-tertiary hover:fill-text-primary" })} </a> <a href="#work"> ${renderComponent($$result, "Icon", $$Icon, { "icon": "Briefcase", "class": "size-6 fill-text-tertiary hover:fill-text-primary" })} </a> <a href="#testimonials"> ${renderComponent($$result, "Icon", $$Icon, { "icon": "HandVictory", "class": "size-6 fill-text-tertiary hover:fill-text-primary" })} </a> <button>Call</button> <button>AI</button> <!-- <a href="#pricing">
        <Icon
            icon="Currency"
            class="size-6 fill-text-tertiary hover:fill-text-primary"
        />
    </a> --> </div>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/services/(components)/_Dock.astro", undefined);

const $$Astro$3 = createAstro();
const $$Accordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Accordion;
  const { title, name, open } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<details class="group border-b border-border/20 overflow-hidden"${addAttribute(name, "data-name")}${addAttribute(open, "open")}> <summary class="relative block py-4 max-md:text-base text-xl font-semibold text-text-primary"> ${title} ${renderComponent($$result, "Icon", $$Icon, { "icon": "ChevronDown", "class": "absolute right-4 top-5 ml-2 group-open:rotate-180" })} </summary> <p class="pb-6 text-text-secondary"> ${renderSlot($$result, $$slots["default"])} </p> </details> ${renderScript($$result, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/ui/Accordion.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/ui/Accordion.astro", undefined);

const $$Astro$2 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Section;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([
    "relative max-w-[64rem] mx-auto max-md:px-4 opacity-100",
    Astro2.props.class
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/services/(components)/_Section.astro", undefined);

const $$FaqSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "mt-48 flex flex-col gap-8 md:flex-row md:gap-32" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex-nowrap animate-[magic-fade-up_1s_ease-in-out_1] whitespace-nowrap"> <h2 class="max-md:text-3xl text-5xl font-semibold">FAQs</h2> <div class="mt-2 text-text-tertiary">Frequently Asked Questions</div> </div> <div class="grow"> <!-- How do you record the hours? --> ${renderComponent($$result2, "Accordion", $$Accordion, { "name": "faqs", "title": "How long does a project take?" }, { "default": ($$result3) => renderTemplate`
Timeline depends on requirements and complexity of your project. I
            will provide you with a timeline and a detailed plan of the project
            with the quote.
` })} ${renderComponent($$result2, "Accordion", $$Accordion, { "name": "faqs", "title": "In which time zones do you operate?" }, { "default": ($$result3) => renderTemplate`
I am flexible and can accommodate multiple time zones based on the
            project's needs. Let me know your preferred working hours, and I
            will do my best to align with them.
` })} ${renderComponent($$result2, "Accordion", $$Accordion, { "name": "faqs", "title": "Are you open to signing confidentiality agreements?" }, { "default": ($$result3) => renderTemplate`
I provide tailored contracts with specific clauses to meet your
            requirements. Additionally, I am open to signing a Non-Disclosure
            Agreement (NDA) if needed. I fully understand the importance of
            maintaining project privacy and confidentiality and am happy to
            discuss and incorporate these aspects into a mutually agreed-upon
            contract.
` })} ${renderComponent($$result2, "Accordion", $$Accordion, { "name": "faqs", "title": "Are you experienced with working on existing codebases?" }, { "default": ($$result3) => renderTemplate`
Yes, I am experienced and comfortable working with existing
            codebases. I can adapt quickly, understand the structure, and
            contribute effectively to ongoing projects. If they project is not
            feasible to work with, I will let you know and suggest the best
            course of action.
` })} ${renderComponent($$result2, "Accordion", $$Accordion, { "name": "faqs", "title": "Do you work in teams? How do you approach collaboration?" }, { "default": ($$result3) => renderTemplate`
Yes, I have experience working in teams and collaborate using tools
            like Git, project management platforms (e.g., Jira, Trello), and
            communication apps (e.g., Slack, Microsoft Teams). I prioritize
            clear communication, effective coordination, and timely
            contributions to ensure smooth teamwork.
` })} ${renderComponent($$result2, "Accordion", $$Accordion, { "name": "faqs", "title": "Who retains ownership of the code and intellectual property rights?" }, { "default": ($$result3) => renderTemplate`
Typically, the ownership of code and intellectual property (IP) is
            outlined in the agreement or contract. I am open to assigning full
            ownership of the code and IP to the client upon project completion
            and payment, ensuring all rights are transferred as per the agreed
            terms.
` })} ${renderComponent($$result2, "Accordion", $$Accordion, { "name": "faqs", "title": "Where is the software hosted?" }, { "default": ($$result3) => renderTemplate`
I can host the software on platforms like AWS, GCP, Vercel, or any
            preferred hosting service as per your requirements. If you have a
            preferred hosting environment or need assistance selecting one, I
            can help with that as well.
` })} ${renderComponent($$result2, "Accordion", $$Accordion, { "name": "faqs", "title": "Do you provide maintenance and post-project support?" }, { "default": ($$result3) => renderTemplate`
Yes, I offer maintenance and post-project support. This can include
            bug fixes, updates, enhancements, and any other assistance needed
            after project completion, based on the terms outlined in the
            contract.
` })} ${renderComponent($$result2, "Accordion", $$Accordion, { "name": "faqs", "title": "Are you able to scale if the requirements increase?" }, { "default": ($$result3) => renderTemplate`
Yes, I can scale to meet growing requirements. Whether it's
            increasing the scope, adding features, or handling larger workloads,
            I can adjust resources and plans accordingly to ensure smooth
            progress and performance.
` })} ${renderComponent($$result2, "Accordion", $$Accordion, { "name": "faqs", "title": "Do you provide digital marketing services?" }, { "default": ($$result3) => renderTemplate`
I do not offer digital marketing services directly, but I can
            collaborate with trusted professionals or agencies to meet your
            digital marketing needs, including SEO, content marketing, and
            social media strategies.
` })} </div> ` })}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/services/(sections)/_FaqSection.astro", undefined);

const $$Astro$1 = createAstro();
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Heading;
  return renderTemplate`${maybeRenderHead()}<h3${addAttribute([
    "relative md:text-5xl text-3xl text-left mb-12 font-semibold mx-auto max-w-[64rem] opacity-100 max-md:px-6",
    Astro2.props.class
  ], "class:list")}> <div class="mb-2 -ml-2 md:mb-4 mt-32 w-fit text-sm bg-clip-text text-transparent bg-gradient-to-br from-amber-500 to-amber-600 border border-border/20 rounded-full font-bold px-3 py-1 uppercase tracking-wider"> ${Astro2.props.label} </div> ${renderSlot($$result, $$slots["default"])} </h3>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/services/(components)/_Heading.astro", undefined);

const $$PricingSection = createComponent(($$result, $$props, $$slots) => {
  const Benefits = [
    // {
    //     title: "Full Stack <br/> Development",
    //     svg: "/assets/illustrations/full-stack.webm",
    // },
    // {
    //     title: "AI <br/> Development",
    //     svg: "/assets/illustrations/3d-chatbot-head.webm",
    // },
    // {
    //     title: "MVP <br/> Development",
    //     svg: "/assets/illustrations/3d-chatbot-head.webm",
    // },
    {
      title: "Custom Tech <br /> Solutions",
      svg: "/assets/illustrations/3d-chatbot-head.webm"
    },
    {
      title: "3+ years of <br/> Expertise",
      svg: "/assets/illustrations/3d-chatbot-head.webm"
    },
    {
      title: "100% Client Satisfaction",
      svg: "/assets/illustrations/3d-chatbot-head.webm"
    },
    {
      title: "Regular Updates & Timely Delivery",
      svg: "/assets/illustrations/3d-chatbot-head.webm"
    },
    {
      title: "Flexible Timezone & Work Hours",
      svg: "/assets/illustrations/3d-chatbot-head.webm"
    },
    {
      title: "Flexible Payment Terms",
      svg: "/assets/illustrations/3d-chatbot-head.webm"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Heading", $$Heading, { "label": "Pricing" }, { "default": ($$result2) => renderTemplate`How much does it cost?` })} ${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid md:grid-cols-[auto_20rem] max-md:grid-cols-2 gap-4"> <div class="row-span-2 max-md:col-span-2 rounded-2xl bg-bg-primary px-8 py-6"> <div class="grid grid-cols-3 max-md:grid-cols-2 gap-y-8 text-text-primary text-center"> ${Benefits.map((benefit) => renderTemplate`<div>  ${renderComponent($$result2, "Image", $$ResponsiveImage, { "src": getImage(
    "illustrations/client-trophy.png"
  ), "alt": "", "class": "size-28 max-md:size-12 mx-auto" })} <div>${unescapeHTML(benefit.title)}</div> </div>`)} </div> <ul class="text-text-tertiary ml-4 mt-8 *:pt-1 list-disc max-md:text-xs"> <li>Billed on milestones, hourly, or fixed price basis.</li> <li>We request for 50% upfront payment.</li> <li>We support payments in multiple currencies.</li> <!--
                <div popover>
                    {
                        CurrencyConversion.map((currency) => (
                            <div>
                                1 USD = {currency.rate} {currency.currency}
                            </div>
                        ))
                    }
                    <div>
                        These rates are exclusively for reference. Actual rates
                        shall be applicable as per the quote / invoice.
                    </div>
                </div>
                --> </ul> </div> <div class="bg-bg-primary flex flex-col justify-between rounded-2xl px-8 py-6 max-md:px-4 max-md:py-4 border border-border/20"> <div class="text-2xl md:text-4xl text-text-secondary font-semibold"> <div class="max-md:text-xs text-sm text-text-quarternary uppercase tracking-wide mb-2">
Hourly
</div>
USD ${PRICING} </div> <div class="ml-auto max-md:mt-8 w-fit block rounded-full bg-bg-secondary text-text-primary px-4 py-2 text-sm font-medium">
Book a call
</div> </div> <div class="bg-bg-primary flex flex-col justify-between rounded-2xl px-8 py-6 max-md:px-4 max-md:py-4 border border-border/20"> <div class="text-2xl md:text-4xl text-text-secondary font-semibold"> <div class="max-md:text-xs text-sm text-text-quarternary uppercase tracking-wide mb-2">
Fixed Price
</div>
Custom
</div> <div class="ml-auto max-md:mt-8 w-fit block rounded-full bg-bg-secondary text-text-primary px-4 py-2 text-sm font-medium">
Request Quote
</div> </div> </div> ` })}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/services/(sections)/_PricingSection.astro", undefined);

const $$Astro = createAstro();
const $$SkillCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillCard;
  const { label, img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div${addAttribute(cn(
    "w-fit rounded-2xl transition-all duration-300 border-2 border-border/20 bg-white px-8 py-4 text-lg font-semibold text-text-primary hover:text-xl dark:bg-black",
    "hover:bg-emerald-300 hover:[animation-iteration-count:infinite] dark:hover:bg-emerald-800"
  ), "class")}${addAttribute({
    animationName: "apple-wobble",
    transformOrigin: "50% 10%",
    animationDuration: "300ms"
  }, "style")}>  ${img && renderTemplate`<img${addAttribute(img, "src")}${addAttribute(label, "alt")} class="mr-2 inline-block size-6 align-top">`} ${label} </div> </div>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/services/(components)/_SkillCard.astro", undefined);

const $$ServicesSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Heading", $$Heading, { "label": "Services" }, { "default": ($$result2) => renderTemplate` What can we do for you? ` })} ${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-row flex-wrap gap-4"> <!-- <Card2 label="Micro-Frontends" img="" /> --> <!-- <Card2 label="Backend" img="" /> --> <!-- <Card2 label="Micro Services" img="" /> --> <!-- <Card2 label="Real-time and Collaborative UI" img="" /> --> <!-- <Card2 label="Collaboration mode for your users" img="" /> --> ${renderComponent($$result2, "SkillCard", $$SkillCard, { "label": "Scalable real-time updates", "img": "https://em-content.zobj.net/source/apple/391/vibration-mode_1f4f3.png" })} ${renderComponent($$result2, "SkillCard", $$SkillCard, { "label": "Real-time IoT data processing", "img": "https://em-content.zobj.net/source/apple/391/alarm-clock_23f0.png" })} ${renderComponent($$result2, "SkillCard", $$SkillCard, { "label": "Infrastructure", "img": "https://em-content.zobj.net/source/apple/391/building-construction_1f3d7-fe0f.png" })} ${renderComponent($$result2, "SkillCard", $$SkillCard, { "label": "CI/CD setup", "img": "https://em-content.zobj.net/source/apple/391/locomotive_1f682.png" })} ${renderComponent($$result2, "SkillCard", $$SkillCard, { "label": "Auto-scaling", "img": "https://em-content.zobj.net/source/apple/391/control-knobs_1f39b-fe0f.png" })} ${renderComponent($$result2, "SkillCard", $$SkillCard, { "label": "Observability", "img": "https://em-content.zobj.net/source/apple/391/eye-in-speech-bubble_1f441-fe0f-200d-1f5e8-fe0f.png" })} ${renderComponent($$result2, "SkillCard", $$SkillCard, { "label": "Cloud migration", "img": "https://em-content.zobj.net/source/apple/391/sun-behind-cloud_26c5.png" })} ${renderComponent($$result2, "SkillCard", $$SkillCard, { "label": "Cloud cost optimization", "img": "https://em-content.zobj.net/source/apple/391/money-with-wings_1f4b8.png" })} ${renderComponent($$result2, "SkillCard", $$SkillCard, { "label": "Frontend perfomance", "img": "https://em-content.zobj.net/source/apple/391/high-voltage_26a1.png" })} ${renderComponent($$result2, "SkillCard", $$SkillCard, { "label": "Complex upgrades", "img": "https://em-content.zobj.net/source/apple/391/comet_2604-fe0f.png" })} </div> <div class="my-16 text-center text-2xl font-medium text-text-primary">
and much more to create an amazing product!
</div> ` })}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/services/(sections)/_ServicesSection.astro", undefined);

const $$TestimonialSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Heading", $$Heading, { "label": "Testimonials" }, { "default": ($$result2) => renderTemplate`Why people work with me? ` })} ${renderComponent($$result, "Section", $$Section, { "class": "grid md:grid-cols-2 gap-x-16 gap-y-8" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="rounded-2xl border border-border/20 bg-bg-primary p-4"> <div>Strong Technical Foundations</div> <div>Experience with Databases</div> <div>Version Control</div> <div>Soft Skills</div> <div>Cultural Fit</div>  
We develop elegant, custom‑built solutions from start to finish that address
        the big challenges you face building the entire product while also tackling
        your “here‑and‑now” development and optimization needs.
</div>  <div class="rounded-2xl border border-border/20 bg-bg-primary p-4">
Self-motivation and ability to work independently Collaboration skills
        for working with other team members or clients Basic understanding of
        business goals and how technology supports them Ability to suggest
        solutions that align with project objectives
</div> <div class="rounded-2xl border border-border/20 bg-bg-primary p-4 max-md:mb-8"> <div class="mb-4 text-xs font-semibold uppercase text-text-secondary">
My Philosophy
</div> <div class="text-xl font-semibold">μεράκι - Meraki</div> <div class="mt-0.5 text-sm">pronounced: meh-rah-kee</div> <div class="mt-2 text-base">
The soul, creativity, or love put into something; putting your
            essence in your work.
</div> </div> ` })} ${renderComponent($$result, "Testimonials", $$Testimonials, {})} <!-- // Just think of me as your creative bestie. 👯 As a business owner myself, I understand that you can’t do it all. I want to take all things “design” off your plate so you can focus on what you do best. I only work with a handful of clients at a time so that I’m able to dedicate the time and care needed to do my best work.
// You feel comfortable jumping into complex topics immediately
  // Good understanding of APIs and how to properly build them for long-term success
  // A self-starter who works well independently as well as interdependently in a remote environment
  // A motivated person who enjoys working on complex technical problems who does not need to be micro-managed
  // Someone who is looking to grow with us and our product
 --> <!--
Problem-Solving: Ability to design and implement solutions to complex problems.
Communication: Clear and effective communication with clients and team members.
Time Management: Delivering work on time and managing multiple projects efficiently.
Adaptability: Quickly learning new tools or methodologies as required.
Client Collaboration: Understanding client requirements and providing valuable feedback or suggestions.
Documentation: Creating detailed technical documentation for future reference.
-->`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/services/(sections)/_TestimonialSection.astro", undefined);

const $$WorkSection = createComponent(async ($$result, $$props, $$slots) => {
  const FEATURED_PROJECTS = [
    "Platipie",
    "Vasundhara",
    "Hooop Cloud",
    "Blog Platform"
  ];
  const Projects = (await getCollection("projects")).filter(
    (project) => FEATURED_PROJECTS.includes(project.data.title)
  );
  return renderTemplate`${renderComponent($$result, "Heading", $$Heading, { "label": "Works" }, { "default": ($$result2) => renderTemplate` Featured Projects ` })} ${renderComponent($$result, "Section", $$Section, {}, {})} ${renderComponent($$result, "Section", $$Section, { "class:list": ["grid w-full grid-cols-1 gap-6", "md:grid-cols-3 md:gap-8"] }, { "default": ($$result2) => renderTemplate`${Projects.map(({ data: project, id }) => renderTemplate`${maybeRenderHead()}<a${addAttribute(`/projects/${id}`, "href")}${addAttribute([
    "rounded-2xl border border-border/10 bg-bg-primary pl-4 pr-2 py-2",
    "md:px-8 md:py-6 max-md:grid max-md:grid-cols-2 max-md:gap-4"
  ], "class:list")}> <div> <div${addAttribute([
    "text-lg font-semibold text-text-primary",
    "max-md:my-2 md:text-xl"
    // "magic-fade-down delay-1000",
  ], "class:list")}> ${project.title} </div> <p${addAttribute([
    "mt-1 text-xs text-text-tertiary line-clamp-3",
    "md:mt-2 md:text-sm"
  ], "class:list")}> ${project.description} </p> </div>    ${renderComponent($$result2, "Image", $$Image, { "src": getImage("illustrations/laptop-with-notes.png"), "alt": "", "class:list": [
    "mx-auto bg-background rounded-xl block h-36 w-full object-cover",
    "md:mt-4 md:h-72"
  ] })} </a>`)}` })} <div class="text-center text-sm text-text-quarternary py-3 mt-4 px-5 rounded-full bg-bg-primary w-fit mx-auto"> <!-- Cursor Icon -->
Click on project to view details
</div>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/services/(sections)/_WorkSection.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Services";
  const description = "Services";
  const keywords = ["Services"];
  const SchemaMarkup = [getSchemaMarkup("person")];
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$Index$1, { "title": title, "keywords": keywords, "description": description, "schemaMarkup": SchemaMarkup }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "ServicesSection", $$ServicesSection, {})}  ${renderComponent($$result2, "WorkSection", $$WorkSection, {})} ${renderComponent($$result2, "PricingSection", $$PricingSection, {})} ${renderComponent($$result2, "TestimonialSection", $$TestimonialSection, {})} ${renderComponent($$result2, "FaqSection", $$FaqSection, {})} ${renderComponent($$result2, "BookCta", $$BookCta, {})} ${renderComponent($$result2, "Dock", $$Dock, {})} ` })}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/services/index.astro", undefined);

const $$file = "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
