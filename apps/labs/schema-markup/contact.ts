import { SOCIALS } from 'cms/schema-markup/socials';
import type { ContactPoint, WithContext } from 'schema-dts';

export const Contact_AdityaBorkar: WithContext<ContactPoint> = {
	'@id': 'https://adityab.tech/contact',
	'@context': 'https://schema.org',
	'@type': 'ContactPoint',
	name: 'Contact',
	url: 'https://adityab.tech/contact',
	email: SOCIALS.email,
	// telephone
	// areaServed: 'US',
	// contactOption: 'TollFree',
	availableLanguage: ['English'],
	contactType: 'Customer Service',
};

// * for creative work:
// const ContactPage_AdityaBorkar: WithContext<ContactPage> = {
//   '@id': 'https://adityab.tech/contact',
//   '@context': 'https://schema.org',
//   '@type': 'ContactPage',
//   name: 'Contact',

//   email: socials.email,
//   url: 'https://adityab.tech/contact',

//   // telephone
// }
