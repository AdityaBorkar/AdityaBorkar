const laptopWithNotes = new Proxy({"src":"/_astro/laptop-with-notes.tscOTUoN.png","width":368,"height":377,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/laptop-with-notes.png";
							}
							
							return target[name];
						}
					});

export { laptopWithNotes as default };
