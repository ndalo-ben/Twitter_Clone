import Head from "next/head"
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex max-w-7xl mx-auto">
        <Sidebar />
      </main>
    </main>
  )
}
