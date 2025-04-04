const profile = new Proxy({"src":"/_astro/profile.CNbzNiTk.png","width":375,"height":375,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/profile.png";
							}
							
							return target[name];
						}
					});

export { profile as default };
