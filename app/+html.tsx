import { type PropsWithChildren, type ReactElement } from 'react';

/**
 * This file is web-only and used to configure the root HTML for every web page during static rendering.
 * The contents of this function only run in Node.js environments and do not have access to the DOM or browser APIs.
 */
export default function Root({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Primary Meta Tags */}
        <title>GPT Market Plus - Property Services Platform</title>
        <meta name="title" content="GPT Market Plus - Property Services Platform" />
        <meta name="description" content="GPT Market Plus helps teams manage housekeeping and maintenance workflows with task tracking, requests, and quality controls." />
        <meta name="keywords" content="property services, housekeeping, maintenance, task management, workflow tracking, GPT Market Plus" />
        <meta name="author" content="GPT Market Plus" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        {/* Note: Update og-image.png with a 1200x630px image for optimal social media sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gptmarketplus.org/" />
        <meta property="og:title" content="GPT Market Plus - Property Services Platform" />
        <meta property="og:description" content="Manage housekeeping and maintenance workflows with GPT Market Plus." />
        <meta property="og:image" content="https://gptmarketplus.org/High-Point-Quincy-Logo-FOR-DARK-BG__TRANS-2048x1365.png" />
        <meta property="og:site_name" content="GPT Market Plus" />
        
        {/* Twitter */}
        {/* Note: Update twitter-image.png with a 1200x675px image for optimal Twitter cards */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gptmarketplus.org/" />
        <meta property="twitter:title" content="GPT Market Plus - Property Services Platform" />
        <meta property="twitter:description" content="Manage housekeeping and maintenance workflows with GPT Market Plus." />
        <meta property="twitter:image" content="https://gptmarketplus.org/High-Point-Quincy-Logo-FOR-DARK-BG__TRANS-2048x1365.png" />
        
        {/* Favicon and Icons - Must be in head for proper support */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color - Chrome, Edge, and Safari on Android/iOS */}
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://gptmarketplus.org/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'GPT Market Plus',
              description: 'Property services workflow management for housekeeping and maintenance',
              url: 'https://gptmarketplus.org',
              logo: 'https://gptmarketplus.org/android-chrome-512x512.png',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: 'English',
              },
              sameAs: [],
            }),
          }}
        ></script>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            * {
              box-sizing: border-box;
            }
            html, body {
              height: 100%;
              margin: 0;
              padding: 0;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              background-color: #000000;
              color: #FFFFFF;
            }
            #root {
              height: 100%;
            }
          `,
          }}
        ></style>
      </head>
      <body>{children}</body>
    </html>
  );
}
