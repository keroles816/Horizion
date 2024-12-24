'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const SideBar = ({user}:SiderbarProps) => {
    const pathname = usePathname()
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href='/'
        className='mb-12 cursor-pointer items-center gap-2 flex' 
        >
        <Image src="/icons/logo.svg" 
        width={34}
        height={34}
        alt='main page'
        className='size-[24px] max-xl:size-14'
        />
        <h1 className='sidebar-logo'>
            horizon
        </h1>
        
        </Link>
        {sidebarLinks.map((link) =>{
            const isActive= pathname === link.route || 
            pathname.startsWith(`${link.route}/`)
        
        return(
          <Link key={link.label} 
          href={link.route} 
          className={cn('sidebar-link',{
            'bg-bank-gradient':isActive
          })}>

            <div className='sidebar-icon'>
              <Image 
              src={link.imgURL} 
              width={24} 
              height={24} 
              alt={link.label} 
              className={cn({
                'brightness-[3] invert-0':isActive
              })}
              />
            </div>
            <p className={cn('sidebar-label',{
                '!text-white':isActive
            })}>
                {link.label}
                </p>
          </Link>

        )})}
        
            user


      </nav>
      Footer
    </section>
  )
}

export default SideBar