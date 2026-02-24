import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HelpCircle, MessageSquare, Phone, Mail } from "lucide-react";

export default function HelpCenter() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-hero-gradient py-16 px-4">
  <div className="container mx-auto text-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
      Help Center
    </h1>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      We're here to help. Find answers to common questions or get in touch with our support team.
    </p>
  </div>
</section>
        <section className="container mx-auto px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: MessageSquare, title: "Live Chat", desc: "Chat with our support agents 24/7 for instant help with your queries." },
              { icon: Phone, title: "Call Us", desc: "Reach us at 1800-123-4567 (toll-free). Available Mon–Sat, 9AM–8PM." },
              { icon: Mail, title: "Email Support", desc: "Write to support@securebank.com and we'll respond within 24 hours." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6 shadow-bank hover:shadow-bank-lg transition-shadow">
                <item.icon className="h-10 w-10 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
