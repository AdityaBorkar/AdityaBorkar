const IMAGE_LIST = import.meta.glob<{ default: ImageMetadata }>(
	'/src/assets/**/*.{jpeg,jpg,png,gif,svg,webp,webm}',
);

const SVG_LIST = import.meta.glob('/src/assets/icons/*.svg', {
	query: '?raw',
	import: 'default',
});

export const getSvg = (path: string) => {
	const file = SVG_LIST[`/src/assets/${path}.svg`];
	if (!file) throw new Error(`Icon not found: ${path}`);
	return file() as Promise<string>;
};

export const getImage = async (path: string) => {
	const file = IMAGE_LIST[`/src/assets/${path}`];
	if (!file) throw new Error(`Image not found: "/src/assets/${path}"`);
	return await file();
};
