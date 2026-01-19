import { ScrollViewStyleReset } from 'expo-router/html';
import { type PropsWithChildren } from 'react';

/**
 * This file is web-only and used to configure the root HTML for every web page during static rendering.
 * The contents of this function only run in Node.js environments and do not have access to the DOM or browser APIs.
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Primary Meta Tags */}
        <title>HighPoint Housekeeping - Professional Property Management</title>
        <meta name="title" content="HighPoint Housekeeping - Professional Property Management" />
        <meta name="description" content="HighPoint Housekeeping provides professional housekeeping and maintenance management solutions for residential properties. Track cleaning tasks, manage maintenance requests, and ensure quality standards." />
        <meta name="keywords" content="housekeeping, property management, cleaning service, maintenance requests, task management, residential cleaning, HighPoint Quincy" />
        <meta name="author" content="HighPoint Housekeeping" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        {/* Note: Update og-image.png with a 1200x630px image for optimal social media sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://highpoint-housekeep.com/" />
        <meta property="og:title" content="HighPoint Housekeeping - Professional Property Management" />
        <meta property="og:description" content="Professional housekeeping and maintenance management solutions for residential properties." />
        <meta property="og:image" content="https://highpoint-housekeep.com/High-Point-Quincy-Logo-FOR-DARK-BG__TRANS-2048x1365.png" />
        <meta property="og:site_name" content="HighPoint Housekeeping" />
        
        {/* Twitter */}
        {/* Note: Update twitter-image.png with a 1200x675px image for optimal Twitter cards */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://highpoint-housekeep.com/" />
        <meta property="twitter:title" content="HighPoint Housekeeping - Professional Property Management" />
        <meta property="twitter:description" content="Professional housekeeping and maintenance management solutions for residential properties." />
        <meta property="twitter:image" content="https://highpoint-housekeep.com/High-Point-Quincy-Logo-FOR-DARK-BG__TRANS-2048x1365.png" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://highpoint-housekeep.com/" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'HighPoint Housekeeping',
              description: 'Professional housekeeping and maintenance management solutions',
              url: 'https://highpoint-housekeep.com',
              logo: 'https://highpoint-housekeep.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: 'English',
              },
              sameAs: [],
            }),
          }}
        />
        
        <ScrollViewStyleReset />
        
        <style dangerouslySetInnerHTML={{
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
        }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
