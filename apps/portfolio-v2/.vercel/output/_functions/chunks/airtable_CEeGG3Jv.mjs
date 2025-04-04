const airtable = new Proxy({"src":"/_astro/airtable.C2RVOBTM.png","width":300,"height":251,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/logo/airtable.png";
							}
							
							return target[name];
						}
					});

export { airtable as default };
