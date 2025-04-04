const javascript = new Proxy({"src":"/_astro/javascript.BVnD1dVH.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/logo/javascript.png";
							}
							
							return target[name];
						}
					});

export { javascript as default };
