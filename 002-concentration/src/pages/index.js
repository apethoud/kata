import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Flex } from './styles'
import { useState } from 'react'
import { initialCards } from './initialCards'
import Card from './components/Card/Card'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [cards, setCards] = useState(initialCards);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{ fontSize: 24 }}>Concentration</div>
        <Flex>
          {cards.map(card => (
            <Card 
              key={card.id}
              id={card.id}
              isFlipped={card.isFlipped} />
          ))}
        </Flex>
      </main>
    </>
  )
}