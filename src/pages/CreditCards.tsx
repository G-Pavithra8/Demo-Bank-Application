import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CreditCard, Gift, Plane, ShoppingBag } from "lucide-react";

export default function CreditCards() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-hero-gradient py-16 px-4">
  <div className="container mx-auto text-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
      Credit Cards
    </h1>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Choose from our range of credit cards with exciting rewards, cashback, and travel benefits.
    </p>
  </div>
</section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: CreditCard, title: "Classic Card", desc: "Perfect for everyday spending with 1% cashback on all purchases." },
              { icon: Gift, title: "Rewards Card", desc: "Earn 5X reward points on dining, entertainment, and online shopping." },
              { icon: Plane, title: "Travel Card", desc: "Complimentary lounge access and travel insurance on every trip." },
              { icon: ShoppingBag, title: "Platinum Card", desc: "Premium benefits with exclusive discounts at partner merchants." },
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
