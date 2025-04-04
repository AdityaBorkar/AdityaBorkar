const deskCats3 = new Proxy({"src":"/_astro/desk-cats-3.D4QOYia6.jpeg","width":1200,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/desk-cats-3.jpeg";
							}
							
							return target[name];
						}
					});

export { deskCats3 as default };
