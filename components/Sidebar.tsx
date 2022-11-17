import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CircleStackIcon,
    EllipsisHorizontalCircleIcon,
    EnvelopeIcon,
    UserIcon,
    HomeIcon

} from "@heroicons/react/24/outline"
import SidebarRow from './SidebarRow'

export default function Sidebar() {
    return (
        <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
            <img className='h-10 w-10 m-3' src="https://links.papareact.com/drq" alt="" />
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={HashtagIcon} title="Explore" />
            <SidebarRow Icon={BellIcon} title="Notifications" />
            <SidebarRow Icon={EnvelopeIcon} title="Messages" />
            <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
            <SidebarRow Icon={CircleStackIcon} title="Lists" />
            <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
            <SidebarRow Icon={UserIcon} title="Sign In" />
        </div>
    )
}
