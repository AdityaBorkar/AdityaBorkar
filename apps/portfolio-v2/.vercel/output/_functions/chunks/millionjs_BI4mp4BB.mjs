const millionjs = new Proxy({"src":"/_astro/millionjs.DWEgSNng.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/logo/millionjs.jpg";
							}
							
							return target[name];
						}
					});

export { millionjs as default };
