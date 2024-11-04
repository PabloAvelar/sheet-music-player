import { NextUIProvider } from '@nextui-org/react'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Eyelody',
  description: 'Music sheet translator',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}