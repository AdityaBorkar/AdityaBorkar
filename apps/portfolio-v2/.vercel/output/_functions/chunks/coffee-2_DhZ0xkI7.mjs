const coffee2 = new Proxy({"src":"/_astro/coffee-2.Dptgg397.jpeg","width":1200,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/coffee-2.jpeg";
							}
							
							return target[name];
						}
					});

export { coffee2 as default };
