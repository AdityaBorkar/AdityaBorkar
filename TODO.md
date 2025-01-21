# Checklist

## Accessibility [LAST PRIORITY]

[-] Accessibility Modes: <https://www.a11yproject.com/posts/operating-system-and-browser-accessibility-display-modes/#filtered-display-mode>
[-] Accessibility Checklist: <https://www.a11yproject.com/checklist/>

[-] Readibility = 8th grade reading level: <https://datayze.com/readability-analyzer.php>
[-] Projects -> Tags in Images: Open Source / AI

## Images

[-] P3 color profile
[-] Portrait mode
[-] Meaningful names
[-] Instead, showcase your team members, behind-the-scenes glimpses, and real customer stories. This humanizes your brand, making it relatable and trustworthy. When people see the human side of your business, they are more likely to engage and connect with you!

[-] profile photo on home page must be [Mountains in Background, Well-defined body, Authorative Face, More Formal]


# Things to be done

## Dev Tooling & Optimization

- WILL REPLACING REACT-ICONS WITH ICONS SVG BE A GOOD IDEA?
- Biome.json -> core web vitals
- Biome.json -> configure with editorconfig
- Solve Million Lint Errors
- CI/CD Pipeline:
  - Astro Linting (Prettier / Biome + ESLint + MarkdownLint)
  - Million.js Linting
  - Accessibility Checks
  - Performance Profiling
    - Bundle Size
    - Dependency Scanning
    - Core Web Vitals
    - Validate HTML (<https://validator.w3.org/nu/>)

## Page Experience

- /projects -> ProjectCard: Add impact of the product like (<https://evilmartians.com/products>)
- use text-balance in blogs
- Customize Scrollbar
- PWA Checklist (basics only)
- Glow + Borders:
  - <https://codepen.io/kocsten/pen/rggjXp>
  - <https://codepen.io/alexbodin/pen/XWrqpxB>
  - <https://codepen.io/vitor-siqueira/pen/xNBExN>
  - <https://codepen.io/webLeister/pen/XwGENz>
- Contact Form:
  - Associate input error messaging with the input it corresponds to.
  - Make sure that form input errors are displayed in list above the form after submission.
  - Make sure that error, warning, and success states are not visually communicated by just color.
- Responsiveness
- Accessibility
  - <https://www.a11yproject.com/checklist/>
  - <https://www.w3.org/WAI/ARIA/apg/>
  - <https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html>
- Tab indices are logical
- Animations and Transitions:
  - Page View Transitions
  - Apple-inspired animations
    - Reveal slant-slide-up animation on viewport enter of cards
    - Fade + slant-swipe-down apple-like animation on load for navbar
    - Fade + slant-swipe-up apple-like animation on load for page
- Cross-Browser Support
- Enable Signed Exchanges:
  - <https://web.dev/articles/signed-exchanges#tooling>
  - <https://developer.chrome.com/blog/optimizing-lcp-using-signed-exchanges/>
- Analytics (GA4 alternative + Sentry alternative + HotJar alternative)
  - Discover: Posthog and Product Development

---

## Site Checklist

[-] Make sure that button, a, and label element content is unique and descriptive.
[-] Replace 'title' attribute with tooltips: <https://inclusive-components.design/tooltips-toggletips/>

---

## Reserve one day for Schema Markup and SEO

### Site

- Site Maps (<https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview>)
- <https://developers.google.com/search/docs/appearance/site-names>
- <https://developers.google.com/search/docs/crawling-indexing/url-structure>
- <https://developers.google.com/search/docs/crawling-indexing/links-crawlable> [ALWAYS USE a href for links!]
- <https://developers.google.com/search/docs/appearance/favicon-in-search>
- <https://developers.google.com/search/blog/2021/07/customer-support>

### Pages

- <https://developers.google.com/search/docs/appearance/title-link>
- <https://developers.google.com/search/docs/appearance/publication-dates>
- <https://developers.google.com/search/docs/appearance/sitelinks>
- <https://developers.google.com/search/docs/appearance/snippet>
- <https://developers.google.com/search/docs/appearance/featured-snippets>
- Support Google AMP because abroad internets are slower. (<https://developers.google.com/search/docs/crawling-indexing/amp>)

### Blogs

- <https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls>
- <https://developers.google.com/search/docs/appearance/google-discover>

### Multi-media

- <https://developers.google.com/search/docs/appearance/google-images>
- <https://developers.google.com/search/docs/appearance/video>

### Structured Data (google.com)

- <https://developers.google.com/search/docs/appearance/structured-data/carousels-beta>
- FAQ
- Profile page
- Breadcrumb
- Article, Discussion forum
- Product, Software app, Review snippet

- Sitelinks search box
- Image metadata
  +- Speakable
- Video

- Organization (experiment it only after a long time)

### Structured Data (schema.org)

- <https://schema.org/WebSite>
- <https://schema.org/OnlineStore> Shall we use it?
- <https://schema.org/LocalBusiness> Shall we use it?
- <https://schema.org/Certification> (new)
- <https://schema.org/Service>
- <https://schema.org/ServiceChannel>
- <https://schema.org/PaymentMethod> (use only on contatc us page)

- Pages

  - <https://schema.org/WebPage>
  - <https://schema.org/AboutPage>
  - <https://schema.org/ProfilePage>
  - <https://schema.org/FAQPage>
  - <https://schema.org/QAPage>
  - <https://schema.org/ContactPage>

- <https://schema.org/SpeakableSpecification>
- <https://schema.org/InteractionCounter> A summary of how users have interacted with this CreativeWork

- <https://schema.org/ItemPage>
- <https://schema.org/IndividualProduct>
- <https://schema.org/BlogPosting>
- <https://schema.org/HowToSection>
- <https://schema.org/HowToStep>
- <https://schema.org/HowToTip>
- <https://schema.org/Article>
- <https://schema.org/TechArticle>
- <https://schema.org/WebApplication>
- <https://schema.org/MobileApplication>
- <https://schema.org/SoftwareApplication>
- <https://schema.org/SoftwareSourceCode>
- <https://schema.org/APIReference>
- <https://schema.org/Comment>
- <https://schema.org/ComputerLanguage> (ambiguous)

- <https://schema.org/Blog>
- <https://schema.org/SomeProducts>
- <https://schema.org/ProductGroup> (new)
- <https://schema.org/CollectionPage>
- <https://schema.org/ProductCollection> (new)

- Explore:

  - <https://schema.org/CreativeWork>
  - <https://schema.org/Thing>
  - <https://schema.org/EmailMessage>
  - <https://schema.org/AmpStory>

- Digital Documents:

  - <https://schema.org/DigitalDocument>
  - <https://schema.org/TextDigitalDocument>
  - <https://schema.org/PresentationDigitalDocument>
  - <https://schema.org/NoteDigitalDocument>
  - <https://schema.org/SpreadsheetDigitalDocument>

- Media Objects:

  - <https://schema.org/MediaObject>
  - <https://schema.org/DataDownload>
  - <https://schema.org/ImageObject>
  - <https://schema.org/TextObject>
  - <https://schema.org/VideoObject>

- Web Page Components:
  - <https://schema.org/Table>
  - <https://schema.org/SiteNavigationElement>
  - <https://schema.org/SearchResultsPage>
  - <https://schema.org/ImageGallery>
  - <https://schema.org/MediaGallery>

### Content SEO

- Perform a spelling, grammar, writting-style check
- Ensure that the content is well-written and easy to read (<https://hemingwayapp.com/>)
- Does the content have any easily-verified factual errors?

- Use more Links like LinkedIn / Twitter Testimonials

Does the main heading or page title provide a descriptive, helpful summary of the content?
Does the main heading or page title avoid exaggerating or being shocking in nature?

Does the content provide original information, reporting, research, or analysis?
Does the content provide a substantial, complete, or comprehensive description of the topic?
Does the content provide insightful analysis or interesting information that is beyond the obvious?
If the content draws on other sources, does it avoid simply copying or rewriting those sources, and instead provide substantial additional value and originality?
Does the content provide substantial value when compared to other pages in search results?
Does the content present information in a way that makes you want to trust it, such as clear sourcing, evidence of the expertise involved, background about the author or the site that publishes it, such as through links to an author page or a site's About page?

Is this the sort of page you'd want to bookmark, share with a friend, or recommend?
Would you expect to see this content in or referenced by a printed magazine, encyclopedia, or book?
If someone researched the site producing the content, would they come away with an impression that it is well-trusted or widely-recognized as an authority on its topic?
Is this content written or reviewed by an expert or enthusiast who demonstrably knows the topic well?

Is the content produced well, or does it appear sloppy or hastily produced?
Is the content mass-produced by or outsourced to a large number of creators, or spread across a large network of sites, so that individual pages or sites don't get as much attention or care?

---

Is the content primarily made to attract visits from search engines?
Are you producing lots of content on many different topics in hopes that some of it might perform well in search results?
Are you using extensive automation to produce content on many topics?
Are you mainly summarizing what others have to say without adding much value?
Are you writing about things simply because they seem trending and not because you'd write about them otherwise for your existing audience?
Does your content leave readers feeling like they need to search again to get better information from other sources?
Are you writing to a particular word count because you've heard or read that Google has a preferred word count? (No, we don't.)
Did you decide to enter some niche topic area without any real expertise, but instead mainly because you thought you'd get search traffic?
Does your content promise to answer a question that actually has no answer, such as suggesting there's a release date for a product, movie, or TV show when one isn't confirmed?
Are you changing the date of pages to make them seem fresh when the content has not substantially changed?
Are you adding a lot of new content or removing a lot of older content primarily because you believe it will help your search rankings overall by somehow making your site seem "fresh?" (No, it won't)

This person ranks on search due to extensive content he has written:
<https://andrejgajdos.com/>


----

## Page Experience:

- Customize Scrollbar
- use text-balance in blogs

- Apple-inspired animations
    - Reveal slant-slide-up animation on viewport enter of cards
    - Fade + slant-swipe-down apple-like animation on load for navbar
    - Fade + slant-swipe-up apple-like animation on load for page
- Light Mode
- Accessibility Modes: https://www.a11yproject.com/posts/operating-system-and-browser-accessibility-display-modes/#filtered-display-mode
- Glow + Borders:
    - https://codepen.io/kocsten/pen/rggjXp
    - https://codepen.io/alexbodin/pen/XWrqpxB
    - https://codepen.io/vitor-siqueira/pen/xNBExN
    - https://codepen.io/webLeister/pen/XwGENz
- Contact Form:
    - Associate input error messaging with the input it corresponds to.
    - Make sure that form input errors are displayed in list above the form after submission.
    - Make sure that error, warning, and success states are not visually communicated by just color.

---

[-] Add Animations:
    - Navigation: MPA View Transitions with fallback
[-] PWA Checklist
[-] Add Support: Responsiveness & Cross-Browser
[-] Prepare `Blogs` Content
[-] Prepare `Projects` Content
[-] README.md file
[-] Next.js Metadata + Schema Markup + SEO
[-] Measure Performance:
    - Measure Page Wise:
        - Core Web Vitals using Unlighthouse
        - Validate HTML https://validator.w3.org/nu/
        - Bundle Size
    - Compare Bundled Size and Performance for (Next.js + Vercel) and (Astro + Cloudflare)
[-] Once React19 is stable -> Migrate to Astro and Arrange CMS for Projects & Blogs
[-] Deploy Website
[-] Enable Signed Exchanges:
    - https://web.dev/articles/signed-exchanges#tooling
    - https://developer.chrome.com/blog/optimizing-lcp-using-signed-exchanges/

---

## Site Checklist

[-] Make sure that button, a, and label element content is unique and descriptive.
[-] Make sure that focus order is linear
[-] Replace 'title' attribute with tooltips: https://inclusive-components.design/tooltips-toggletips/

[-] Can you still see where links are among body content if everything is grayscale?
[-] https://www.a11yproject.com/checklist/
[-] Guides: https://www.w3.org/WAI/ARIA/apg/ + https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html

## Content Checklist

[-] Readibility = 8th grade reading level: https://datayze.com/readability-analyzer.php
[-] Projects -> Tags in Images: Open Source / AI


## Analytics Checklist

[-] Prefetch success v/s. failure

---

## Reserve one day for Schema Markup and SEO:
 
## Site

- Site Maps (https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) 
- https://developers.google.com/search/docs/appearance/site-names
- https://developers.google.com/search/docs/crawling-indexing/url-structure
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable [ALWAYS USE a href for links!]
- https://developers.google.com/search/docs/appearance/favicon-in-search
- https://developers.google.com/search/blog/2021/07/customer-support

## Pages
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/publication-dates
- https://developers.google.com/search/docs/appearance/sitelinks
- https://developers.google.com/search/docs/appearance/snippet
- https://developers.google.com/search/docs/appearance/featured-snippets
- Support Google AMP because abroad internets are slower. (https://developers.google.com/search/docs/crawling-indexing/amp)

## Blogs:

- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/appearance/google-discover

## Multi-media

- https://developers.google.com/search/docs/appearance/google-images
- https://developers.google.com/search/docs/appearance/video

## Structured Data (google.com)

- https://developers.google.com/search/docs/appearance/structured-data/carousels-beta
- FAQ
- Profile page
- Breadcrumb
- Article, Discussion forum
- Product, Software app, Review snippet

- Sitelinks search box
- Image metadata
+- Speakable
- Video

- Organization (experiment it only after a long time)

## Structured Data (schema.org)

- https://schema.org/WebSite
- https://schema.org/OnlineStore Shall we use it?
- https://schema.org/LocalBusiness Shall we use it?
- https://schema.org/Certification (new)
- https://schema.org/Service
- https://schema.org/ServiceChannel
- https://schema.org/PaymentMethod (use only on contatc us page)

- Pages
    - https://schema.org/WebPage
    - https://schema.org/AboutPage
    - https://schema.org/ProfilePage
    - https://schema.org/FAQPage
    - https://schema.org/QAPage
    - https://schema.org/ContactPage

- https://schema.org/SpeakableSpecification
- https://schema.org/InteractionCounter A summary of how users have interacted with this CreativeWork

- https://schema.org/ItemPage
- https://schema.org/IndividualProduct
- https://schema.org/BlogPosting
- https://schema.org/HowToSection
- https://schema.org/HowToStep
- https://schema.org/HowToTip
- https://schema.org/Article
- https://schema.org/TechArticle
- https://schema.org/WebApplication
- https://schema.org/MobileApplication
- https://schema.org/SoftwareApplication
- https://schema.org/SoftwareSourceCode
- https://schema.org/APIReference
- https://schema.org/Comment
- https://schema.org/ComputerLanguage (ambiguous)

- https://schema.org/Blog
- https://schema.org/SomeProducts
- https://schema.org/ProductGroup (new)
- https://schema.org/CollectionPage
- https://schema.org/ProductCollection (new)

- Explore:
    - https://schema.org/CreativeWork
    - https://schema.org/Thing
    - https://schema.org/EmailMessage
    - https://schema.org/AmpStory

- Digital Documents:
    - https://schema.org/DigitalDocument
    - https://schema.org/TextDigitalDocument
    - https://schema.org/PresentationDigitalDocument
    - https://schema.org/NoteDigitalDocument
    - https://schema.org/SpreadsheetDigitalDocument

- Media Objects:
    - https://schema.org/MediaObject
    - https://schema.org/DataDownload
    - https://schema.org/ImageObject
    - https://schema.org/TextObject
    - https://schema.org/VideoObject

- Web Page Components:
    - https://schema.org/Table
    - https://schema.org/SiteNavigationElement
    - https://schema.org/SearchResultsPage
    - https://schema.org/ImageGallery
    - https://schema.org/MediaGallery


## Add Reviews and Guestbook

- It is a form of user-generated content and care must be taken to implement it correctly.
- Do not make this decision in haste just for SEO benefits

## Content SEO

- Perform a spelling, grammar, writting-style check
- Ensure that the content is well-written and easy to read (https://hemingwayapp.com/)
- Does the content have any easily-verified factual errors?

- Use more Links like LinkedIn / Twitter Testimonials

Does the main heading or page title provide a descriptive, helpful summary of the content?
Does the main heading or page title avoid exaggerating or being shocking in nature?

Does the content provide original information, reporting, research, or analysis?
Does the content provide a substantial, complete, or comprehensive description of the topic?
Does the content provide insightful analysis or interesting information that is beyond the obvious?
If the content draws on other sources, does it avoid simply copying or rewriting those sources, and instead provide substantial additional value and originality?
Does the content provide substantial value when compared to other pages in search results?
Does the content present information in a way that makes you want to trust it, such as clear sourcing, evidence of the expertise involved, background about the author or the site that publishes it, such as through links to an author page or a site's About page?

Is this the sort of page you'd want to bookmark, share with a friend, or recommend?
Would you expect to see this content in or referenced by a printed magazine, encyclopedia, or book?
If someone researched the site producing the content, would they come away with an impression that it is well-trusted or widely-recognized as an authority on its topic?
Is this content written or reviewed by an expert or enthusiast who demonstrably knows the topic well?

Is the content produced well, or does it appear sloppy or hastily produced?
Is the content mass-produced by or outsourced to a large number of creators, or spread across a large network of sites, so that individual pages or sites don't get as much attention or care?

---

Is the content primarily made to attract visits from search engines?
Are you producing lots of content on many different topics in hopes that some of it might perform well in search results?
Are you using extensive automation to produce content on many topics?
Are you mainly summarizing what others have to say without adding much value?
Are you writing about things simply because they seem trending and not because you'd write about them otherwise for your existing audience?
Does your content leave readers feeling like they need to search again to get better information from other sources?
Are you writing to a particular word count because you've heard or read that Google has a preferred word count? (No, we don't.)
Did you decide to enter some niche topic area without any real expertise, but instead mainly because you thought you'd get search  traffic?
Does your content promise to answer a question that actually has no answer, such as suggesting there's a release date for a product, movie, or TV show when one isn't confirmed?
Are you changing the date of pages to make them seem fresh when the content has not substantially changed?
Are you adding a lot of new content or removing a lot of older content primarily because you believe it will help your search rankings overall by somehow making your site seem "fresh?" (No, it won't)

This person ranks on search due to extensive content he has written:
https://andrejgajdos.com/

---

## UNSUPPORTED Libraries (React 19):

- lottie-react
- @calcom/embed-react

---

# Version 2

- /projects -> ProjectCard: Add impact of the product like (https://evilmartians.com/products)