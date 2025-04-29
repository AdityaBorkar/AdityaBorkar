// - <https://schema.org/CollectionPage>

import type { CollectionPage, WithContext } from 'schema-dts';

export const WebPage_Collection: WithContext<CollectionPage> = {
	'@type': 'CollectionPage',
	'@context': 'https://schema.org',
	'@id': 'https://adityab.tech/projects',
	name: 'Web Development Projects by Aditya Borkar',
	description:
		"Explore Aditya Borkar's portfolio of web development projects showcasing expertise in React, TypeScript, Next.js, and cloud technologies. Browse case studies and technical solutions.",
	url: 'https://adityab.tech/projects',
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
	breadcrumb: {
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: 'https://adityab.tech',
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Projects',
				item: 'https://adityab.tech/projects',
			},
		],
	},
	about: {
		'@type': 'Thing',
		name: 'Web Development Projects',
		description:
			'Collection of web applications, websites, and technical solutions built by Aditya Borkar using modern technologies.',
	},
	keywords: [
		'Web Projects',
		'Portfolio',
		'React Projects',
		'Next.js Applications',
		'TypeScript Projects',
		'Full Stack Applications',
		'Web Development Portfolio',
		'Aditya Borkar Projects',
		'Software Engineering Case Studies',
		'Frontend Projects',
		'Backend Projects',
		'Cloud Applications',
	],
	speakable: {
		'@type': 'SpeakableSpecification',
		cssSelector: ['h1', 'h2', '.project-intro', '.project-grid'],
	},
	hasPart: [
		{
			'@type': 'CreativeWork',
			name: 'E-commerce Platform',
			description:
				'A modern e-commerce solution built with Next.js, TypeScript, and Stripe integration',
			url: 'https://adityab.tech/projects/ecommerce',
		},
		{
			'@type': 'CreativeWork',
			name: 'Content Management System',
			description: 'A headless CMS with a React frontend and GraphQL API',
			url: 'https://adityab.tech/projects/cms',
		},
		{
			'@type': 'CreativeWork',
			name: 'SaaS Dashboard',
			description:
				'An analytics dashboard for SaaS applications with real-time data visualization',
			url: 'https://adityab.tech/projects/saas-dashboard',
		},
	],
};
