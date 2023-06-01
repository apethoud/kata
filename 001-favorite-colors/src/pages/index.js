import Head from 'next/head'
import { Inter } from 'next/font/google'
import ColorChart from './components/ColorChart'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Favorite Colors</title>
        <meta name="description" content="A list of my favorite colors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ padding: 24 }}>
        <ColorChart />
      </main>
    </>
  )
}
