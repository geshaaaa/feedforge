# FeedForge

A modern Next.js website with Tailwind CSS, featuring a hero section and logo carousel inspired by Pinecone's design.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Create a `.env.local` file with:

```bash
SENDGRID_API_KEY=your_sendgrid_api_key
CONTACT_TO_EMAIL=team@yourcompany.com
SENDGRID_FROM_EMAIL="verified@yourdomain.com"
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-3-flash-preview
```

For Twilio SendGrid delivery:
- `SENDGRID_FROM_EMAIL` must be a verified sender identity (single sender or domain-authenticated address) in your SendGrid account.
- Sending from an unverified address is rejected by SendGrid.

## Features

- **Hero Section**: Clean, modern design with value proposition and interactive charts
- **Logo Carousel**: Displays partner company logos
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Light Blue Theme**: Custom light blue color scheme throughout

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Recharts (for graphs and charts)

