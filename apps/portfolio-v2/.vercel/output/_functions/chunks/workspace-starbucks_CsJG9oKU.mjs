const workspaceStarbucks = new Proxy({"src":"/_astro/workspace-starbucks.DX6c_OqG.jpeg","width":1599,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/workspace-starbucks.jpeg";
							}
							
							return target[name];
						}
					});

export { workspaceStarbucks as default };
