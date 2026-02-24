import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-hero-gradient py-16 px-4">
  <div className="container mx-auto text-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
      Privacy Policy
    </h1>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Your privacy is important to us. Learn how we handle your data.
    </p>
  </div>
</section>

        <section className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate">
          <div className="bg-card border border-border rounded-xl p-8 shadow-bank space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Information We Collect</h2>
              <p className="text-muted-foreground text-sm">We collect information you provide when creating an account, including your name, email address, and account preferences. This demo does not collect real financial data.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">How We Use Your Information</h2>
              <p className="text-muted-foreground text-sm">Your information is used solely to provide the banking simulation experience. We do not share, sell, or distribute your data to third parties.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Data Security</h2>
              <p className="text-muted-foreground text-sm">We implement industry-standard security measures to protect your data. All information is stored in-memory and is cleared when the session ends.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Contact Us</h2>
              <p className="text-muted-foreground text-sm">If you have questions about this privacy policy, please contact us at support@securebank.com.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
