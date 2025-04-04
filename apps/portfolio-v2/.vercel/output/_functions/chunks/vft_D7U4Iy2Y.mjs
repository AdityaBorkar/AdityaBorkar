const vft = new Proxy({"src":"/_astro/vft._jJmLl72.webp","width":1366,"height":625,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/logo/vft.webp";
							}
							
							return target[name];
						}
					});

export { vft as default };
