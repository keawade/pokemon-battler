import Head from 'next/head';
import type { PropsWithChildren } from 'react';
import Footer from './footer';
import Navigation from './navigation';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-slate-700">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-2">
        <Navigation />

        <main className="rounded-lg p-4 mb-3 bg-slate-50">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
