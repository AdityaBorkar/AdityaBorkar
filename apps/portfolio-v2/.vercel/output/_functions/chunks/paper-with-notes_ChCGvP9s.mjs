const paperWithNotes = new Proxy({"src":"/_astro/paper-with-notes.DyCDATJm.png","width":368,"height":282,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/paper-with-notes.png";
							}
							
							return target[name];
						}
					});

export { paperWithNotes as default };
