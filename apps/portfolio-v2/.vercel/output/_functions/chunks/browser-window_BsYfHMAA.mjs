const browserWindow = new Proxy({"src":"/_astro/browser-window.DECAx_Y2.png","width":368,"height":292,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/browser-window.png";
							}
							
							return target[name];
						}
					});

export { browserWindow as default };
