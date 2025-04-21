---
title: GeM Finder
description: Google Chrome Extension to navigate the GeM website and get personalized bids.
hero_image: projects/gem-finder.png
hero_tag: featured
filter_category:
  - Plugins & Extensions
  - Full Stack Development
tags:
  - Google Chrome Extension
  - Web Scraping
  - Govt. of India API
  - Data Analysis
  - Personalization
links:
  preview: https://gem-finder.vercel.app/
  github: https://github.com/aakash-durgabari/gem-finder
timeline: < 1 month
year: 2024
benefits:
  -
    metric: 3
    label: Days Delivery
  -
    metric: 100%
    label: Handover
  -
    metric: 100%
    label: Knowledge Transfer
---

## Problem Statement

There's an SME Business (not to be named due to an NDA), they collect 90% of their revenue through government contracts and tenders. They wanted a solution that can help them collect data about ongoing govevrnment contracts and help them recommend which ones they are eligible for and can participate.

## Solution

A web application was built in Next.js that scrapes data from gem.gov.in that contains all the data for contracts that are open for bidding. The bid information is then downloaded in a PDF format and analyzed in several parameters that can fit in for the tenderer.

New contract alerts are also shared through email. This emails further link to the contract service page, where we do again the same thing and extract data.

Extracted data is then structurized in a certain format to enable filtering and sorting of data to prioritize certain opportunities.

Network Tab hijacking was used to get relevant and important information from the site.

## Update (January 2025)

The growing efficacy of AI models, offer simpler and more accurate solutions for PDF analysis. Thus, providing a minor update to the application, we integrated AI to improve PDF analysis accuracy. For this purpose, Mixtral PDF Model was used to extract text from PDF.

## Tech Stack

- PNPM - Package Manager and Monorepo Management
- Next.js - Frontend and Backend
- TailwindCSS - Styling
- PDF Analysis
- Mixtral PDF - AI Analysis
- Chrome Extension
