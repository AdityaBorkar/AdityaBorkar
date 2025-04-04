const creditCards = new Proxy({"src":"/_astro/credit-cards.DktkVv7k.png","width":368,"height":243,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/credit-cards.png";
							}
							
							return target[name];
						}
					});

export { creditCards as default };
