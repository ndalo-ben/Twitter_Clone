import SidebarMenuItem from './SidebarMenuItem'
import Image from 'next/image'
import { HomeIcon } from "@heroicons/react/solid"
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, UserIcon, DotsHorizontalIcon } from '@heroicons/react/outline'


function Sidebar() {
  return (
    <div className='hidden sm:flex flex-col gap-4 items-center xl:items-center xl:w-[340px] p-2 fixed h-full'>
      {/* logo  */}
      <div className='relative flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
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
      <div className="flex flex-col py-4 gap-2">
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
      <button className='bg-blue-700 px-8 py-1 rounded-md '>
        Tweet
      </button>

      {/* mini profile  */}
      <div className="flex items-center justify-between gap-2 px-1 py-1 rounded-md border">
        <div className="relative h-12 w-12 rounded-full border">
          <Image
            src={"/logo.jpeg"}
            alt='profile'
            fill
            priority
            quality={100}
            sizes='lg'
            className='rounded-full'
          />
        </div>
        <div className="text-sm">
          <h4>TechWolf</h4>
          <p>@techwolf_dev</p>
        </div>
        <DotsHorizontalIcon className='h-5' />

      </div>

    </div>
  )
}

export default Sidebar
