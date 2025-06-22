import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>imaty | Portfolio</title>
        <meta name="description" content="imaty's portfolio" />
        <link rel="icon" href="/images/profile/profile.png" />
      </Head>
      <div className="relative min-h-screen">
        <div 
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-40" 
          style={{ 
            backgroundImage: 'url(/images/background.png)',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white/70 to-white/80 dark:from-gray-900/80 dark:to-gray-800/80" />
        <main className="relative py-10 px-4 max-w-2xl mx-auto z-10">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
