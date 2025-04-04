const vrHeadsetPro = new Proxy({"src":"/_astro/vr-headset-pro.C2bzfGx6.png","width":368,"height":226,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/vr-headset-pro.png";
							}
							
							return target[name];
						}
					});

export { vrHeadsetPro as default };
