import { ReactNode } from 'react'
import type { Metadata } from 'next'

import SmallLayout from '@/components/small-layout'
import './globals.css'


export const metadata: Metadata = {
    title: 'Portfolio || Rohit Mondal',
    description: `Rohit Mondal's Portfolio`,
    viewport: { width: "device-width", initialScale: 1 }
}


type LayoutProps = {
    children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <SmallLayout>
            {children}
        </SmallLayout>
    )
}
