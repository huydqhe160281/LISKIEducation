import React from 'react'
import theme from '@/config/theme'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): any {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:url" content="https://liskieducation.vercel.app" />
          <meta property="og:image" content="/images/logo.jpg" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="LISKI Education" />

        {/* Tham chiếu tới favicon trong thư mục public */}
        <link rel="icon" href="/images/favicon.png" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />

          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.background.paper} />

          <meta content="#fbfbfb" name="theme-color" />
          <meta content="#fbfbfb" name="msapplication-navbutton-color" />
          <meta content="#fbfbfb" name="apple-mobile-web-app-status-bar-style" />
          <meta content="yes" name="apple-mobile-web-app-capable" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,700;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          {/* No emotion styles tags since we're removing SSR */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
