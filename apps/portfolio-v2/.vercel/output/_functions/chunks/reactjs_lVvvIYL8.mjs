const reactjs = new Proxy({"src":"/_astro/reactjs.xISMrOxb.png","width":512,"height":445,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/logo/reactjs.png";
							}
							
							return target[name];
						}
					});

export { reactjs as default };
