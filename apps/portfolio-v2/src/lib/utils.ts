import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SCHEMA_MARKUPS } from './schema';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const SchemaMarkup = {
	get(type: keyof typeof SCHEMA_MARKUPS) {
		return SCHEMA_MARKUPS[type];
	},
	generate(type: keyof typeof SCHEMA_MARKUPS) {
		return SCHEMA_MARKUPS[type];
	},
};

export { getImage, getSvg as getIcon } from './assets';
