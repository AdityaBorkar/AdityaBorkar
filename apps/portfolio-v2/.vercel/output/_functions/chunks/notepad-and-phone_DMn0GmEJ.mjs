const notepadAndPhone = new Proxy({"src":"/_astro/notepad-and-phone.Cb4kd37W.png","width":368,"height":319,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/notepad-and-phone.png";
							}
							
							return target[name];
						}
					});

export { notepadAndPhone as default };
