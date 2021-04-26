import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

import Layout from '@components/Layout';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Work+Sans:wght@900&display=swap');
          </style>
        </Head>
        <body>
          <Layout>
            <Main />
          </Layout>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
