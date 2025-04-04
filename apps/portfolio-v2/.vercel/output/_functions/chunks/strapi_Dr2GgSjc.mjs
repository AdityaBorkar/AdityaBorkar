const strapi = new Proxy({"src":"/_astro/strapi.qWzWwL9n.webp","width":320,"height":320,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/logo/strapi.webp";
							}
							
							return target[name];
						}
					});

export { strapi as default };
