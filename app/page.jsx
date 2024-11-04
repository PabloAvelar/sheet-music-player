import LandingPage from './landing/page';
import '../lib/fontawesome';
import { NextUIProvider } from '@nextui-org/react';

export default function Home() {
  return (
    <NextUIProvider>
      <LandingPage />
    </NextUIProvider>
  );
}

