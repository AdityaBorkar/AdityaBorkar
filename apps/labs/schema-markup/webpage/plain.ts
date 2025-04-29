import type { WebPage } from 'schema-dts';

export const WebPage_Plain: WebPage = {
	'@type': 'WebPage',
	'@id': 'https://adityab.tech',
	name: 'Aditya Borkar',
	description: 'Aditya Borkar is a full stack developer and tech consultant',
	url: 'https://adityab.tech',
	mainContentOfPage: {
		'@type': 'WebPageElement',
		isAccessibleForFree: true,
	},
	specialty: {
		'@type': 'Specialty',
		name: 'Software Development',
		description: 'Software development services',
	},
	author: {
		'@type': 'Person',
		name: 'Aditya Borkar',
		url: 'https://adityab.tech/about',
	},
	accountablePerson: {
		'@type': 'Person',
		name: 'Aditya Borkar',
		url: 'https://adityab.tech/about',
	},
	copyrightHolder: {
		'@type': 'Person',
		name: 'Aditya Borkar',
		url: 'https://adityab.tech/about',
	},
};
