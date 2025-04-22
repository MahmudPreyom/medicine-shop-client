'use client';

import Image from 'next/image';
import Link from 'next/link';
import image_three from "@/assets/images/image_three.png"

const BrandingSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-24 mx-auto">
      <div className="w-full max-w-xl">
        <div className="mb-4 inline-block px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
          Welcome to MediMart
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Empowering Health Through <span className="text-black">Trusted Care</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover a faster, safer way to get your medicines. MediMart brings authentic healthcare products to your door with just a few clicks.
        </p>
        <Link href="/shop">
          <button className="bg-black text-white px-6 py-3 text-base rounded-xl hover:bg-gray-800 transition">
            Explore Our Products
          </button>
        </Link>
      </div>

      {/* <div className="w-full lg:w-3/5 flex justify-center">
        <Image
          src={image_three}
          alt="Online pharmacy illustration"
          width={480}
          height={400}
          className="object-contain"
          priority
        />
        
      </div> */}
    </section>
  );
}

export default BrandingSection;