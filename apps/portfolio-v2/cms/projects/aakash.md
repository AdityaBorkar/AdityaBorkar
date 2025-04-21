---
title: Aakash Chatbot
description: Realtime AI Chatbot that provides requested data from and recommends business decisions.
hero_image: projects/aakash.png
hero_tag: # featured
filter_category:
  - Artificial Intelligence
tags:
  - AI Chatbot
  - Serverless
  - LangSmith
  - LLM
  - RAG
  - Function Calling
  - Gemini Flash 2.0
  - Gemini Pro 2.5 (Experimental)
links:
  preview: https://gem-finder.vercel.app/
  github: https://github.com/aakash-durgabari/gem-finder
timeline: 4 months
year: 2024
benefits:
  -
    metric: 3
    label: Power of AI
  -
    metric: SVG
    label: Multilingual AI
  -
    metric: 95%
    label: AI Accuracy
  -
    metric: +25%
    label: Work Productivity
---

## Problem Statement

A business currently manages all their internal operations and daily work through a custom in-house sotware named "Aakash". The business wanted to experience the power of AI and how  they can use a ChatGPT like UI and streamline their daily operations and help their staff with insights for making business decisions.

## Solution

The existing app was a local app that had a local database, file structure and server for the application. This enabled them to save big in infra costs as the app was very much database dependent.

Thus, a local AI based framework was used to interact with the local data.

To expose the local data to the LLM, MCP Servers were created for each module of the business department. Example -

- Invoices: Read, Write, Filter by Invoice Status.
- Expenses: Read, Write.
- Transactions: Read, Write, Filter
- Vehicle Trips: Read, Write, Filter
- Accounting: Read, Write
- Tax Filing: Read, Write
- Drivers: Read, Write, Update
- GTAs: Read, Write, Update

Along with that, the application was also integrated with external APIs to fetch data when required:

- Vehicle Challan API
- Vehicle Information API
- FASTag Balance
- Driving License Validation
- Banking APIs from India's leading Payment Gateway and Banking Service - Razorpay

## Tech Stack

-

## Result

- 20+ coversations per day
- 95% helpful conversations
- Approx. 25% increase in worker productivity was observed by the Client (This numbers were measured and shared by the client)

## Ongoing Updates

- With new models that offer increased efficiency, speed and cost benefits arrive every month. The project is under active support and development, where new models are integrated to save costs for the client.
