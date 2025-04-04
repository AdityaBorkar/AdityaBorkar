const greyMetalGears = new Proxy({"src":"/_astro/grey-metal-gears.C9vJce4B.png","width":368,"height":317,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/grey-metal-gears.png";
							}
							
							return target[name];
						}
					});

export { greyMetalGears as default };
