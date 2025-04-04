const contentful = new Proxy({"src":"/_astro/contentful.CTWoYDRR.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/logo/contentful.png";
							}
							
							return target[name];
						}
					});

export { contentful as default };
