import '../styles/globals.css';

import { type Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navbar } from './components/navbar/navbar';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'Agnieszka&Dawid',
  description: 'Informacje o naszym weselu, chodźcie!',
  icons: [{ rel: 'icon', url: '/favicon.svg' }],
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-center font-[family-name:var(--font-geist-sans)] antialiased lg:text-lg`}
      >
        <Analytics />
        <Navbar />
        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
