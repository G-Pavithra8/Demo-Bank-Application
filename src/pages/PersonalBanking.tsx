import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CreditCard, PiggyBank, Shield, TrendingUp } from "lucide-react";

export default function PersonalBanking() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-hero-gradient py-16 px-4">
  <div className="container mx-auto text-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
      Personal Banking
    </h1>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Manage your finances with confidence. Our personal banking solutions are tailored to help you save, spend, and grow your money.
    </p>
  </div>
</section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: PiggyBank, title: "Savings Account", desc: "Earn competitive interest on your savings with flexible access to your funds." },
              { icon: CreditCard, title: "Debit Card", desc: "Shop online and in-store with a secure, contactless debit card." },
              { icon: TrendingUp, title: "Fixed Deposits", desc: "Lock in higher interest rates with our fixed deposit options." },
              { icon: Shield, title: "Insurance", desc: "Protect what matters most with comprehensive insurance plans." },
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
