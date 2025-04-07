# Deployment Notes

## Cloudflare

- Enabled "Smart Tiered Caching"
- Browser Cache TTL: 20 hours
- Crawler Hints: Enabled
- Caching Level: Ignore Query String
- Protocol Optimization
    - 0-RTT Connection Resumption: Enabled
- Content Optimization
    - Early Hints: Enabled
    - AMP Real URL: Enabled
    - Cloudflare Fonts: Disabled (This interferes with the Compression Algorithm)
- Always Use HTTPS: Disabled (This interferes with the Compression Algorithm)
- HSTS Preload: Enabled
- Certificate Transparency Monitoring: Enabled
- Custom Rule: Compression Algorithm (Precedence: ZStandard, Brotli, Gzip)

## To be implemented:

- Automatic Signed Exchanges (SXGs)
