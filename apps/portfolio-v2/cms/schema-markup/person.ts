import type {
	ContactPage,
	ContactPoint,
	Person,
	WithContext,
} from 'schema-dts';
import { SOCIALS } from './socials';

// Added detailed Person schema with:
// Professional roles
// Location
// Skills/expertise
// Social profiles
// Areas of knowledge
// Added WebPage schema to help search engines understand:
// Page context within your site
// Relationship to your main website
// Primary purpose of the page
// Both schemas are nested to provide rich, interconnected data that search engines can use to better understand and display your content.
// schemaMarkup={[
//   {
//     "@context": "https://schema.org",
//     "@type": "Person",
//     "name": "Aditya Borkar",
//     "jobTitle": ["Product Developer", "Full-Stack Engineer"],
//     "description": "Product Developer and Full-Stack Engineer specializing in web development, UX design, and AI solutions",
//     "address": {
//       "@type": "PostalAddress",
//       "addressLocality": "Navi Mumbai",
//       "addressCountry": "IN"
//     },
//     "url": "https://yourwebsite.com",
//     "sameAs": [
//       "https://www.strava.com/athletes/aditya-borkar"
//       // Add other social profile URLs
//     ],
//     "knowsAbout": [
//       "Web Development",
//       "UX Design",
//       "AI Development",
//       "Product Development",
//       "JavaScript",
//       "Python",
//       "PHP"
//     ]
//   },
//   {
//     "@type": "WebPage",
//     "@id": "https://yourwebsite.com/about",
//     "name": "About Aditya Borkar - Product Developer & Full-Stack Engineer",
//     "description": "Meet Aditya Borkar, a passionate Product Developer and Full-Stack Engineer from Navi Mumbai. With expertise in web development, UX design, and AI, I create innovative solutions that help businesses thrive.",
//     "isPartOf": {
//       "@type": "WebSite",
//       "name": "Aditya Borkar's Portfolio",
//       "url": "https://yourwebsite.com"
//     }
//   }
// ]}
export const Person_AdityaBorkar: WithContext<Person> = {
	'@id': 'https://adityaborkar.com/about',
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Aditya Borkar',
	honorificPrefix: 'Mr.',
	familyName: 'Borkar',
	givenName: 'Aditya',
	gender: 'Male',
	alternateName: 'Adi Borkar',
	additionalName: 'Aditya Sanjay Borkar',
	brand: 'Aditya Borkar',

	description: 'Aditya Borkar is a software engineer and entrepreneur.',
	image: SOCIALS.image,
	sameAs: [SOCIALS.github, SOCIALS.linkedin, SOCIALS.strava],
	url: 'https://adityaborkar.com/about',
	mainEntityOfPage: 'https://adityaborkar.com/about',
	email: SOCIALS.email,
	contactPoint: {
		'@type': 'ContactPoint',
		email: SOCIALS.email,
	},
	workLocation: [
		{
			'@type': 'Place',
			name: 'Remote',
		},
		{
			'@type': 'Place',
			name: 'Mumbai, India',
		},
	],

	jobTitle: 'Software Engineer',
	knowsAbout: '',
	owns: [
		{
			'@type': 'OwnershipInfo',
			name: 'Platipie',
			url: 'https://platipie.com',
			ownedFrom: '',
		},
		// {
		//   '@type': 'OwnershipInfo',
		//   name: 'Replocal',
		//   url: 'https://replocal.app',
		//   ownedFrom: '',
		// },
		// {
		//   '@type': 'OwnershipInfo',
		//   name: 'DynamoDB SDK',
		//   url: 'https://dynamodb-sdk.com',
		//   ownedFrom: '',
		// },
		// {
		//   '@type': 'OwnershipInfo',
		//   name: 'Vasundhara Transport Service',
		//   url: 'https://vasundhara.cc',
		//   ownedFrom: '',
		// },
	],
	//   hasCredential: '',
	//   alumniOf: '',
	//   award: '',
	//   knows: '',

	//   funder: '',
	//   funding: '',
	//   sponser: '',

	//   "hasOfferCatalog"
	makesOffer: {
		'@type': 'Offer',
		name: 'Software Development Services',
		alternateName: 'Software Development Services',
		description: 'Custom software development services',
		url: 'https://adityaborkar.com/services',
		mainEntityOfPage: 'https://adityaborkar.com/services',
		// acceptedPaymentMethod: {
		//   '@type': 'PaymentMethod',
		//   name: 'Credit Card',
		// },
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: '5',
			reviewCount: '1',
		},
		// review
	},

	//   https://schema.org/docs/actions.html

	//   ConsumeAction: 'viewers'
	//   AchieveAction
	// AssessAction
	// ControlAction
	// CreateAction
	// FindAction
	// InteractAction
	// MoveAction
	// OrganizeAction
	// PlayAction
	// SearchAction
	// SeekToAction
	// SolveMathAction
	// TradeAction
	// TransferAction
	// UpdateAction
	// 'potentialAction'
};

export const Contact_AdityaBorkar: WithContext<ContactPoint> = {
	'@id': 'https://adityaborkar.com/contact',
	'@context': 'https://schema.org',
	'@type': 'ContactPoint',
	name: 'Contact',
	url: 'https://adityaborkar.com/contact',
	email: SOCIALS.email,
	// telephone
	// areaServed: 'US',
	// contactOption: 'TollFree',
	availableLanguage: ['English'],
	contactType: 'Customer Service',
};

// * for creative work:
// const ContactPage_AdityaBorkar: WithContext<ContactPage> = {
//   '@id': 'https://adityaborkar.com/contact',
//   '@context': 'https://schema.org',
//   '@type': 'ContactPage',
//   name: 'Contact',

//   email: socials.email,
//   url: 'https://adityaborkar.com/contact',

//   // telephone
// }
