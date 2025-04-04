const workspaceIkea1 = new Proxy({"src":"/_astro/workspace-ikea-1.Bg0cunqj.jpeg","width":1200,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/workspace-ikea-1.jpeg";
							}
							
							return target[name];
						}
					});

export { workspaceIkea1 as default };
