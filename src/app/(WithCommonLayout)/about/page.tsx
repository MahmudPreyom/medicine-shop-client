'use client';

'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import image_one from "@/assets/images/image_one.png"
import Image from "next/image";

const AboutPage = () => {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12 space-y-20">

            {/* Hero Section */}
            <section className="text-center space-y-4">
                <Badge variant="outline" className="text-primary">Who We Are</Badge>
                <h1 className="text-4xl font-bold leading-tight text-gray-800">
                    Empowering Health Through Innovation
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    At MediMart, our mission is simple — to make quality healthcare accessible, affordable, and fast.
                    We are reshaping how medicines reach people, one delivery at a time.
                </p>
                <Button className="mt-4" asChild>
                    <Link href="/shop">Explore Our Products</Link>
                </Button>
            </section>

            {/* Stats Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                    { label: "Medicines Delivered", value: "1M+" },
                    { label: "Happy Customers", value: "500K+" },
                    { label: "Years in Service", value: "5+" },
                    { label: "Verified Products", value: "100%" },
                ].map((item) => (
                    <div key={item.label} className="bg-gray-50 border rounded-xl p-6 shadow-sm">
                        <h3 className="text-3xl font-bold text-primary">{item.value}</h3>
                        <p className="text-muted-foreground mt-1">{item.label}</p>
                    </div>
                ))}
            </section>

            {/* Story Section */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        MediMart was born out of a passion for bridging the gap between healthcare and technology.
                        From humble beginnings in 2020, we have grown into a nationwide online pharmacy trusted by hundreds of thousands.
                        <br /><br />
                        Our team works tirelessly to ensure that every delivery is timely, every medicine is genuine, and every user is cared for.
                    </p>
                </div>
                <Image
                    src={image_one}
                    alt="Medicine delivery illustration"
                    className="rounded-xl shadow-md object-cover w-full h-full max-h-[300px]"
                    priority
                />
            </section>

            {/* CTA */}
            <section className="text-center space-y-4 bg-primary/5 py-10 rounded-lg">
                <h2 className="text-2xl font-bold text-primary">Join the MediMart Journey</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Whether you are a customer, partner, or healthcare provider — let&apos;s make healthcare better, together.
                </p>
                <Button asChild>
                    <Link href="/contact">Get in Touch</Link>
                </Button>
            </section>
        </main>
    );
}
export default AboutPage;