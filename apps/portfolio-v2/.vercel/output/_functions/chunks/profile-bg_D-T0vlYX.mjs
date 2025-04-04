const profileBg = new Proxy({"src":"/_astro/profile-bg.BAQpFpMs.png","width":1215,"height":1215,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/profile-bg.png";
							}
							
							return target[name];
						}
					});

export { profileBg as default };
