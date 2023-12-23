import Image from 'next/image'
import { ChatIcon, TrashIcon, HeartIcon, ShareIcon, ChartBarIcon, DotsHorizontalIcon } from '@heroicons/react/outline';

export default function Post({ post }) {
    return (
        <div className='flex p-3 cursor-pointer border-b border-gray-200'>
            {/*user image  */}
            <div className="relative h-11 w-11 rounded-full mr-4">
                <Image
                    src={post.userImg}
                    alt='user profile'
                    fill
                    quality={100}
                    priority
                    sizes='lg'
                />
            </div>

            {/* right side  */}
            <div className="w-full">
                {/* header  */}
                <div className="flex items-center justify-between w-full">
                    {/* user info  */}
                    <div className="flex items-center space-x-1 whitespace-nowrap">
                        <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>{post.name}</h4>
                        <span className='text-sm sm:text-[15px]'>@{post.username} - </span>
                        <span className='text-sm sm:text-[15px] hover:underline'>{post.timestamp}</span>
                    </div>

                    {/* dot icon  */}
                    <div>
                        <DotsHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2' />
                    </div>
                </div>

                {/* post text  */}
                <p className='text-gray-800 text-[15px] sm:text-[16px] mb-2 '>{post.text}</p>

                {/* post image  */}
                <div className='relative h-80 rounded-2xl mr-2'>
                    <Image src={post.img} alt='post image' fill quality={100} sizes='lg' />
                </div>

                {/* icons */}
                <div className='flex justify-between text-gray-500 p-2'>
                    <ChatIcon className="h-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                    <TrashIcon className="h-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
                    <HeartIcon className="h-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
                    <ShareIcon className="h-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                    <ChartBarIcon className="h-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                </div>


            </div>
        </div>
    )
}
