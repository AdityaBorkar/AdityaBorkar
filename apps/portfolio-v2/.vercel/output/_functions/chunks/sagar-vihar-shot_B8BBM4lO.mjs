const sagarViharShot = new Proxy({"src":"/_astro/sagar-vihar-shot.BEin-ZAx.jpeg","width":900,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/personal/sagar-vihar-shot.jpeg";
							}
							
							return target[name];
						}
					});

export { sagarViharShot as default };
