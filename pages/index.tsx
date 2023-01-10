import Head from 'next/head'
import { Inter } from '@next/font/google'
//import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-1 flex bg-gradient-to-t from-[#accbee] to-[#e7f0fd] justify-center items-center" >
        <span aria-label="roadwork sign">🚧 working in progress...</span>
      </div>
    </>
  )
}
