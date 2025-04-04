const coda = new Proxy({"src":"/_astro/coda.fXeQXfGb.webp","width":320,"height":320,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/logo/coda.webp";
							}
							
							return target[name];
						}
					});

export { coda as default };
