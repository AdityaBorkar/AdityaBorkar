const dataSecurity = new Proxy({"src":"/_astro/data-security.Dpnn_d-Y.png","width":368,"height":269,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/data-security.png";
							}
							
							return target[name];
						}
					});

export { dataSecurity as default };
