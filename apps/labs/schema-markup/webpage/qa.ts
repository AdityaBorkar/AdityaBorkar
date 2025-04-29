import type { QAPage, WithContext } from 'schema-dts';

export const WebPage_QA: WithContext<QAPage> = {
	'@type': 'QAPage',
	'@context': 'https://schema.org',
	'@id': 'https://adityab.tech/qa',
	name: 'Developer Q&A with Aditya Borkar',
	description:
		'Common questions and answers about web development, React, TypeScript, Next.js, and cloud technologies answered by Aditya Borkar.',
	url: 'https://adityab.tech/qa',
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
		'@type': 'Question',
		name: 'What services does Aditya Borkar offer?',
		text: 'What web development and technology consulting services does Aditya Borkar provide?',
		answerCount: 1,
		acceptedAnswer: {
			'@type': 'Answer',
			text: 'Aditya Borkar offers full-stack development services specializing in React, TypeScript, Next.js, and cloud technologies. Services include web application development, technical consulting, cloud infrastructure setup, performance optimization, and code review.',
			dateCreated: new Date().toISOString().split('T')[0],
			author: {
				'@type': 'Person',
				name: 'Aditya Borkar',
			},
		},
	},
};
