'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Lets Talk 👋</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Have questions, feedback, or just want to say hi? We&rsquo;re always here to help you stay healthy and informed.
        </p>
      </section>

      {/* Contact Form */}
      <section className="bg-white border rounded-xl shadow-md p-8 space-y-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Jane Doe" />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="I need help with my order..." />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} placeholder="Write your message here..." />
          </div>

          <Button type="submit" className="w-full flex items-center gap-2">
            <Send className="w-4 h-4" /> Send Message
          </Button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="text-center space-y-2">
        <p className="text-muted-foreground">Prefer direct contact?</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-medium text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            support@medimart.com
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            +1 (800) 123-4567
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;