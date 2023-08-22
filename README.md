A full stack application built using [Next.js](https://nextjs.org) with [React Server Components](https://vercel.com/blog/understanding-react-server-components), [Tailwind CSS](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com), [Clerk](https://clerk.com), [Prisma](https://www.prisma.io), [PlanetScale](https://planetscale.com), [Cloudinary](https://cloudinary.com) and [Stripe](https://stripe.com).

## Environment Variables

Create a `.env` file in your root directory:

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

STRIPE_SECRET_KEY=
STRIPE_SECRET_WEBHOOK=

FRONTEND_STORE_URL=
```

## Getting Started

To run this project locally:

```bash
npm i

npx prisma db push

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
