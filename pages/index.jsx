import Header from '@/components/Header';
import Head from 'next/head';
import Feed from '@/components/Feed';

export default function Home() {
  return (
    <div className='bg-gray-50 min-h-screen'>
    <Head>
      <title>Instagram App</title>
      <meta name='description' content='Instagram clone tutorial'/>
      <link rel="icon" href="/favicon.ico" />

    </Head>
    
    <Header/>
    <Feed/>
    </div>

  )
}
