const wavingHand = new Proxy({"src":"/_astro/waving-hand.YsZHCURh.png","width":160,"height":160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/emoji/waving-hand.png";
							}
							
							return target[name];
						}
					});

export { wavingHand as default };
