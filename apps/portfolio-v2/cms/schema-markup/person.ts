import { SOCIALS } from 'cms/constants';
import type { Person, WithContext } from 'schema-dts';

const Person_AdityaBorkar: WithContext<Person> = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'@id': 'https://adityab.tech/about',
	url: 'https://adityab.tech/about',
	mainEntityOfPage: 'https://adityab.tech/about',
	brand: 'Aditya Borkar',
	name: 'Aditya Borkar',
	alternateName: 'Adi',
	additionalName: 'Adi Borkar',
	// honorificPrefix: 'Mr.',
	// familyName: 'Borkar',
	// givenName: 'Aditya',
	// gender: 'Male',

	image: SOCIALS.image, // For best results, we recommend providing multiple high-resolution images (minimum of 50K pixels when multiplying width and height) with the following aspect ratios: 16x9, 4x3, and 1x1.
	sameAs: [SOCIALS.github, SOCIALS.linkedin, SOCIALS.strava],
	email: SOCIALS.email,
	contactPoint: {
		'@type': 'ContactPoint',
		mainEntityOfPage: 'https://adityab.tech/contact',
		email: SOCIALS.email,
	},

	description:
		'Aditya Borkar is a product engineer and entrepreneur who specializes in building scalable and efficient web software solutions.',
	jobTitle: 'Software Engineer',
	knowsAbout: [
		'Software Development',
		'Product Development',
		'Full Stack Development',
		'Web Development',
		'AI Development',
		'TypeScript',
	],
	skills: [
		'Attention to detail',
		'Problem solving',
		'User experience',
		'Team management',
		'Communication',
		'Time management',
		'Adaptability',
		'Creativity',
	],
	workLocation: [
		{ '@type': 'Place', name: 'Remote' },
		{ '@type': 'Place', name: 'Mumbai, India' },
	],

	makesOffer: {
		'@type': 'Offer',
		url: 'https://adityab.tech/services',
		mainEntityOfPage: 'https://adityab.tech/services',
		name: 'Software Development Services',
		alternateName: 'Software Development Services',
		description:
			'Product Development, MVP Development, Web Development, AI Development',
		aggregateRating: {
			'@type': 'AggregateRating',
			mainEntityOfPage: 'https://adityab.tech/services#testimonials',
			ratingValue: '5',
			reviewCount: '8',
		},
	},

	owns: [
		{
			'@type': 'OwnershipInfo',
			name: 'Platipie',
			url: 'https://platipie.com',
			ownedFrom: '2023',
		},
		// {
		//   '@type': 'OwnershipInfo',
		//   name: 'SyncSink',
		//   url: 'https://syncsink.app',
		//   ownedFrom: '',
		// },
		// {
		//   '@type': 'OwnershipInfo',
		//   name: 'Vasundhara Transport Service',
		//   url: 'https://vasundhara.cc',
		//   ownedFrom: '',
		// },
	],
};

export default Person_AdityaBorkar;
