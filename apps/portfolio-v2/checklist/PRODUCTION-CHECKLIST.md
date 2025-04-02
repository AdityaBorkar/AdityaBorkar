[Automate using AI and Project Blog & Project Webflow]

# Production Checklist

- Content Management
  - Text
    - Readability = 8th grade reading level: <https://datayze.com/readability-analyzer.php>
  - Images:
    - WebP format
    - Meaningful names
    - Portrait Mode Photos in P3 color profile
  - SEO Generation Prompt for Cursor.AI
    - Analyze the contents of the page and generate relevant and google search ranking page title, keywords, meta description, and schema markup for the @[INSERT PAGE] @Web
  - Use Google Search Console to manually initiate and refresh the site indexing.

- Page Design
  - Tab indices are logical
  - Lazy loading Images
  - Responsive Design
  - Cross-Browser Support
  - Vercel Toolbar Recommendations
    - Open Graph Image Support
    - Layout Shifts
    - Interaction Timing
  - Validate HTML (<https://validator.w3.org/nu/>)
  - Accessibility
  - Unlighthouse
  - bundle analyzers/visualizers
  - Footer: Generate Image and Social IDs 

- Test if the following things are working:
  - Signed Exchanges using Cloudflare
  - Memory Leak Detection
  - Enable Gzip or Brotli compression

- Weekly Monitoring
  - Posthog
  - Sentry
  - LangSmith
  - CrUX Report
  - Google Search Console Reports <https://support.google.com/webmasters/answer/9133276>

// Copywriting - less marketing words and more impact words