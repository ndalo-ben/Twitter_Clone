import { SparklesIcon } from '@heroicons/react/outline'
import Input from './Input'
import Post from './Post'


export default function Feed() {
  const posts = [
    {
      id: 1,
      name: "Mike Lawson",
      username: "mike_lawson",
      userImg: "/profile.jpeg",
      img: "/explicit.jpeg",
      text: "nice view!",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      name: "Amy Smith",
      username: "amy_smith",
      userImg: "/amy.jpeg",
      img: "/nature.jpeg",
      text: "My first post!",
      timestamp: "5 hours ago"
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
