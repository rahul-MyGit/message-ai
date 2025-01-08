"use client"

import { usePaths } from '@/hooks/user-nav'
import React from 'react'
import { PAGES_NAME } from './PagesName'
import { Menu } from 'lucide-react'
import Sheet from './Sheet'
import UpgradeCard from '../sidebar/Upgrade/upgrade'
import { SubscriptionPlan } from '../sidebar/SubscriptionPlan'
import { LogoSmall } from '../sidebar/icons/LogoSmall'
import UserName from '../sidebar/userSession'
import { Separator } from '@/components/ui/separator'
import Items from '../sidebar/Items'
import Icons from "../sidebar/icons/index"
import Search from './Search'
import CreateAutomation from './CreateAutomation'
import MainCrumb from './MainCrumb'

const { HelpDuoToneWhite } = Icons()


interface NavbarProps {
    slug: string
}

const Navbar = ({ slug }: NavbarProps) => {
    const { page } = usePaths()
    const currentPage = PAGES_NAME.includes(page) || page == slug

    return (
        currentPage && (
            <div className='flex flex-col'>
                <div className='flex gap-x-3 lg:gap-x-5 justify-end p-2'>
                    <span className='lg:hidden flex items-center flex-1 gap-x-2'>
                        <Sheet trigger={<Menu />} className='lg:hidden' side='left'>
                            <div className='flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filter backdrop-blur-3xl'>
                                <div className='flex gap-x-2 items-center p-5 justify-center'>
                                    <LogoSmall />
                                </div>
                                <div className='flex flex-col py-3'>
                                    <Items page={page} slug={slug} />
                                </div>
                                <div className='px-16'>
                                    <Separator orientation="horizontal" className="bg-[#333336]" />
                                </div>
                                <div className='px-3 flex flex-col gap-y-5'>
                                    <div className='flex gap-x-2'>
                                        <UserName />
                                        <p className='text-[#9B9A0] text-gray-50'>Profile</p>
                                    </div>
                                    <div className='flex gap-x-3'>
                                        <HelpDuoToneWhite />
                                        <p className='text-[#9B9CA0]'>Help</p>
                                    </div>
                                </div>
                                <SubscriptionPlan type="FREE">
                                    <div className='flex-1 flex flex-col justify-end'>
                                        <UpgradeCard />
                                    </div>
                                </SubscriptionPlan>
                            </div>
                        </Sheet>
                    </span>
                    <Search />
                    <CreateAutomation />
                </div>
                <MainCrumb page={page === slug ? 'Home' : page} slug={slug} />
            </div>
        )
    )
}

export default Navbar