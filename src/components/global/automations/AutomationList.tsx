"use client"

import { Button } from '@/components/ui/button'
import { usePaths } from '@/hooks/user-nav'
import Link from 'next/link'
import React from 'react'
import GradientButton from './GradientButton'

const AutomationList = () => {
    //TODO: Fetch List from DB, if not present then show no list

    const { pathname } = usePaths()
    return (
        <div className='flex felx-col gap-y-3'>
            <Link
                href={`${pathname}/123123`}
                className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] flex border-[#545454]"
            >
                <div className='flex flex-col flex-1 items-start'>
                    <h2 className="text-xl font-semibold">Automation</h2>
                    <p className="text-[#9B9CA0] text-sm font-light mb-2">
                        This is from the comment
                    </p>
                    <div className="flex flex-col justify-between">
                        <p className="capitalize text-sm font-light text-[#9B9CA0]">
                            {`2025-01-07`}
                        </p>
                        <GradientButton
                            type="BUTTON"
                            className="w-full bg-background-80 text-white hover:bg-background-80"
                        >
                            Smart AI
                        </GradientButton>
                        <Button className="bg-background-80 hover:bg-background-80 text-white">
                            Standard
                        </Button>
                    </div>
                </div>

            </Link>
        </div>
    )
}

export default AutomationList