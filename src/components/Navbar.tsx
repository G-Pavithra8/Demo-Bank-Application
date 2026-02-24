import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, LogOut, LayoutDashboard } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-card shadow-bank border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">Secure-EvolveBank</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")}>
                <LayoutDashboard className="mr-1 h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="mr-1 h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button size="sm" onClick={() => navigate("/signup")}>
                Open Account
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-4 space-y-3">
          <Link to="/" className="block text-sm font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
          <a href="#services" className="block text-sm font-medium" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#about" className="block text-sm font-medium" onClick={() => setMobileOpen(false)}>About</a>
          {user ? (
            <>
              <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => { navigate("/dashboard"); setMobileOpen(false); }}>Dashboard</Button>
              <Button variant="outline" size="sm" className="w-full" onClick={() => { handleLogout(); setMobileOpen(false); }}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" className="w-full" onClick={() => { navigate("/login"); setMobileOpen(false); }}>Login</Button>
              <Button size="sm" className="w-full" onClick={() => { navigate("/signup"); setMobileOpen(false); }}>Open Account</Button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
