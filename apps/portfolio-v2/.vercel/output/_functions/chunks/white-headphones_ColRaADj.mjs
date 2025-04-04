const whiteHeadphones = new Proxy({"src":"/_astro/white-headphones.DzVPFlhT.png","width":368,"height":465,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/white-headphones.png";
							}
							
							return target[name];
						}
					});

export { whiteHeadphones as default };
