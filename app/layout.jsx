import { NextUIProvider } from '@nextui-org/react';
import { Inter } from 'next/font/google';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import './globals.css';

import Navbar from '../components/navbar';

export const metadata = {
  title: 'Eyelody',
  description: 'Music sheet translator',
  icons: {
    icon: '/eyelody_logo.png',
  },
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NextUIProvider>
          {/* Navigation bar */}
          <Navbar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
