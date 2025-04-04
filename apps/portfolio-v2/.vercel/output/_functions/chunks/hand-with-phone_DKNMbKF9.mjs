const handWithPhone = new Proxy({"src":"/_astro/hand-with-phone.jfFSJASb.png","width":368,"height":557,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/hand-with-phone.png";
							}
							
							return target[name];
						}
					});

export { handWithPhone as default };
