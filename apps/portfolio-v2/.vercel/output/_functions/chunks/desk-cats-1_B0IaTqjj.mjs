const deskCats1 = new Proxy({"src":"/_astro/desk-cats-1.INTraS9Z.jpeg","width":1599,"height":899,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/desk-cats-1.jpeg";
							}
							
							return target[name];
						}
					});

export { deskCats1 as default };
