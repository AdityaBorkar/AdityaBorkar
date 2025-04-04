import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderComponent, d as createAstro, b as renderSlot } from '../chunks/astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import { $ as $$ResponsiveImage } from '../chunks/_astro_assets_CrqN3lCC.mjs';
import { $ as $$ButtonLink } from '../chunks/ButtonLink_DFWxUghA.mjs';
import { g as getImage, $ as $$Icon } from '../chunks/Icon_Bat0AmsK.mjs';
import { $ as $$Index$1 } from '../chunks/index_BR4l97ZW.mjs';
import { g as getSchemaMarkup } from '../chunks/utils_DVGZa7EU.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$BentoImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BentoImage;
  const img = await getImage(Astro2.props.src);
  const fullPath = img.default.src.split("/");
  const relativePath = fullPath.slice(-3).join("/");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(Astro2.props.wrapperClass, "class")}> ${renderComponent($$result, "BentoImageReact", null, { "client:only": "react", "src": relativePath, "caption": Astro2.props.caption, "client:component-hydration": "only", "client:component-path": "@/pages/about/_BentoImageReact", "client:component-export": "default" })} </div>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/about/_BentoImage.astro", undefined);

const $$Astro$1 = createAstro();
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Heading;
  return renderTemplate`${maybeRenderHead()}<h3${addAttribute([
    "mt-16 text-lg text-text-primary font-semibold",
    Astro2.props.class
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </h3>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/about/_Heading.astro", undefined);

const $$Astro = createAstro();
const $$Paragraph = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Paragraph;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute([
    "mt-4 text-pretty text-sm text-text-tertiary",
    "md:text-base",
    className
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/about/_Paragraph.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$Index$1, { "title": "Aditya Borkar - Freelance Product Engineer & Full-Stack Developer", "description": "Meet Aditya Borkar, a passionate Product Developer and Full-Stack Engineer from Navi Mumbai. With expertise in web development, UX design, and AI, I create innovative solutions that help businesses thrive. Learn about my journey, projects and let's connect over coffee!", "keywords": [
    // Core Professional Identity
    "freelance product engineer",
    "freelance full stack developer",
    "remote developer india",
    "hire product developer",
    // Expertise Areas
    "web application development",
    "custom software development",
    "frontend development freelancer",
    "backend development consultant",
    "AI development services",
    "UX engineering",
    // Technology Stack
    "react developer for hire",
    "nextjs expert",
    "typescript developer",
    "nodejs developer",
    "aws certified developer",
    // Service Types
    "product development consulting",
    "technical architecture consulting",
    "MVP development",
    "startup technology consultant",
    "software modernization expert",
    // Location & Work Model
    "indian freelance developer",
    "navi mumbai developer",
    "remote software consultant",
    "offshore development partner",
    // Qualifications & Trust Signals
    "toptal vetted developer",
    "google developer expert",
    "aws certified engineer",
    "medusa expert developer",
    // Industry Focus
    "saas development",
    "enterprise software development",
    "startup product development",
    "b2b software solutions"
  ], "schemaMarkup": [getSchemaMarkup("person")] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto w-full px-4 md:w-[80vw] md:max-w-[48rem] py-20"> <div class="mb-8 flex flex-col justify-between md:items-center md:flex-row magic-fade-down delay-300"> <h2 class="text-2xl font-semibold"> <!-- TODO: Animate: Wave Effect --> <!-- TODO: Animate: Once on entry + On hover group --> ${renderComponent($$result2, "Image", $$ResponsiveImage, { "src": getImage("emoji/waving-hand.png"), "alt": "", "class": "-mt-1 mr-2 md:mr-4 inline-block h-10 w-fit" })}
Hi, I'm Aditya Borkar
</h2> <!-- target="_blank" --> ${renderComponent($$result2, "ButtonLink", $$ButtonLink, { "href": "/cv", "variant": "secondary", "size": "md", "class": "max-sm:mt-6 w-fit" }, { "default": ($$result3) => renderTemplate`  ${renderComponent($$result3, "Icon", $$Icon, { "icon": "ArrowUpRight", "class": "-mt-1 ml-1 inline-block size-4" })}
Resume / CV
` })} </div> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "class": "magic-fade-down delay-500" }, { "default": ($$result3) => renderTemplate`
I engineer interfaces, products, and systems, from early concepts to
      full-fledged products, by partnering closely with designers, engineering
      peers and customers. I have done a bit of everything from web design, UX,
      front-end, back-end, hardware, and AI development. My goal is to use
      technology to help people thrive in their work and create delightful human
      experiences.
