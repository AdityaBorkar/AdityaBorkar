import type { WithContext, Thing } from 'schema-dts';

// Define all available schema markup types based on files in cms/schema-markup
export type SchemaMarkupType =
	// Root files
	| 'person'
	| 'website'
	| 'contact'
	| 'interaction-counter'
	| 'product'
	| 'work'
	| 'business'
	| 'services'
	| 'certification'

	// AMP
	| 'amp/story'

	// Blog
	| 'blog/article'
	| 'blog/blog-post'
	| 'blog/blog'
	| 'blog/comment'
	| 'blog/how-to'

	// Documents
	| 'documents/index'
	| 'documents/note'
	| 'documents/presentation'
	| 'documents/spreadsheet'
	| 'documents/text'

	// Software
	| 'software/api-reference'
	| 'software/computer-lang'
	| 'software/mobile-app'
	| 'software/software-app'
	| 'software/software-source-code'
	| 'software/web-app'

	// Webpage
	| 'webpage/about'
	| 'webpage/collection'
	| 'webpage/contact'
	| 'webpage/faq'
	| 'webpage/page'
	| 'webpage/profile'
	| 'webpage/qa';

export const SchemaMarkup = {
	async get<T extends SchemaMarkupType>(type: T): Promise<WithContext<Thing>> {
		try {
			// const module = await import(`cms/schema-markup/${type}`);
			// return module.default;
			return {};
		} catch (error) {
			console.error(`Failed to load schema markup for type: ${type}`, error);
			throw error;
		}
	},

	async generate<T extends SchemaMarkupType>(
		type: T,
	): Promise<WithContext<Thing>> {
		return this.get(type);
	},
};
