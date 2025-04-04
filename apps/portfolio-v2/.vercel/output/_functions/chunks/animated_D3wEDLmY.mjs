const animated = new Proxy({"src":"/_astro/animated.BTXCyjV8.gif","width":400,"height":400,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/animated.gif";
							}
							
							return target[name];
						}
					});

export { animated as default };
