const letter = new Proxy({"src":"/_astro/letter.CY3RoAgb.jpeg","width":1599,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/letter.jpeg";
							}
							
							return target[name];
						}
					});

export { letter as default };
