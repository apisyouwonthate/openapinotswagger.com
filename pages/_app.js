import { DefaultSeo } from 'next-seo';
import '../src/tailwind.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="OpenAPI, not Swagger"
        description="Helping the API-building community one link at a time by explaining the importance of OpenAPI vs Swagger nomenclature"
        url="openapinotswagger.com"
        ogImage={{
          url: 'www.whatever.com',
          title: 'OG Image title',
          description: 'Describe the OG image',
          image: ``,
          siteName: 'Your site name',
        }}
        twitter={{
          handle: '@apisyouwonthate',
          site: 'https://twitter.com/apisyouwonthate',
        }}
      />
      <Component {...pageProps} />;
    </>
  );
}
