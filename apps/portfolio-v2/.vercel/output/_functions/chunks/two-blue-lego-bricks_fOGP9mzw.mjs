const twoBlueLegoBricks = new Proxy({"src":"/_astro/two-blue-lego-bricks.CdmF8rZ0.png","width":368,"height":533,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/two-blue-lego-bricks.png";
							}
							
							return target[name];
						}
					});

export { twoBlueLegoBricks as default };
