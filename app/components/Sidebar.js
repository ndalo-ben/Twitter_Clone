import SidebarMenuItem from './SidebarMenuItem'
import Image from 'next/image'
import { HomeIcon } from "@heroicons/react/solid"
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, UserIcon, DotsHorizontalIcon } from '@heroicons/react/outline'


function Sidebar() {
  return (
    <div className='hidden sm:flex flex-col gap-4 items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
      {/* logo  */}
      <div className='relative hoverEffect flex items-center justify-center w-14 h-14 xl:px-1 bg:blue-100'>
        <Image
          src={"/logo.jpeg"}
          alt="logo"
          fill
          priority
          quality={100}
          sizes='lg'
        />
      </div>

      {/* menu  */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem
          text="Home"
          Icon={HomeIcon}
        />
        <SidebarMenuItem
          text="Explore"
          Icon={HashtagIcon}
        />
        <SidebarMenuItem
          text="Notifications"
          Icon={BellIcon}
        />
        <SidebarMenuItem
          text="Messages"
          Icon={InboxIcon}
        />
        <SidebarMenuItem
          text="Bookmarks"
          Icon={BookmarkIcon}
        />
        <SidebarMenuItem
          text="Lists"
          Icon={ClipboardIcon}
        />
        <SidebarMenuItem
          text="Profile"
          Icon={UserIcon}
        />
        <SidebarMenuItem
          text="More"
          Icon={DotsCircleHorizontalIcon}
        />
      </div>
      {/* tweet button  */}
      <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>
        Tweet
      </button>

      {/* mini profile  */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <div className="relative h-12 w-12 rounded-full border">
          <Image
            src={"/user.jpeg"}
            alt='profile'
            fill
            priority
            quality={100}
            sizes='lg'
            className='rounded-full xl:mr-2'
          />
        </div>
        <div className="leading-5 hidden xl:inline">
          <h4 className='font-bold'>TechWolf</h4>
          <p className='text-gray-500 '>@techwolf_dev</p>
        </div>
        <DotsHorizontalIcon className='h-5 xl:ml-8 hidden xl:inline' />

      </div>

    </div>
  )
}

export default Sidebar
