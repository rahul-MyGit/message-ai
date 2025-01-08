import { Button } from '@/components/ui/button'
import React from 'react'
import Icons from "@/components/global/sidebar/icons/index"

const {AutomationDuoToneWhite} = Icons()

const CreateAutomation = () => {
  return (
    <Button className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] front-medium to-[#1C2D70]'>
        <AutomationDuoToneWhite />
        <p className='lg:inline hidden'>Create an Automation</p>
    </Button>
  )
}

export default CreateAutomation