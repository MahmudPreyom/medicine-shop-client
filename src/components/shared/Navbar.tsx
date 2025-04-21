'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <Link href="/" className="text-2xl font-bold text-primary">
            MediMart
          </Link>
        </div>

        {/* Center: Nav Links (Desktop Only) */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Search Input (Large screens) */}
          <Input
            type="text"
            placeholder="Search..."
            className="hidden lg:block w-64"
          />

          {/* Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-5 h-5 text-muted-foreground hover:text-primary transition" />
            <span className="absolute -top-2 -right-2 text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded-full">
              2
            </span>
          </Link>

          {/* Auth */}
          <Link href="/login">
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <User className="w-4 h-4" /> Login
            </Button>
          </Link>

          <div className="relative">
            <button
              onClick={() => setProfileMenuOpen((prev) => !prev)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <User className="w-5 h-5 text-muted-foreground" />
            </button>
            {profileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md z-50">
                <Link
                  href="/cart"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setProfileMenuOpen(false)}
                >
                  Cart
                </Link>
                <Link
                  href="/orders"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setProfileMenuOpen(false)}
                >
                  Order History
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setProfileMenuOpen(false)}
                >
                  Profile
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide Down) */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 animate-in slide-in-from-top-2 fade-in space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;