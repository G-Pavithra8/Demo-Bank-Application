import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building2, BarChart3, Briefcase, Globe } from "lucide-react";

export default function BusinessBanking() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-hero-gradient py-16 px-4">
  <div className="container mx-auto text-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
      Business Banking
    </h1>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Empower your business with powerful financial tools, merchant services, and dedicated support.
    </p>
  </div>
</section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Building2, title: "Current Account", desc: "High-limit current accounts designed for daily business operations." },
              { icon: BarChart3, title: "Business Analytics", desc: "Track cash flow, revenue, and expenses with real-time dashboards." },
              { icon: Briefcase, title: "Business Loans", desc: "Flexible financing options to grow and expand your business." },
              { icon: Globe, title: "Trade Finance", desc: "Simplify international trade with our comprehensive solutions." },
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
