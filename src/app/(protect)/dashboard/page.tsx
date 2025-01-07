import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'


const Page = async () => {
  const session = await auth()
  if(!session || !session.user.id){
    redirect("/")
  }

  return redirect(`/dashboard/${session.user.name}`)
  
}

export default Page