/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "personal-website",
      home: "aws",
      providers: {
        aws: { region: "ap-south-1" },
        cloudflare: true,
      },
      removal: input?.stage === "production" ? "retain" : "remove",
    };
  },
  async run() {
    new sst.aws.Astro("website-v1", {
      // warm: 1,
      dev: {
        command: "astro dev",
      },
      domain: {
        name: "adityaborkar.com",
        redirects: ["www.adityaborkar.com"],
        dns: sst.cloudflare.dns({
          zone: process.env.CLOUDFLARE_ZONE_ID,
        }),
      },
    });
  },
});
