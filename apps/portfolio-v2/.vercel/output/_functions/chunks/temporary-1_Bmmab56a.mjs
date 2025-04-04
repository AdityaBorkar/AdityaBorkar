const temporary1 = new Proxy({"src":"/_astro/temporary-1.w0lsofQ-.jpeg","width":899,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/temporary-1.jpeg";
							}
							
							return target[name];
						}
					});

export { temporary1 as default };
