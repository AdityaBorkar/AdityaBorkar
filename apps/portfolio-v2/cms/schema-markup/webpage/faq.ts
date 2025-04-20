import type { FAQPage, WithContext } from 'schema-dts';

export const WebPage_FAQ: WithContext<FAQPage> = {
	'@type': 'FAQPage',
	'@context': 'https://schema.org',
	'@id': 'https://adityab.tech/faq',
	name: 'Frequently Asked Questions - Aditya Borkar',
	description:
		"Answers to frequently asked questions about Aditya Borkar's web development services, tech stack, process, and collaboration options.",
	url: 'https://adityab.tech/faq',
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
	mainEntity: [
		{
			'@type': 'Question',
			name: 'What technologies does Aditya Borkar specialize in?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'I specialize in modern web technologies including React, TypeScript, Next.js, Node.js, and various cloud platforms (AWS, Google Cloud, CloudFlare). I focus on building performant, scalable, and accessible web applications with clean, maintainable code.',
			},
		},
		{
			'@type': 'Question',
			name: 'How does Aditya Borkar approach new projects?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'I begin with a thorough discovery phase to understand requirements and objectives. Then I create a detailed plan including architecture decisions, tech stack choices, and timeline estimates. I follow agile methodologies with regular updates, and emphasize clean code practices with comprehensive testing.',
			},
		},
		{
			'@type': 'Question',
			name: 'What types of projects does Aditya Borkar work on?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'I work on various web projects including SaaS applications, e-commerce platforms, content management systems, progressive web apps, and custom web applications. I particularly enjoy projects that involve complex state management, API integrations, and performance optimization challenges.',
			},
		},
		{
			'@type': 'Question',
			name: 'Does Aditya Borkar offer ongoing maintenance services?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: "Yes, I offer ongoing maintenance and support packages for projects I've built. This includes regular updates, security patches, performance monitoring, bug fixes, and incremental feature development. I can also provide training for your team to maintain and extend the application.",
			},
		},
		{
			'@type': 'Question',
			name: 'How can I collaborate with Aditya Borkar?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'You can collaborate with me as a consultant, full-stack developer, or technical lead. I work on both short-term and long-term engagements, and can adapt to different collaboration models including fixed-price projects, hourly consulting, or retainer arrangements. Contact me through my website to discuss your specific needs.',
			},
		},
	],
};
