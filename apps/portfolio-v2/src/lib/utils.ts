import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export { getImage, getSvg as getIcon } from './assets';
export { SchemaMarkup } from './schema-markup';
