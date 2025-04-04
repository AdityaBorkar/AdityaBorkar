const cloudflare = new Proxy({"src":"/_astro/cloudflare.CVH5s24F.png","width":600,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/logo/cloudflare.png";
							}
							
							return target[name];
						}
					});

export { cloudflare as default };
