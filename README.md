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

### 두 가지 형태의 사전 렌더링

Next.js에는 정적 생성 과 서버 측 렌더링 의 두 가지 사전 렌더링 형식이 있습니다.
차이점은 페이지에 대한 HTML을 생성 할 때 입니다.

- `정적 생성` 은 빌드 시 HTML을 생성하는 사전 렌더링 방법입니다.
  사전 렌더링된 HTML은 각 요청에서 재사용 됩니다.
- `서버 측 렌더링` 은 각 요청 에 대해 HTML을 생성하는 사전 렌더링 방법입니다.

기본적으로 정적 생성 방식이 서버 측 렌더링 방식보다 속도가 빠르다.
빌드 시 미리 만들어둔 HTML을 보여주는 것이 사용자가 페이지를 요청할 때마다 서버에서 HTML을 보내주는 방법보다 빠르기 때문이다.
그래서 가능하면 정적 생성을 사용하는 것이 좋다.
정적 생성을 해야하는 경우는 아래와 같다.

- 마케팅 페이지
- 블로그 게시물
- 전자상거래 제품 목록
- 도움말 및 문서

사전 렌더링 및 데이터 가져오기
두 가지 형태의 사전 렌더링
Next.js에는 정적 생성 과 서버 측 렌더링 의 두 가지 사전 렌더링 형식이 있습니다. 차이점은 페이지에 대한 HTML을 생성 할 때 입니다.

정적 생성 은 빌드 시 HTML을 생성하는 사전 렌더링 방법입니다 . 사전 렌더링된 HTML은각 요청에서 재사용 됩니다.
서버 측 렌더링 은 각 요청 에 대해 HTML을 생성하는 사전 렌더링 방법입니다.
Static Generation
Server-side Rendering
npm run dev개발 모드에서( 또는 를 실행할 때 yarn dev) 모든 페이지는 정적 생성 을 사용하는 페이지의 경우에도 각 요청에서 미리 렌더링 됩니다 .

페이지당 기준
중요하게도 Next.js를 사용하면 각 페이지에 사용할 사전 렌더링 양식을 선택할 수 있습니다. 대부분의 페이지에는 정적 생성 을 사용하고 다른 페이지에는 서버 측 렌더링 을 사용 하여 "하이브리드" Next.js 앱을 만들 수 있습니다 .

Per-page Basis
정적 생성 과 서버 측 렌더링 을 사용하는 경우
페이지를 한 번 만들고 CDN에서 제공할 수 있으므로 모든 요청에 ​​대해 서버가 페이지를 렌더링하도록 하는 것보다 훨씬 빠르기 때문에 가능 하면 정적 생성 (데이터 포함 및 제외)을 사용하는 것이 좋습니다 .

다음을 포함한 다양한 유형의 페이지에 대해 정적 생성 을 사용할 수 있습니다 .

마케팅 페이지
블로그 게시물
전자상거래 제품 목록
도움말 및 문서

사용자의 요청에 앞서 이 페이지를 미리 렌더링할 수 있습니까?"라고 질문해 봅시다.
대답이 그렇다일 경우 정적 생성을 선택해야 합니다.
반대로 아니다일 경우(사용자의 요청에 앞서 페이지를 미리 렌더링할 수 없는 경우) 정적 생성은 좋은 생각이 아닙니다.
예를 들어 페이지에 자주 업데이트 되는 데이터가 표시되고 모든 요청에 따라 페이지 콘텐츠가 변경되는 경우, 서버 측 렌더링을 사용하는 것이 좋습니다.
속도는 느려지지만 미리 렌더링된 페이지는 항상 최신 상태로 유지됩니다.
또는 사전 렌더링을 건너뛰고 클라이언트 측 JavaScript를 사용하여 자주 업데이트되는 데이터를 채울 수 있습니다.

중요하게도 Next.js를 사용하면 각 페이지에 사용할 사전 렌더링 양식을 선택할 수 있습니다.
대부분의 페이지에는 정적 생성을 사용하고 다른 페이지에는 서버 측 렌더링을 사용 하여 "하이브리드" Next.js 앱을 만들 수 있습니다.

### 데이터가 있거나 없는 정적 생성

정적 생성은 데이터 유무에 관계없이 수행할 수 있습니다.
지금까지 우리가 만든 모든 페이지([Comment] 두 가지 형태의 사전 렌더링 | 커밋 전까지)는 외부 데이터를 가져올 필요가 없습니다.
이러한 페이지는 앱이 프로덕션용으로 빌드될 때 자동으로 정적으로 생성됩니다.

그러나 일부 페이지의 경우 먼저 외부 데이터를 가져오지 않고는 HTML을 렌더링하지 못할 수 있습니다.
파일 시스템에 액세스하거나 외부 API를 가져오거나 빌드 시 데이터베이스를 쿼리해야 할 수도 있습니다.
Next.js는 이 경우(데이터를 사용한 정적 생성)를 즉시 지원합니다.

- 데이터를 사용한 정적 생성

  ```javascript
  export default function Home(props) { ... }

  export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.
    const data = ...

    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
      props: ...
    }
  }
  ```

  `getStaticProps` 함수를 생성하여 사용합니다. 이름은 변경할 수 없습니다.

  - getStaticProps 함수를 사용하면 프로덕션 빌드 시간에 실행되고
  - 함수 내에서 외부 데이터를 가져와 페이지에 소품으로 보낼 수 있습니다.

  getStaticProps는 서버 측에서만 실행이 됩니다.
  클라이언트 측에서 실행되지 않습니다.
  브라우저용 JS 번들에도 포함되지 않습니다.
  즉, 직접 데이터베이스 쿼리와 같은 코드를 브라우저로 보내지 않고도 작성할 수 있습니다.

  getStaticProps는 페이지에서만 내보낼 수 있습니다.
  페이지가 아닌 파일에서는 내보낼 수 없습니다.
  페이지가 렌더링 되기 전에 React에 필요한 모든 데이터가 있어야 하기 때문입니다.

### 요청 시 데이터 가져오기

#### Server-side Rendering

빌드 시간이 아닌 요청 시간에 데이터를 가져와야 하는 경우 서버 측 렌더링 을 시도할 수 있습니다.
서버 측 렌더링 을 사용하려면 getStaticProps 대신 getServerSideProps을 내보내야 합니다.

```javascript
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  }
}
```

getServerSideProps 요청 시 호출 되기 때문에 해당 매개변수(context)에는 요청별 매개변수가 포함됩니다.

#### Client-side Rendering

요청 시간에 데이터를 가져와야 하지만 데이터를 미리 렌더링할 필요가 없는 경우 다음 전략(클라이언트 측 렌더링 이라고 함)을 사용할 수도 있습니다.

- 외부 데이터가 필요하지 않은 페이지 부분을 정적으로 생성(사전 렌더링)합니다.
- 페이지가 로드되면 JavaScript를 사용하여 클라이언트에서 외부 데이터를 가져오고 나머지 부분을 채웁니다.

이 접근 방식은 예를 들어 사용자 대시보드 페이지에 적합합니다.
대시보드는 사용자별 비공개 페이지이므로 SEO와 관련이 없으며 페이지를 미리 렌더링 할 필요가 없습니다.

#### SWR

Next.js 뒤에 있는 팀은 SWR 이라는 데이터 가져오기를 위한 React 후크를 만들었습니다.
클라이언트 측에서 데이터를 가져오는 경우 적극 권장합니다.
캐싱, 재검증, 초점 추적, 간격에 따라 다시 가져오기 등을 처리합니다.
