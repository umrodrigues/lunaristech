import Script from 'next/script';
import { NoSSR } from './packages/ui/components/NoSSR';

export const metadata = {
  title: 'Lunaris Tech - Transformando ideias em soluções digitais',
  description: 'Somos a Lunaris Tech — apaixonados por tecnologia e inovação. Transformamos ideias em soluções digitais com excelência, agilidade e impacto.',
  keywords: 'desenvolvimento web, aplicativos mobile, soluções digitais, tecnologia, inovação, Next.js, React, TypeScript',
  authors: [{ name: 'Lunaris Tech' }],
  creator: 'Lunaris Tech',
  publisher: 'Lunaris Tech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lunaristech.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lunaris Tech - Transformando ideias em soluções digitais',
    description: 'Somos a Lunaris Tech — apaixonados por tecnologia e inovação. Transformamos ideias em soluções digitais com excelência, agilidade e impacto.',
    url: 'https://lunaristech.com.br',
    siteName: 'Lunaris Tech',
    images: [
      {
        url: '/images/branding/logo-lunaris.png',
        width: 1200,
        height: 630,
        alt: 'Lunaris Tech Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lunaris Tech - Transformando ideias em soluções digitais',
    description: 'Somos a Lunaris Tech — apaixonados por tecnologia e inovação. Transformamos ideias em soluções digitais com excelência, agilidade e impacto.',
    images: ['/images/branding/logo-lunaris.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/branding/favicon.ico',
    shortcut: '/images/branding/favicon.ico',
    apple: '/images/branding/favicon.ico',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'G-EESB3Q218S',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
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
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
