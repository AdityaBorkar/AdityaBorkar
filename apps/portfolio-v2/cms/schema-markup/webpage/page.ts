import type { WebPage, WithContext } from 'schema-dts';

export const WebPage_Main: WithContext<WebPage> = {
	'@type': 'WebPage',
	'@context': 'https://schema.org',
	'@id': 'https://adityab.tech/',
	name: 'Aditya Borkar - Full Stack Developer & Tech Consultant',
	description:
		'Aditya Borkar is a skilled full-stack developer specializing in React, TypeScript, Next.js and cloud technologies. Hire me for web development, technical consulting, and cloud infrastructure solutions.',
	url: 'https://adityab.tech/',
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
	primaryImageOfPage: {
		'@type': 'ImageObject',
		url: 'https://adityab.tech/images/aditya-borkar.jpg',
		width: '800',
		height: '600',
		caption: 'Aditya Borkar - Full Stack Developer',
	},
	mainContentOfPage: {
		'@type': 'WebPageElement',
		isAccessibleForFree: true,
	},
	about: {
		'@type': 'Person',
		name: 'Aditya Borkar',
		jobTitle: 'Full Stack Developer & Tech Consultant',
		url: 'https://adityab.tech',
	},
	breadcrumb: {
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: 'https://adityab.tech',
			},
		],
	},
	keywords: [
		'Aditya Borkar',
		'Full Stack Developer',
		'React Developer',
		'TypeScript',
		'Next.js',
		'Web Development',
		'Tech Consultant',
		'Software Engineer',
		'Frontend Developer',
		'Backend Developer',
		'Cloud Technologies',
		'JavaScript Expert',
		'Web Applications',
		'Software Development',
		'Hire Developer',
	],
	speakable: {
		'@type': 'SpeakableSpecification',
		cssSelector: ['h1', 'h2', '.intro', '.hero-section'],
	},
	potentialAction: [
		{
			'@type': 'ReadAction',
			target: [
				'https://adityab.tech/projects',
				'https://adityab.tech/about',
				'https://adityab.tech/services',
			],
		},
		{
			'@type': 'CommentAction',
			target: 'https://adityab.tech/contact',
		},
	],
};
