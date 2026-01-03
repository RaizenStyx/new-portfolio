"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // --- HANDLE SUBMIT ---
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.WEB3FORM_ACCESS_KEY || ""); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
         e.currentTarget.reset(); 
      } else {
        console.error("Error:", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container px-4 py-12 md:py-24">
      
      {/* HEADER */}
      <div className="mb-12 md:text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I am currently open to full-time opportunities and freelance contracts. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
        
        {/* LEFT COLUMN: CONTACT INFO */}
        <div className="flex flex-col gap-8">
          
          <Card className="p-8 space-y-8 border-muted/50 bg-gradient-to-br from-background to-muted/20">
            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-muted-foreground mb-2">The best way to reach me.</p>
                <Link href="mailto:me@calexreed.dev" className="text-primary hover:underline font-medium">
                  me@calexreed.dev
                </Link>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-muted-foreground mb-2">Mon-Fri from 11am to 8pm EST, text preferable.</p>
                <Link href="tel:+14233675437" className="text-primary hover:underline font-medium">
                  +1 (423) 367-5437
                </Link>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">
                  Johnson City, Tennessee<br />
                  Remote Available
                </p>
              </div>
            </div>
          </Card>

          {/* SOCIAL LINKS */}
          <Card className="p-8 border-muted/50 bg-gradient-to-br from-background to-muted/20">
            <h3 className="font-semibold text-lg mb-6">Connect on Socials</h3>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link href="https://linkedin.com/in/connorreed-dev" target="_blank">
                  <Icons.linkedIn className="mr-2 h-5 w-5" /> LinkedIn
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link href="https://www.upwork.com/freelancers/~011890ee4ee1c9e2f6" target="_blank">
                  <Icons.upwork className="mr-2 h-5 w-5" /> Upwork
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link href="https://github.com/RaizenStyx" target="_blank">
                  <Icons.gitHub className="mr-2 h-5 w-5" /> GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link href="https://discord.com/users/250628009403351041" target="_blank">
                  <Icons.discord className="mr-2 h-5 w-5" /> Discord
                </Link>
              </Button>
            </div>
          </Card>
        </div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <Card className="p-8">
            {/* --- DESKTOP ONLY HEADER --- */}
            <div className="hidden md:block mb-8 space-y-2">
                <h2 className="text-2xl font-bold">Send a Message</h2>
                <p className="text-muted-foreground">
                Got a technical question or a project idea? Fill out the form below 
                and I'll get back to you within 24 hours.
                </p>
            </div>
          {success ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12 space-y-4 animate-in fade-in zoom-in">
              <div className="rounded-full bg-green-500/10 p-4 text-green-500">
                <CheckCircle2 className="h-12 w-12" />
              </div>
              <h2 className="text-2xl font-bold">Message Sent!</h2>
              <p className="text-muted-foreground max-w-sm">
                Thank you for reaching out. I will get back to you as soon as possible.
              </p>
              <Button onClick={() => setSuccess(false)} variant="outline" className="mt-4">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <select 
                  id="subject" 
                  name="subject" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Freelance Project">Freelance Project</option>
                  <option value="Just Saying Hi">Just Saying Hi!</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell me about your project..." 
                  className="min-h-[150px]" 
                  required 
                />
              </div>

              {/* Bot Protection (Honeypot) - Hidden */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </Card>

      </div>
    </div>
  );
}