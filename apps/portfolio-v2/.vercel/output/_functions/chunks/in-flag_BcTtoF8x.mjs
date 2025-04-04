const inFlag = new Proxy({"src":"/_astro/in-flag.Bjopnv7S.png","width":160,"height":160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/emoji/in-flag.png";
							}
							
							return target[name];
						}
					});

export { inFlag as default };
