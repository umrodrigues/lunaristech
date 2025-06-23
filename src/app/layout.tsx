import Script from 'next/script';
import GoogleAnalyticsRouter from './packages/ui/analytics/analytics-router';

export const metadata = {
  title: 'Lunaris Tech',
  description: 'Tecnologia e inovação sob medida.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EESB3Q218S"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EESB3Q218S', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body>
        <GoogleAnalyticsRouter />
        {children}
      </body>
    </html>
  );
}
