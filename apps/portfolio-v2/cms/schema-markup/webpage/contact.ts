import type { ContactPage } from 'schema-dts';
import type { WithContext } from 'schema-dts';

export const WebPage_Contact: WithContext<ContactPage> = {
	'@type': 'ContactPage',
	'@context': 'https://schema.org',
	'@id': 'https://adityab.tech/contact',
	name: 'Contact Aditya Borkar',
	description: 'Contact Aditya Borkar for software development services',
	url: 'https://adityab.tech/contact',
	author: {
		'@type': 'Person',
		name: 'Aditya Borkar',
		url: 'https://adityab.tech/about',
	},
	mainContentOfPage: {
		'@type': 'WebPageElement',
		isAccessibleForFree: true,
	},
	speakable: {
		'@type': 'SpeakableSpecification',
		cssSelector: ['h1', 'h2', '.about-intro', '.about-bio'],
	},
	specialty: {
		'@type': 'Specialty',
		name: 'Software Development',
		description: 'Software development services',
	},
};
