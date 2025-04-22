'use client';

import { useState, useEffect } from 'react';

type User = {
  id: string;
  email: string;
  role: 'admin' | 'customer';
};

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        const parsed: User = JSON.parse(stored);
        setUser(parsed);
      } catch {
        setUser(null);
      }
    }
  }, []);

  return {
    user,
    isLoggedIn: !!user,
    isAdmin: user?.role === 'admin',
    isCustomer: user?.role === 'customer',
  };
};