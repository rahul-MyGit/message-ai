import Link from "next/link"
import { SIDEBAR_MENU } from "./SidebarMenu"
import { cn } from "@/lib/utils"


type ItemsProps = {
    page: string
    slug: string
}

const Items = ({page, slug}: ItemsProps) => {
    return SIDEBAR_MENU.map((items) => (
        <Link 
            href={`/dashboard/${slug}/${items.label === 'home' ? '/' : items.label}`}
            key={items.id}
            className={cn(
                'capitalize flex gap-x-2 rounded-full p-3',
                page === items.label && 'bg-[#0f0f0f]',
                page === slug && items.label === 'home'
                  ? 'bg-[#0f0f0f] text-[#9B9CA0]'
                  : 'text-[#9B9CA0]'
              )}
        >
            {items.icon}
            {items.label}
        </Link>
    ))
}

export default Items