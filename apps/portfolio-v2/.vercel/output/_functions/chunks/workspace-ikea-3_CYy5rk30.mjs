const workspaceIkea3 = new Proxy({"src":"/_astro/workspace-ikea-3.DEMbQ7fC.jpeg","width":1200,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/workspace-ikea-3.jpeg";
							}
							
							return target[name];
						}
					});

export { workspaceIkea3 as default };
