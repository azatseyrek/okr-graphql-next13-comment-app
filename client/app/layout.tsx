import type { Metadata } from 'next';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { roboto } from '@/fonts';
import '@/styles/globals.css';
import '@/styles/reset.css';
import Providers from '@/utils/provider';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Graphql-OKR',
  description: 'Graphql with Next13 for adessoTurkey OKR',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} container`}>
        <Providers>
          <Header />
          <Toaster />
          <main className="hero">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
