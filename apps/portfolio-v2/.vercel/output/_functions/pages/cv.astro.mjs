import { c as createComponent } from '../chunks/astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import 'clsx';
import fs from 'node:fs';
import nodePath from 'node:path';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const filePath = nodePath.resolve("./public/resume.pdf");
  const file = await fs.promises.readFile(filePath);
  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="resume.pdf"'
    }
  });
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/cv/index.astro", undefined);

const $$file = "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/pages/cv/index.astro";
const $$url = "/cv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
