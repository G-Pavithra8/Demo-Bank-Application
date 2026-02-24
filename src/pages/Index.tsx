import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, CreditCard, TrendingUp, Landmark, ArrowRight, CheckCircle } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const services = [
  { icon: Landmark, title: "Savings Account", desc: "High-interest savings with zero maintenance charges and instant access." },
  { icon: CreditCard, title: "Credit Cards", desc: "Premium cards with cashback, rewards, and exclusive lifestyle benefits." },
  { icon: TrendingUp, title: "Investments", desc: "Mutual funds, fixed deposits, and SIPs to grow your wealth smartly." },
  { icon: Shield, title: "Insurance", desc: "Comprehensive life and health insurance plans for complete protection." },
];

const features = [
  "24/7 Online & Mobile Banking",
  "Zero-Fee Fund Transfers",
  "Real-Time Transaction Alerts",
  "Multi-Layer Security",
  "Dedicated Customer Support",
  "Instant Account Opening",
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-in-up">
              Banking Made <span className="text-gold">Simple</span> & Secure
            </h1>
            <p className="text-lg text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Experience next-generation digital banking with SecureBank. Manage your finances, transfer funds, and track transactions — all in one place.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" onClick={() => navigate("/signup")}>
                Open Free Account <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="hero-outline" size="lg" onClick={() => navigate("/login")}>
                Internet Banking
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Services</h2>
            <p className="mt-2 text-muted-foreground">Comprehensive financial solutions for every need</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-bank transition-all hover:shadow-bank-lg hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose SecureBank?</h2>
              <p className="text-muted-foreground mb-8">
                Trusted by millions of customers, we offer world-class banking with cutting-edge technology and unmatched security.
              </p>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-card p-6 shadow-bank text-center">
                <div className="text-3xl font-bold text-primary">10M+</div>
                <div className="text-sm text-muted-foreground mt-1">Happy Customers</div>
              </div>
              <div className="rounded-xl bg-card p-6 shadow-bank text-center">
                <div className="text-3xl font-bold text-gold">₹500Cr+</div>
                <div className="text-sm text-muted-foreground mt-1">Transactions Daily</div>
              </div>
              <div className="rounded-xl bg-card p-6 shadow-bank text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground mt-1">Uptime</div>
              </div>
              <div className="rounded-xl bg-card p-6 shadow-bank text-center">
                <div className="text-3xl font-bold text-gold">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Branches</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Start Your Banking Journey Today</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Join millions of satisfied customers. Open a free account in under 5 minutes.
          </p>
          <Button variant="hero" size="lg" onClick={() => navigate("/signup")}>
            Get Started <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
