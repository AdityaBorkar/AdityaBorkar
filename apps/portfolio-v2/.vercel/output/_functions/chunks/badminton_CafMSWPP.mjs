const badminton = new Proxy({"src":"/_astro/badminton.B0BObUsq.jpeg","width":1200,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/badminton.jpeg";
							}
							
							return target[name];
						}
					});

export { badminton as default };
