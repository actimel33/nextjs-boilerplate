import './globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';

import { Roboto } from 'next/font/google';

import Layout from '@components/organisms/root-layout';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '500', '700', '900'] });

export const metadata: Metadata = {
  title: 'My Assets',
  description: 'Manage Your Assets In One Place',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full" lang="en" suppressHydrationWarning>
      <body className={clsx(inter.className, 'h-full')} suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
