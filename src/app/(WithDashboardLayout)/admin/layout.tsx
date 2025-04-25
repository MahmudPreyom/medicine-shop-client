'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUser } from '@/hooks/useUser';

const adminLinks = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Medicines', href: '/admin/medicines' },
  { label: 'Orders', href: '/admin/orders' },
  { label: 'Users', href: '/admin/users' },
  { label: 'Home Page', href: '/' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user || user.role !== 'admin') {
        router.push('/');
      }
    }
  }, [user, loading, router]);

  if (loading || !user || user.role !== 'admin') {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-lg text-gray-600">Checking access...</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar for desktop */}
      <aside className="w-64 bg-gray-100 p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'block text-sm font-medium text-gray-700 hover:text-black',
                pathname === link.href && 'text-black font-semibold'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Sidebar drawer for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-64 bg-gray-100 p-6 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Admin Panel</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="space-y-4">
              {adminLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block text-sm font-medium text-gray-700 hover:text-black',
                    pathname === link.href && 'text-black font-semibold'
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div
            className="flex-1 bg-black/30"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 w-full">
        {/* Topbar for mobile */}
        <div className="md:hidden mb-6 flex justify-between items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md border bg-white shadow"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Admin</h1>
        </div>

        {children}
      </div>
    </div>
  );
}