import Sidebar from './components/Sidebar';
import Feed from './components/Feed'
import Widgets from './components/Widgets'

export default function Home() {
  return (
    <main>
      <main className="min-h-screen flex max-w-7xl mx-auto">
        {/* sidebar  */}
        <Sidebar />

        {/* feed  */}
        <Feed />
        {/* widgets  */}
        <Widgets />
      </main>
    </main>

  )
}
