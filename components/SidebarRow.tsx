import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

export default function SidebarRow({ Icon, title }: Props) {
    return (
        <div className='flex items-center space-x-2 px-4 py-3 rounded-full max-w-fit  cursor-pointer  transition-all duration-200 group hover: bg-gray-50 '>
            <Icon className='h-6 w-6' />
            <p className='group-hover:text-twitter hidden md:inline-flex text-base font-light lg:text-xl'>{title}</p>
        </div>
    )
}
