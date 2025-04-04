const trophy = new Proxy({"src":"/_astro/trophy.KXFIP348.png","width":368,"height":390,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/trophy.png";
							}
							
							return target[name];
						}
					});

export { trophy as default };
