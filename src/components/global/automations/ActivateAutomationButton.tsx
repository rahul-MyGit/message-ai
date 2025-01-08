import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { ActiveAutomationSvg } from './ActiveAutomationSvg'

//TODO: fetch data using id and activate automation

interface Props {
    id: string
}

const ActivateAutomationButton = ({id} : Props) => {

  return (
    <Button className='lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4'>
        { false ? <Loader2 className="animate-spin"/> : <ActiveAutomationSvg />}
    </Button>
  )
}

export default ActivateAutomationButton