const timeline = new Proxy({"src":"/_astro/timeline.Dwjd-6Kz.png","width":3000,"height":3000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/timeline.png";
							}
							
							return target[name];
						}
					});

export { timeline as default };
