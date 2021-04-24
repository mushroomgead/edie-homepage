import Head from 'next/head'
import Homepage from '../components/pages/homepage'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </div>
  )
}
