import React from 'react'
import Sidebar from "@/components/global/sidebar"

interface LayoutTypes{
    children: React.ReactNode
    params: {slug: string}
}

const Layout = ({children, params} : LayoutTypes) => {

    //React-Query for state

  return (
    <div className='p-4'>
        <Sidebar slug={params.slug}/>
        {children}
    </div>
  )
}

export default Layout;