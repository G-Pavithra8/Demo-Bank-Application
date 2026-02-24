import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I open a new account?", a: "You can open an account by clicking 'Sign Up' on our homepage. Fill in your details and you'll receive ₹1,000 as an initial virtual balance." },
  { q: "How do I transfer funds?", a: "Log in to your dashboard, navigate to 'Fund Transfer', select a recipient, enter the amount and description, then confirm the transfer." },
  { q: "Is my data secure?", a: "Yes. SecureBank uses industry-standard encryption and security practices to protect your information. This is a demo application for portfolio purposes." },
  { q: "What is the minimum balance required?", a: "There is no minimum balance requirement for our savings accounts in this demo." },
  { q: "How do I reset my password?", a: "Currently, password reset is not available in this demo. Please contact our support team for assistance." },
  { q: "Can I use this for real transactions?", a: "No. SecureBank is a demo application and does not handle real money or actual banking transactions." },
];

export default function FAQs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-hero-gradient py-16 px-4">
  <div className="container mx-auto text-center">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
      Frequently Asked Questions
    </h1>
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Find answers to the most commonly asked questions about SecureBank.
    </p>
  </div>
</section>

        <section className="container mx-auto px-4 py-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 shadow-bank">
                <AccordionTrigger className="text-foreground font-medium">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <Footer />
    </div>
  );
}
