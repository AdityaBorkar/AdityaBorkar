import type { ProfilePage, WithContext } from 'schema-dts';

export const WebPage_Profile: WithContext<ProfilePage> = {
	'@type': 'ProfilePage',
	'@context': 'https://schema.org',
	'@id': 'https://adityab.tech/profile',
	name: 'Aditya Borkar - Professional Profile',
	description:
		'Professional profile of Aditya Borkar, a full-stack developer and tech consultant specializing in React, TypeScript, Next.js, and cloud technologies.',
	url: 'https://adityab.tech/profile',
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
	mainEntity: {
		'@type': 'Person',
		name: 'Aditya Borkar',
		jobTitle: 'Full Stack Developer & Tech Consultant',
		url: 'https://adityab.tech',
		image: 'https://adityab.tech/images/profile.jpg',
		email: 'contact@adityab.tech',
		telephone: '+91XXXXXXXXXX', // Replace with actual phone if you want to include it
		sameAs: [
			'https://github.com/adityaborkar',
			'https://linkedin.com/in/adityaborkar',
			'https://twitter.com/adityaborkar',
			// Replace with your actual social profiles
		],
		knowsAbout: [
			'Web Development',
			'React',
			'TypeScript',
			'Next.js',
			'Node.js',
			'Cloud Infrastructure',
			'AWS',
			'Google Cloud',
			'CloudFlare',
			'Performance Optimization',
			'API Design',
			'Database Architecture',
		],
		worksFor: {
			'@type': 'Organization',
			name: 'Independent Consultant',
			url: 'https://adityab.tech',
		},
		alumniOf: {
			'@type': 'CollegeOrUniversity',
			name: 'Computer Science Engineering', // Replace with your actual education
		},
		skills:
			'React, TypeScript, Next.js, Node.js, AWS, Google Cloud, CloudFlare, GraphQL, REST API, MongoDB, PostgreSQL, Redis, Docker, CI/CD',
		description:
			'Full-stack developer with expertise in modern JavaScript frameworks and cloud technologies. I build scalable, performant web applications with a focus on user experience and clean code.',
	},
};
