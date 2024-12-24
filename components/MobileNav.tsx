'use client'
import React,{useState} from 'react'
import Image from 'next/image' 
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { DialogTitle } from '@radix-ui/react-dialog'
  
const MobileNav = ({user}:MobileNavProps) => {
    const[open,setOpen]=useState(false)
    const pathname=usePathname()

  return (
    <section className='w-full max-w-[264px]'>
    <Sheet>
    <SheetTrigger >
        <Image
        src="/icons/hamburger.svg"
        width={30}
        height={30}
        alt='main page'
        className='cursor-pointer'
        />
    </SheetTrigger>
    <SheetContent side="left" className='bg-white border-none'>


        <DialogTitle>
        <Link href='/'
        className=' cursor-pointer items-center gap-1 flex 
        px-4' 
        >
        <Image src="/icons/logo.svg" 
        width={34}
        height={34}
        alt='main page'
       
        />
        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
            horizon
        </h1>
        
        </Link>
        </DialogTitle>


            <div className='mobilenav-sheet'>           
                <SheetClose asChild>

              <nav className='flex h-full flex-col gap-6
             pt-16 text-white'>
                {sidebarLinks.map((link) =>{
                const isActive= pathname === link.route || 
                pathname.startsWith(`${link.route}/`)
            
            return(
                <SheetClose asChild key={link.label}>
                  
            <Link key={link.label} 
            href={link.route} 
            className={cn('mobilenav-sheet_close w-full',{
                'bg-bank-gradient':isActive
                     })}>

                
                <Image 
                src={link.imgURL} 
                width={20} 
                height={20} 
                alt={link.label} 
                className={cn({
                    'brightness-[3] invert-0':isActive
                })}
                />
               
                <p className={cn('text-16 font-semibold text-black-2',{
                    '!text-white':isActive
                })}>
                    {link.label}
                    </p>
                      </Link>
                      </SheetClose>
                         )})}

                    </nav>
                </SheetClose>

        </div>
    </SheetContent>
  </Sheet>
   </section>
  
  )
}

export default MobileNav