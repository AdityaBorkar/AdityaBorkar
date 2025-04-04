const apollo = new Proxy({"src":"/_astro/apollo.CxcnkhUT.png","width":368,"height":489,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/apollo.png";
							}
							
							return target[name];
						}
					});

export { apollo as default };
