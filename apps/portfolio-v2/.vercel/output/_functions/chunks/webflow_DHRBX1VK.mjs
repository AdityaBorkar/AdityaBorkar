const webflow = new Proxy({"src":"/_astro/webflow.DzZf3eqz.png","width":1080,"height":1081,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/logo/webflow.png";
							}
							
							return target[name];
						}
					});

export { webflow as default };
