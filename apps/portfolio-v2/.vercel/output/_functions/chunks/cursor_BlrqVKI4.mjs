const cursor = new Proxy({"src":"/_astro/cursor.C6c6wXIG.png","width":600,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/cursor.png";
							}
							
							return target[name];
						}
					});

export { cursor as default };
