const robotAssistant = new Proxy({"src":"/_astro/robot-assistant.BAOB9bKy.png","width":368,"height":447,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/robot-assistant.png";
							}
							
							return target[name];
						}
					});

export { robotAssistant as default };
