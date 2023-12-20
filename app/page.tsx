import Head from "next/head"
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
      </main>
    </main>
  )
}
