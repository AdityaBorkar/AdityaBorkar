const nmhqCycling = new Proxy({"src":"/_astro/nmhq-cycling.4hA3nHpL.jpeg","width":900,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/nmhq-cycling.jpeg";
							}
							
							return target[name];
						}
					});

export { nmhqCycling as default };
