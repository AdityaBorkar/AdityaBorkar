const laptopOnAbstract = new Proxy({"src":"/_astro/laptop-on-abstract.D3qGTuWO.png","width":368,"height":472,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/laptop-on-abstract.png";
							}
							
							return target[name];
						}
					});

export { laptopOnAbstract as default };
