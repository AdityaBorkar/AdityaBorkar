import { c as createComponent, r as renderTemplate, b as renderSlot, a as addAttribute, m as maybeRenderHead, d as createAstro } from './astro/server_BO6KBylT.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$ScheduleMeetBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ScheduleMeetBtn;
  const { class: className } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<button type="submit"', ` data-cal-namespace="tech" data-cal-link="aditya-borkar/tech" data-cal-config="{&quot;layout&quot;:&quot;month_view&quot;}"> <!-- data-cal-config='{"theme":"light"}' --> `, ' </button> <!-- Contact Form: Collect only necessary data (e.g., name, email) with explicit user consent and explain its use. --> <script>\n  (function (C, A, L) {\n    let p = function (a, ar) {\n      a.q.push(ar);\n    };\n    let d = C.document;\n    C.Cal =\n      C.Cal ||\n      function () {\n        let cal = C.Cal;\n        let ar = arguments;\n        if (!cal.loaded) {\n          cal.ns = {};\n          cal.q = cal.q || [];\n          d.head.appendChild(d.createElement("script")).src = A;\n          cal.loaded = true;\n        }\n        if (ar[0] === L) {\n          const api = function () {\n            p(api, arguments);\n          };\n          const namespace = ar[1];\n          api.q = api.q || [];\n          if (typeof namespace === "string") {\n            cal.ns[namespace] = cal.ns[namespace] || api;\n            p(cal.ns[namespace], ar);\n            p(cal, ["initNamespace", namespace]);\n          } else p(cal, ar);\n          return;\n        }\n        p(cal, ar);\n      };\n  })(window, "https://app.cal.com/embed/embed.js", "init");\n  Cal("init", "tech", { origin: "https://cal.com" });\n\n  Cal.ns.tech("ui", { hideEventTypeDetails: false, layout: "month_view" });\n<\/script>'])), maybeRenderHead(), addAttribute(className, "class"), renderSlot($$result, $$slots["default"]));
}, "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/components/ScheduleMeetBtn.astro", undefined);

export { $$ScheduleMeetBtn as $ };
