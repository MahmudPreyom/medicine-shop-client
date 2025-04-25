'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Go back home
      </Link>
    </div>
  );
}