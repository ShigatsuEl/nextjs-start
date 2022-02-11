This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learning

### 사전 렌더링

Next.js에서 사전 렌더링은 중요한 개념이다.
기본적으로 Next.js는 모든 페이지를 미리 렌더링합니다.
각 페이지에 대해 미리 HTML을 생성하고 생성된 HTML은 해당 페이지에서 필요한 최소한의 JavaScript 코드와 연결됩니다.
브라우저에서 페이지를 로드하면 해당 JavaScript 코드가 실행되고 페이지가 상호작용하는 방식으로 만들어집니다.
이를 `hydration` 라고 합니다.

반대로 일반적인 React.js 앱인 경우 사전 렌더링이 없습니다.
React.js는 클라이언트 측 JavaScript로 모든 작업을 수행합니다.
만약 페이지가 JavaScript를 활성화할 수 없다면 앱을 볼 수 없을 것 입니다.

클라이언트 측에서 JavaScript 코드를 실행하여 페이지를 볼 수 있는 React.js와 달리 정적 HTML로 사전 렌더링하여 JavaScript 코드가 없어도 볼 수 있는 것이 가장 큰 차이점입니다.
