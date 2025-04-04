const contract = new Proxy({"src":"/_astro/contract.aG6KwkVp.png","width":368,"height":325,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/contract.png";
							}
							
							return target[name];
						}
					});

export { contract as default };
