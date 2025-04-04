const city = new Proxy({"src":"/_astro/city.Bu5aW1e2.jpeg","width":899,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/city.jpeg";
							}
							
							return target[name];
						}
					});

export { city as default };
