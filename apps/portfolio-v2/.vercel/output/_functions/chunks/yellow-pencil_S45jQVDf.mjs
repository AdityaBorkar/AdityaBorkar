const yellowPencil = new Proxy({"src":"/_astro/yellow-pencil.tqvbLVq2.png","width":368,"height":144,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/yellow-pencil.png";
							}
							
							return target[name];
						}
					});

export { yellowPencil as default };
