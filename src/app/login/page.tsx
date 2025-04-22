'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Home } from "lucide-react";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


type DecodedToken = {
    _id: string;
    email: string;
    role: 'admin' | 'customer';
};

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("https://medicine-shop-server-mu.vercel.app/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const result = await res.json();

            if (result.success) {
                // token set to the localStorage
                localStorage.setItem("accessToken", result.data.accessToken);

                // token decode and set userData to localStorage
                const token = result.data.accessToken;
                const decoded: DecodedToken = jwtDecode(token);
                const userData = {
                    id: decoded._id,
                    email: decoded.email,
                    role: decoded.role,
                };

                localStorage.setItem('user', JSON.stringify(userData));

                console.log("Login successful!");

                decoded.role === 'admin'
                    ? router.push('/admin')
                    : router.push('/');
            } else {
                alert("Login failed: " + result.message);
            }
        } catch (err) {
            console.error("Login error:", err);
            alert("Something went wrong");
        }
    };

    return (
        <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">

            {/* Left: Login Form */}
            <div className="flex flex-col justify-center px-8 py-2 max-w-md mx-auto w-full">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-primary">Welcome Back</h1>
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                            <Home className="w-4 h-4" /> Home
                        </Button>
                    </Link>
                </div>
                <p className="text-muted-foreground mb-6">Log in to your MediMart account</p>

                <form className="space-y-6" onSubmit={handleLogin}>
                    {/* Email */}
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="pr-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2.5 text-muted-foreground"
                            >
                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <Button type="submit" className="w-full">Log In</Button>

                    {/* Register Link */}
                    <p className="text-sm text-center text-muted-foreground">
                        Don’t have an account?{" "}
                        <Link href="/register" className="text-primary hover:underline">
                            Register
                        </Link>
                    </p>
                </form>
            </div>

            {/* Right: Visual Side */}
            <div className="hidden md:block bg-primary/5">
                <div className="h-full flex flex-col justify-center items-center p-10 text-center">
                    <h2 className="text-xl font-semibold text-primary">Your Health, One Click Away</h2>
                    <p className="text-muted-foreground mt-2 max-w-xs">
                        Secure access to your prescriptions, orders, and medical needs.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default LoginPage;