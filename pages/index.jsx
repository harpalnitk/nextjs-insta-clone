import Header from '@/components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>Instagram App</title>
      <meta name='description' content='Instagram clone tutorial'/>
      <link rel="icon" href="/favicon.ico" />

    </Head>
    
    <Header/>
    </>

  )
}
