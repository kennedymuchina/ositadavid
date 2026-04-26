# Artist Website

A fully custom music artist website with a Shopify-powered merch store, subscription/paywall system, and media integrations. The frontend is a standalone custom build — Shopify runs entirely in the background via its Storefront API.

---

## Tech Stack

- **Frontend:** Next.js (React)
- **Styling:** Tailwind CSS
- **Merch Backend:** Shopify Storefront API
- **Fulfillment:** Printful (via Shopify)
- **Subscriptions/Paywall:** Stripe Billing
- **Email:** Mailchimp (or equivalent)
- **Hosting:** Vercel (in client's name)
- **Repo:** GitHub (in client's name)

---

## Project Structure

```
/
├── app/                  # Next.js app directory
│   ├── page.tsx          # Homepage
│   ├── merch/            # Merch store pages
│   ├── music/            # Music / releases page
│   ├── tour/             # Tour dates page
│   ├── exclusive/        # Subscriber-only content (paywalled)
│   └── account/          # User login, subscription management
├── components/           # Reusable UI components
├── lib/                  # API clients (Shopify, Stripe, Mailchimp)
├── public/               # Static assets
└── .env.local            # Environment variables (never commit this)
```

---

## Environment Variables

Create a `.env.local` file in the root with the following:

```env
# Shopify
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your_storefront_access_token

# Stripe
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Mailchimp
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_AUDIENCE_ID=your_audience_id
MAILCHIMP_SERVER_PREFIX=us1

# Auth (for subscriber accounts)
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=https://yourdomain.com
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- A Shopify store with Storefront API access enabled
- A Stripe account with a subscription product created
- A Vercel account for deployment

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The site will be live at `http://localhost:3000`.

### Build for production

```bash
npm run build
npm start
```

---

## How Each Integration Works

### Shopify + Printful (Merch Store)

Shopify handles the cart, checkout, and order management. Printful is connected directly inside Shopify as a fulfillment app — when a customer checks out, Printful automatically picks it up and ships the order. You manage your products, pricing, and designs inside Shopify. No code changes are needed to add or update merch items.

### Stripe (Subscriptions + Paywall)

Subscribers sign up and pay through Stripe. Once a payment is confirmed, their account is marked as active and they get access to the exclusive content section. If a subscription lapses or is cancelled, access is automatically revoked. You can manage subscribers, pause/cancel plans, and issue refunds directly from the Stripe dashboard.

### Exclusive Content / Paywall

The `/exclusive` route is protected. Any user who isn't logged in or doesn't have an active subscription gets redirected to the signup/payment page. Exclusive content (videos, downloads, posts, etc.) is managed through the codebase — just drop new content into the exclusive section and it's immediately gated.

### Mailchimp (Email List)

An email capture form is placed on the homepage (and optionally other pages). When someone submits, they're added directly to your Mailchimp audience. You manage all email campaigns from inside Mailchimp — nothing to touch in the code for routine email sends.

### Music + Media Embeds

Spotify, Apple Music, and YouTube embeds are placed as iFrame components in the Music section. To update them, swap out the embed URL in the relevant component file — no deeper code knowledge needed.

### Tour Dates

Tour dates are stored in a simple data file (`lib/tourDates.ts`). To add, remove, or update shows, edit that file and redeploy. If you want a more hands-off approach down the line, this can be connected to Songkick or a CMS.

---

## Deployment

The site is hosted on Vercel under your account. Every push to the `main` branch on GitHub automatically triggers a new deployment.

To deploy manually:

```bash
vercel --prod
```

Your domain is configured inside the Vercel dashboard. SSL is handled automatically.

---

## Making Updates

For simple content changes (tour dates, bio text, links), you only need to edit the relevant data or component file and push to GitHub. Vercel handles the rest.

For anything more involved, reach out to the developer who built this project.

---

## Support

Built by Kennedy Muchina
Portfolio: https://kennedymuchina.github.io
GitHub: https://github.com/kennedymuchina
