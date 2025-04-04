const framer = new Proxy({"src":"/_astro/framer.DdpAG2p4.webp","width":2000,"height":2000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/logo/framer.webp";
							}
							
							return target[name];
						}
					});

export { framer as default };
