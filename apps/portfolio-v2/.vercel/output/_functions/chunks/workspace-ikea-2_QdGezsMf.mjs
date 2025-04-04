const workspaceIkea2 = new Proxy({"src":"/_astro/workspace-ikea-2.CmxV8jw5.jpeg","width":1599,"height":1200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/workspace-ikea-2.jpeg";
							}
							
							return target[name];
						}
					});

export { workspaceIkea2 as default };
