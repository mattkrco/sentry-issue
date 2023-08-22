This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that is serving as a reproducible example of an issue I am having with sentry.io.

## To reproduce

Install all packages using npm or yarn

Then update all instances of <ENTER YOUR VALUE HERE> with your own values in the following files:

- sentry.server.config.js
- sentry.edge.config.js
- sentry.client.config.js
- .sentryclirc
- next.config.js

If you run with:

```bash
npm run dev
# or
yarn dev
```

and click the Break Stuff button, the error will show up in sentry.

However, if you run

```bash
npm run dev
# or
yarn dev
```

and then

```bash
http-server ./out
```

and then click the same button, it will not show up in sentry.
