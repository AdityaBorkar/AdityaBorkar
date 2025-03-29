import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SCHEMA_MARKUPS } from './schema';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getSchemaMarkup = (type: keyof typeof SCHEMA_MARKUPS) =>
	SCHEMA_MARKUPS[type];

export { getImage, getSvg as getIcon } from './assets';