` })} <div${addAttribute([
    "mx-auto mt-8 grid h-[120vw] w-full gap-4 md:h-[60vw] lg:max-h-[40rem]",
    "grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 "
  ], "class:list")}> <!-- TODO: class="delay-700" --> ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/desk-cats-1.jpeg", "caption": "Neighbor's cats \u{1F431}\u{1F431} seem to be enjoying my workspace", "wrapperClass": "" })} ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/sagar-vihar-shot.jpeg", "caption": "A glimpse of my city \u{1F3D9}\uFE0F - Navi Mumbai", "wrapperClass": "md:row-span-2 delay-800" })} ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/badminton.jpeg", "caption": "I love to play badminton! Let's play sometime? \u{1F3F8}\u{1F3F8}", "wrapperClass": "delay-900" })} <!-- <BentoImage
        src="personal/nm-marathon.jpeg"
        caption="🏃🏻‍♂️ My first Run - finished 10km in 53 minutes (Pace: 5:17/km)"
        wrapperClass="row-span-2 delay-700"
      /> --> ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/coffee-1.jpeg", "caption": "Hello World! \u{1F30D}  ", "wrapperClass": "row-span-2 delay-700" })} ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/workspace-ikea-1.jpeg", "caption": "Quick snacking with a clint", "wrapperClass": "row-span-2 delay-1000" })} <!-- <BentoImage
        src="personal/personal-nature.jpeg"
        caption="Random shot near a forest 🌲 in Navi Mumbai"
        wrapperClass="row-span-2 delay-1000"
      /> --> ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/coffee-2.jpeg", "caption": "I love to brew and share coffee! Come on, let's meet up! \u{1F375}\u{1F375}", "wrapperClass": "delay-1100" })} </div> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`How did I discover Tech?` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, {}, { "default": ($$result3) => renderTemplate`
Technology has always fascinated me—not just for what it is, but for what
      it can do to transform lives. At 14, I built my first HTML-JS solution to
      automate my dad's business, reducing man-hours by a staggering 80%. That
      small success fueled my passion, pushing me to learn PHP and MySQL to
      build more robust software. Starting with my family, I semi-automated our
      traditional transportation business. I also had the privilege of working
      with the Raspberry Pi Foundation on the NTTT and Translation Programme,
      helping make computing accessible to underprivileged children. As I
      explored further, I picked up Python to automate invoice generation for
      our family business, eventually moving 80% of its processes online.
      exploring Java, Python, PHP, C++, and JavaScript. JavaScript, in
      particular, felt revolutionary—it empowered me to build beautiful,
      high-performance user interfaces and ship cross-platform apps within days.
      With the rise of PWAs and cutting-edge web capabilities, I chose to
      specialize in Software Engineering on the Web. I landed my first gig for a
      US based client when I was 17. At the age of 19, I took a brief break to
      explore and specialize in product development and customer experience.
` })} <div${addAttribute([
    "mx-auto mt-8 grid h-[50vw] w-full gap-4 md:max-h-[12rem]",
    "grid-cols-3 grid-rows-1 max-md:grid-cols-2 max-md:grid-rows-2"
  ], "class:list")}> ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/coffee-1.jpeg", "caption": "I love to brew and share coffee! Come on, let's meet up! \u{1F375}\u{1F375}", "wrapperClass": "max-md:row-span-2" })} ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/letter.jpeg", "caption": "A letter from my friend sent from Taiwan \u2764\uFE0F", "wrapperClass": "" })} ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/workspace-starbucks.jpeg", "caption": "I love to brew and share coffee! Come on, let's meet up! \u{1F375}\u{1F375}", "wrapperClass": "" })} </div> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`My journey towards Product Engineer` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, {}, { "default": ($$result3) => renderTemplate`
