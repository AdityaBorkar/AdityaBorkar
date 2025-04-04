const clientTrophy = new Proxy({"src":"/_astro/client-trophy.DbxTQE_U.png","width":1809,"height":1810,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/client-trophy.png";
							}
							
							return target[name];
						}
					});

export { clientTrophy as default };
