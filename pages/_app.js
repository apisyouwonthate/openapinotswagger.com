import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

import { DefaultSeo } from 'next-seo';
import '../src/tailwind.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_ID, {
      url: 'https://felidae.openapinotswagger.com',
      includedDomains: ['openapinotswagger.com'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

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
      <Component {...pageProps} />
    </>
  );
}
