const whiteScreenLaptop = new Proxy({"src":"/_astro/white-screen-laptop.DJSr-mU2.png","width":368,"height":299,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/white-screen-laptop.png";
							}
							
							return target[name];
						}
					});

export { whiteScreenLaptop as default };
