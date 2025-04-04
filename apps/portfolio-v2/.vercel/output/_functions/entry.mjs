import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BWCgiD5u.mjs';
import { manifest } from './manifest_Drpc14_C.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/about.astro.mjs');
const _page4 = () => import('./pages/chat.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/cv.astro.mjs');
const _page7 = () => import('./pages/policy.astro.mjs');
const _page8 = () => import('./pages/projects/_slug_.astro.mjs');
const _page9 = () => import('./pages/projects.astro.mjs');
const _page10 = () => import('./pages/resume.astro.mjs');
const _page11 = () => import('./pages/services.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["../../node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["../../node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/about/index.astro", _page3],
    ["src/pages/chat/index.astro", _page4],
    ["src/pages/contact/index.astro", _page5],
    ["src/pages/cv/index.astro", _page6],
    ["src/pages/policy/index.astro", _page7],
    ["src/pages/projects/[slug]/index.astro", _page8],
    ["src/pages/projects/index.astro", _page9],
    ["src/pages/resume/index.astro", _page10],
    ["src/pages/services/index.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "b05c431d-dca0-4200-b820-688322217b32",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
