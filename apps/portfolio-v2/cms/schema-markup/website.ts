import type { WebSite, WithContext } from 'schema-dts';

const Website: WithContext<WebSite> = {
	'@type': 'WebSite',
	'@context': 'https://schema.org',
	'@id': 'https://adityab.tech',
	url: 'https://adityab.tech',
	name: 'Aditya Borkar - Product Engineer',
	description: 'Aditya Borkar is a full stack developer and tech consultant',
	author: {
		'@type': 'Person',
		name: 'Aditya Borkar',
		url: 'https://adityab.tech',
	},
	publisher: {
		'@type': 'Person',
		name: 'Aditya Borkar',
		url: 'https://adityab.tech',
	},
	mainEntityOfPage: {
		'@type': 'WebSite',
		url: 'https://adityab.tech',
	},
	about: {
		'@type': 'Person',
		name: 'Aditya Borkar',
		url: 'https://adityab.tech',
	},
};

export default Website;
