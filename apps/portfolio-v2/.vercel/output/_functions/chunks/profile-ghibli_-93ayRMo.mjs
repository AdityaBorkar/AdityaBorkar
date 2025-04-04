const profileGhibli = new Proxy({"src":"/_astro/profile-ghibli.D3MtVhiF.jpg","width":375,"height":375,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/profile-ghibli.jpg";
							}
							
							return target[name];
						}
					});

export { profileGhibli as default };
