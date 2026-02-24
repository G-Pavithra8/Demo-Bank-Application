import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Home, Car, GraduationCap, Landmark } from "lucide-react";

export default function Loans() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-hero-gradient py-16 px-4">
  <div className="container mx-auto text-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
      Loans
    </h1>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Achieve your goals with our competitive loan products. Quick approvals and flexible repayment options.
    </p>
  </div>
</section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Home, title: "Home Loan", desc: "Make your dream home a reality with low interest home loans up to ₹5 Crore." },
              { icon: Car, title: "Car Loan", desc: "Drive your dream car with easy EMIs and instant loan approval." },
              { icon: GraduationCap, title: "Education Loan", desc: "Invest in your future with education loans for top universities worldwide." },
              { icon: Landmark, title: "Personal Loan", desc: "Instant personal loans with minimal documentation and quick disbursement." },
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
