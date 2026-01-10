import type { ReactNode } from "react"

type Props = {
    children: ReactNode;
    className?: string;
}

export default function Container({ children, className }: Props){
    return (
        <div className={`mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-8 xl:max-w-[1440px] ${className ?? ""}`}>
            {children}
        </div>
    )
}
