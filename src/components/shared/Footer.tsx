import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t text-muted-foreground mt-16 text-center">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-lg font-bold text-primary">MediMart</h2>
          <p className="max-w-[50%] md:max-w-full mx-auto mt-2">
            Your trusted online medicine partner. Delivering healthcare with care and quality.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-md font-semibold text-gray-900">Explore</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
            <li><Link href="/login" className="hover:underline">Login</Link></li>
            <li><Link href="/register" className="hover:underline">Register</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-md font-semibold text-gray-900">Support</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQs</Link></li>
            <li><Link href="/help" className="hover:underline">Help Center</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-md font-semibold text-gray-900">Legal</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center border-t text-xs py-4 bg-gray-100">
        &copy; {new Date().getFullYear()} MediMart. All rights reserved.
      </div>
    </footer>
  );
}