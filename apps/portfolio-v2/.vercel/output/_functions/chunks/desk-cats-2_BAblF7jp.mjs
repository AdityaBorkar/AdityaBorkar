const deskCats2 = new Proxy({"src":"/_astro/desk-cats-2.BJ8Zo0_f.jpeg","width":899,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/desk-cats-2.jpeg";
							}
							
							return target[name];
						}
					});

export { deskCats2 as default };
