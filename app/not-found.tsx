'use client';
import React from 'react';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        priority
      />
      <div className="p-6 rounded-lg w-1/3 shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Link
          className="mt-2 border-2 border-gray-500 rounded p-2 inline-block text-sm"
          href="/"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
