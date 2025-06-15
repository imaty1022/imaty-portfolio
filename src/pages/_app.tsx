import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>imaty | ポートフォリオ</title>
        <meta name="description" content="imatyの職務経歴・スキル・プロジェクトを紹介するシンプルなポートフォリオサイトです。" />
      </Head>
      <main className="min-h-screen py-10 px-4 max-w-2xl mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  );
}
