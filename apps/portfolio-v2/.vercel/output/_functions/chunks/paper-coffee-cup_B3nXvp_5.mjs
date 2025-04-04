const paperCoffeeCup = new Proxy({"src":"/_astro/paper-coffee-cup.Bu3rVZMc.png","width":368,"height":452,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/paper-coffee-cup.png";
							}
							
							return target[name];
						}
					});

export { paperCoffeeCup as default };
