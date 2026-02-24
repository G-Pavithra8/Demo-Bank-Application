import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-hero-gradient py-16 px-4">
  <div className="container mx-auto text-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
      Terms of Service
    </h1>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Please read these terms carefully before using SecureBank.
    </p>
  </div>
</section>

        <section className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="bg-card border border-border rounded-xl p-8 shadow-bank space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground text-sm">By accessing SecureBank, you agree to these terms. This is a demo application for educational and portfolio purposes only.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">2. Demo Application</h2>
              <p className="text-muted-foreground text-sm">SecureBank is not a real bank. No real money is involved. All transactions, balances, and accounts are simulated for demonstration purposes.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">3. User Accounts</h2>
              <p className="text-muted-foreground text-sm">Accounts created are stored in-memory and will be reset when the application restarts. Do not use real personal or financial information.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">4. Limitation of Liability</h2>
              <p className="text-muted-foreground text-sm">SecureBank is provided "as-is" without warranties. We are not liable for any issues arising from the use of this demo application.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">5. Contact</h2>
              <p className="text-muted-foreground text-sm">For questions about these terms, contact us at support@securebank.com.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
