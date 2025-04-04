const nmMarathon = new Proxy({"src":"/_astro/nm-marathon.DZ6iNxEX.jpeg","width":3024,"height":4032,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/nm-marathon.jpeg";
							}
							
							return target[name];
						}
					});

export { nmMarathon as default };
