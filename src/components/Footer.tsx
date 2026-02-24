import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-gold" />
              <span className="text-lg font-bold">SecureBank</span>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Your trusted partner for modern digital banking. Secure, fast, and reliable financial services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/personal-banking" className="hover:text-primary-foreground transition-colors">Personal Banking</Link></li>
              <li><Link to="/business-banking" className="hover:text-primary-foreground transition-colors">Business Banking</Link></li>
              <li><Link to="/loans" className="hover:text-primary-foreground transition-colors">Loans</Link></li>
              <li><Link to="/credit-cards" className="hover:text-primary-foreground transition-colors">Credit Cards</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3 text-gold">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/help-center" className="hover:text-primary-foreground transition-colors">Help Center</Link></li>
              <li><Link to="/faqs" className="hover:text-primary-foreground transition-colors">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-gold">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> 1800-123-****</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> support@securebank.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
          © 2026 SecureBank. All rights reserved. | This is a demo application.
        </div>
      </div>
    </footer>
  );
}
