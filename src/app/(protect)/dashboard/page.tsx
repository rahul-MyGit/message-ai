import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'


const Page = async () => {
  const session = await auth()
  if(!session || !session.user.id){
    redirect("/")
  }
  return (
    <div>page</div>
  )
}

export default Page