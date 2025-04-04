const winking_face = new Proxy({"src":"/_astro/winking_face.DFdv9oXf.gif","width":128,"height":128,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/winking_face.gif";
							}
							
							return target[name];
						}
					});

export { winking_face as default };
