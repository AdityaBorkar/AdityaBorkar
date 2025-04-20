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

// ### Structured Data (google.com)

// - <https://developers.google.com/search/docs/appearance/structured-data/carousels-beta>
// - FAQ
// - Profile page
// - Breadcrumb
// - Article, Discussion forum
// - Product, Software app, Review snippet
// - Site links search box
// - Image metadata
//   +- Speakable
// - Video

// ### Site

// - Site Maps (<https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview>)
// - <https://developers.google.com/search/docs/appearance/site-names>
// - <https://developers.google.com/search/docs/crawling-indexing/url-structure>
// - <https://developers.google.com/search/docs/crawling-indexing/links-crawlable> [ALWAYS USE a href for links!]
// - <https://developers.google.com/search/docs/appearance/favicon-in-search>
// - <https://developers.google.com/search/blog/2021/07/customer-support>

// ### Pages

// - <https://developers.google.com/search/docs/appearance/title-link>
// - <https://developers.google.com/search/docs/appearance/publication-dates>
// - <https://developers.google.com/search/docs/appearance/sitelinks>
// - <https://developers.google.com/search/docs/appearance/snippet>
// - <https://developers.google.com/search/docs/appearance/featured-snippets>
// - Support Google AMP because abroad internets are slower. (<https://developers.google.com/search/docs/crawling-indexing/amp>)

// ### Blogs

// - <https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls>
// - <https://developers.google.com/search/docs/appearance/google-discover>

// ### Multi-media

// - <https://developers.google.com/search/docs/appearance/google-images>
// - <https://developers.google.com/search/docs/appearance/video>
