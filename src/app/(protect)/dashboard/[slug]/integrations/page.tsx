import IntegrationCard from '@/components/global/IntegrationCard'
import { InstagramDuoToneBlue } from '@/components/global/SocialIcon/Instagram'
import { SalesForceDuoToneBlue } from '@/components/global/SocialIcon/SalesForce'
import { TwitterDuoToneBlue } from '@/components/global/SocialIcon/Twitter'
import React from 'react'
import { toast } from 'sonner'

type Props = {
  title: string
  icon: React.ReactNode
  description: string
  strategy: 'INSTAGRAM' | 'CRM' | 'TWITTER'
}

const INTEGRATION_CARDS: Props[] = [
  {
    title: 'Connect Instagram',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mauris scelerisque tincidunt ultrices',
    icon: <InstagramDuoToneBlue />,
    strategy: "INSTAGRAM",

  },
  {
    title: 'Connect Salesforce',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mauris scelerisque tincidunt ultrices',
    icon: <SalesForceDuoToneBlue />,
    strategy: "CRM",
  },
  {
    title: 'Connect Twitter',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mauris scelerisque tincidunt ultrices',
    icon: <TwitterDuoToneBlue />,
    strategy: "TWITTER",
  }
]


const page = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-full lg:w-8/12 gap-y-5'>
        {
          INTEGRATION_CARDS.map((card, key) => (
            <IntegrationCard  key={key} {...card} />
          ))
        }
      </div>
    </div>
  )
}

export default page