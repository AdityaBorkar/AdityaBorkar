const portfolioV2 = new Proxy({"src":"/_astro/portfolio-v2.Br4LP7jN.png","width":1686,"height":959,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/mockups/portfolio-v2.png";
							}
							
							return target[name];
						}
					});

export { portfolioV2 as default };
