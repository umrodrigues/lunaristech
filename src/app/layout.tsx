export const metadata = {
  title: 'LunaristTech',
  description: 'Tecnologia e inovação sob medida.',
  icons: {
    icon: '/favicon.ico',  
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
