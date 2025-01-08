
import {Sheet as ShadcnSheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";


interface SheetPropsType {
    trigger: React.ReactNode
    children: React.ReactNode
    className?: string
    side: 'left' | 'right'
}

const Sheet = ({trigger, children, className, side}: SheetPropsType) => {
  return (
    <ShadcnSheet>
        <SheetTrigger className={className}>
            {trigger}
        </SheetTrigger>
        <SheetContent side={side} className="p-0">{children}</SheetContent>
    </ShadcnSheet>
  )
}

export default Sheet
