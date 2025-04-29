import type { AboutPage, WithContext } from 'schema-dts';

export const WebPage_About: WithContext<AboutPage> = {
	'@type': 'AboutPage',
	'@context': 'https://schema.org',
	'@id': 'https://adityab.tech/about',
	name: 'About Aditya Borkar - Full Stack Developer & Tech Consultant',
	description:
		'Learn about Aditya Borkar, a full-stack developer and tech consultant with 4+ years of expertise in React, TypeScript, Next.js and cloud technologies.',
	url: 'https://adityab.tech/about',
	author: {
		'@type': 'Person',
		name: 'Aditya Borkar',
		url: 'https://adityab.tech',
	},
	inLanguage: 'en-US',
	datePublished: new Date().toISOString().split('T')[0],
	dateModified: new Date().toISOString().split('T')[0],
	publisher: {
		'@type': 'Person',
		name: 'Aditya Borkar',
		url: 'https://adityab.tech',
	},
	mainContentOfPage: {
		'@type': 'WebPageElement',
		isAccessibleForFree: true,
	},
	about: {
		'@type': 'Person',
		name: 'Aditya Borkar',
		jobTitle: 'Full Stack Developer & Tech Consultant',
		knowsAbout: [
			'Web Development',
			'React.js',
			'TypeScript',
			'Next.js',
			'Cloud Technologies',
			'AWS',
			'Google Cloud',
			'CloudFlare',
		],
	},
	keywords: [
		'Aditya Borkar',
		'Full Stack Developer',
		'Web Developer',
		'Tech Consultant',
		'React Developer',
		'TypeScript',
		'Next.js',
		'Cloud Technologies',
	],
	speakable: {
		'@type': 'SpeakableSpecification',
		cssSelector: ['h1', 'h2', '.about-intro', '.about-bio'],
	},
};
