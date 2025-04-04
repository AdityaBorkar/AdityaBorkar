const personalNature = new Proxy({"src":"/_astro/personal-nature.DmiQ2u3A.jpeg","width":1080,"height":1053,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/personal-nature.jpeg";
							}
							
							return target[name];
						}
					});

export { personalNature as default };
