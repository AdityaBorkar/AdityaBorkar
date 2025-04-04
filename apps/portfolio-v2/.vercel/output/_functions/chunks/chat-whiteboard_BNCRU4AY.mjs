const chatWhiteboard = new Proxy({"src":"/_astro/chat-whiteboard.DSvIEV8K.png","width":433,"height":456,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/aditya/projects/AdityaBorkar/apps/portfolio-v2/src/assets/illustrations/chat-whiteboard.png";
							}
							
							return target[name];
						}
					});

export { chatWhiteboard as default };
