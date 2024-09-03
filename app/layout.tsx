import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './styles/main.scss';

// const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'natacha romano | portfolio',
  description: 'front-end developer, software engineer, css specialist and web designer.',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
