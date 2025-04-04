const coffee1 = new Proxy({"src":"/_astro/coffee-1.Dk0Ipmyt.jpeg","width":1200,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/coffee-1.jpeg";
							}
							
							return target[name];
						}
					});

export { coffee1 as default };
