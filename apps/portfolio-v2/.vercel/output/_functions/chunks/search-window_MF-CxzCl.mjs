const searchWindow = new Proxy({"src":"/_astro/search-window.nv86bq7D.png","width":368,"height":303,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/search-window.png";
							}
							
							return target[name];
						}
					});

export { searchWindow as default };
