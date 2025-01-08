"use client"

import PaymentCard from '@/components/PaymentCard'
import React from 'react'

const index = () => {
    //TODO: Fetch details of booking
    return (
        <div className='flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container'>
            <PaymentCard label="PRO" current='PRO' landing={true}/>
            <PaymentCard label="FREE" current='FREE'/>
        </div>
    )
}

export default index