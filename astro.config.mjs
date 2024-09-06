import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import aws from "astro-sst";

import react from "@astrojs/react";

export default defineConfig({
  // output: "dist",
  adapter: aws(),
  integrations: [tailwind({ applyBaseStyles: false }), react()],
});

// TODO - million.js
