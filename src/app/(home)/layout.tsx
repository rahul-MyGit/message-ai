import { SessionProvider } from "next-auth/react"


interface HomeLayoutProp {
    children: React.ReactNode
}

export default function HomeLayout({children} : HomeLayoutProp) {
    return (
        <>
        <SessionProvider>
            {children}
        </SessionProvider>
        </>
    )
}