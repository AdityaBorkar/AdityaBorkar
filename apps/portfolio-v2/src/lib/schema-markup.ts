import {
	Contact_AdityaBorkar,
	Person_AdityaBorkar,
} from 'cms/schema-markup/person';

const SCHEMA_MARKUPS = {
	// Organization
	person: Person_AdityaBorkar,
	contact: Contact_AdityaBorkar,
	//   SameAs (within Person or ContactPoint)
	//   Specify your social media profiles or professional links for better verification.
	// SocialMediaPosting (if social media links are provided)
	//   Logo

	// Email
	// Telephone
	// PostalAddress
	// Place (optional, for location data)
	// GeoCoordinates (optional, if location details are shared)
} as const;

export const SchemaMarkup = {
	get(type: keyof typeof SCHEMA_MARKUPS) {
		return SCHEMA_MARKUPS[type];
	},
	generate(type: keyof typeof SCHEMA_MARKUPS) {
		return SCHEMA_MARKUPS[type];
	},
};
