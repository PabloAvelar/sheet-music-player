import { Button } from '@nextui-org/react';

export default function LandingPage() {
    return (
      <div className="min-h-screen min-w-screen flex items-center justify-center bg-nord-0 text-nord-6 space-y-8">
        <div className="p-8 rounded-lg bg-nord-8 shadow-lg text-center">
          <h1 className="text-4xl font-bold">Eyelody</h1>
          <p className="text-lg">Listen to what you see (music sheet wise)!</p>
          <div className="mt-4">
            <div className="flex space-x-4 justify-center">
              <div className="w-20 h-20 bg-nord-1 rounded" />
              <div className="w-20 h-20 bg-nord-2 rounded" />
              <div className="w-20 h-20 bg-nord-3 rounded" />
              <div className="w-20 h-20 bg-nord-4 rounded" />
              <div className="w-20 h-20 bg-nord-5 rounded" />
              <div className="w-20 h-20 bg-nord-6 rounded" />
              <div className="w-20 h-20 bg-nord-7 rounded" />
              <div className="w-20 h-20 bg-nord-8 rounded" />
              <div className="w-20 h-20 bg-nord-9 rounded" />
              <div className="w-20 h-20 bg-nord-10 rounded" />
              <Button color="primary" auto>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  