const handsWithPhonePinched = new Proxy({"src":"/_astro/hands-with-phone-pinched.DOJBzPpF.png","width":368,"height":255,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/hands-with-phone-pinched.png";
							}
							
							return target[name];
						}
					});

export { handsWithPhonePinched as default };
