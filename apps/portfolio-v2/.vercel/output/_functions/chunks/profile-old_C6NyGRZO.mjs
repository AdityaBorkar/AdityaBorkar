const profileOld = new Proxy({"src":"/_astro/profile-old.B8Tc9HBc.png","width":640,"height":640,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/profile-old.png";
							}
							
							return target[name];
						}
					});

export { profileOld as default };
