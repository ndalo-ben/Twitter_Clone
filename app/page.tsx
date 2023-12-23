import Sidebar from './components/Sidebar';
import Feed from './components/Feed'

export default function Home() {
  return (
    <main>
      <main className="min-h-screen flex max-w-7xl mx-auto">
        {/* sidebar  */}
        <Sidebar />

        {/* feed  */}
        <Feed />
      </main>
    </main>

  )
}
