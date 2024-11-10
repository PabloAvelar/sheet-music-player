import { NextUIProvider } from '@nextui-org/react'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import './globals.css'

export const metadata: Metadata = {
  title: 'Eyelody',
  description: 'Music sheet translator',
  icons: {
    icon: '/eyelody_logo.png',
  }
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