My passion for product development stems from the joy of creating. I
      started working on products that I wanted to use daily (like a second
      brain, etc - check my projects). The process of creating led me to
      discover the field. Now, The joy of creating exceptional products is what
      drives me.
` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, {}, { "default": ($$result3) => renderTemplate`
I love to set high-standards for software, and make them feel magical,
      fluid, and joy to use. I aspire to build products that are fast, deeply
      integrated yet open, and seamless. I also love exploring the latest
      advancements in web technology to create delightful, high-performance
      experiences.
` })} <div${addAttribute([
    "mx-auto mt-8 grid h-[50vw] w-full gap-4 md:max-h-[12rem]",
    "grid-cols-3 grid-rows-1 max-md:grid-cols-2 max-md:grid-rows-2"
  ], "class:list")}> ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/coffee-1.jpeg", "caption": "I love to brew and share coffee! Come on, let's meet up! \u{1F375}\u{1F375}", "wrapperClass": "max-md:row-span-2" })} ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/letter.jpeg", "caption": "A letter from my friend sent from Taiwan \u2764\uFE0F", "wrapperClass": "" })} ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/workspace-starbucks.jpeg", "caption": "I love to brew and share coffee! Come on, let's meet up! \u{1F375}\u{1F375}", "wrapperClass": "" })} </div> ${renderComponent($$result2, "Heading", $$Heading, {}, { "default": ($$result3) => renderTemplate`Things I do in my free time!` })} ${renderComponent($$result2, "Paragraph", $$Paragraph, {}, { "default": ($$result3) => renderTemplate`
I love to engage in sports - badminton, pickleball, cycling, running,
      swimming, chess. I also love to brew coffee and spend time with my
      friends. Alongside, I love discovering new things and seeking knowledge,
      applying it to my lifestyle in some way. I recently started running and
<a target="_blank" href="https://www.sportstimingsolutions.in/share.php?event_id=84982&bib=10165" class="font-medium underline underline-offset-4">completed 10km at India's only sea-bridge marathon</a>. You can check my stats on
<a target="_blank" href="https://www.strava.com/athletes/aditya-borkar" class="font-medium underline underline-offset-4">Strava</a>.
` })} <div${addAttribute([
    "mx-auto mt-8 grid h-[120vw] w-full gap-4 md:h-[60vw] lg:max-h-[40rem]",
    "grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3"
  ], "class:list")}> ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/desk-cats-2.jpeg", "caption": "Daily dose of serotonin \u{1F60A}", "wrapperClass": "" })} ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/nmhq-cycling.jpeg", "caption": "\u{1F6B4}\u{1F3FB}\u200D\u2642\uFE0F Sun-downer cycling ride to the City Head-Quarters \u{1F3E2}", "wrapperClass": "md:row-span-2" })} ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/desk-cats-3.jpeg", "caption": "She \u{1F431}\u{1F431} is my debugger!", "wrapperClass": "" })} ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/city.jpeg", "caption": "A glimpse of my city \u{1F3D9}\uFE0F - Navi Mumbai", "wrapperClass": "row-span-2" })} ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/workspace-ikea-1.jpeg", "caption": "My temporary workspace \u{1F4BB}", "wrapperClass": "row-span-2" })} ${renderComponent($$result2, "BentoImage", $$BentoImage, { "src": "personal/workspace-ikea-3.jpeg", "caption": "Come on, let's work together! \u{1F91D}", "wrapperClass": "" })} </div> </main> ` })}`;
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/about/index.astro", undefined);

const $$file = "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
