import React from 'react'

interface LayoutTypes{
    children: React.ReactNode
    params: {slug: string}
}

const Layout = ({children, params} : LayoutTypes) => {

    //React-Query for state

  return (
    <div className='p-4'>
        {children}
    </div>
  )
}

export default Layout;