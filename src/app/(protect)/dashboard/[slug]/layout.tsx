import React from 'react'
import Sidebar from "@/components/global/sidebar"
import Navbar from '@/components/global/Navbar'

interface LayoutTypes {
  children: React.ReactNode
  params: { slug: string }
}

const Layout = ({ children, params }: LayoutTypes) => {


  return (
    <div className='p-2' suppressHydrationWarning>
      <Sidebar slug={params.slug} />
      <div className='lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'>
        <Navbar slug={params.slug} />
        {children}
      </div>
    </div>
  )
}

export default Layout;