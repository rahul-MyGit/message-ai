import { Button } from '@/components/ui/button'
import { CreditCardIcon, Loader2 } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

type Props = {}

const PaymentButton = (props: Props) => {
  return (
    <Button
      onClick={() => toast("Soon to be comming")}
      className="bg-gradient-to-br
     text-white 
     rounded-full 
    from-[#6d60a3] 
    via-[#9434E6] 
    font-bold 
    to-[#CC3BD4]"
    >
      {false ? <Loader2 className="animate-spin" /> : <CreditCardIcon />}
      Upgrade
    </Button>
  )
}

export default PaymentButton