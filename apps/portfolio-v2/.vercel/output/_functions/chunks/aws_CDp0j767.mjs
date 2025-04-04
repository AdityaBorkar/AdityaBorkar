const aws = new Proxy({"src":"/_astro/aws.CXYgkphT.png","width":512,"height":307,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/logo/aws.png";
							}
							
							return target[name];
						}
					});

export { aws as default };
