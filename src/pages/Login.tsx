import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Error", description: "Please fill in all fields", variant: "destructive" });
      return;
    }
    const success = login(email, password);
    if (success) {
      toast({ title: "Welcome back!", description: "Login successful" });
      navigate("/dashboard");
    } else {
      toast({ title: "Login Failed", description: "Invalid email or password. Try pavi@example.com / password123", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-4 bg-secondary/30">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-xl shadow-bank-lg p-8 border border-border">
            <div className="text-center mb-6">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Internet Banking</h1>
              <p className="text-sm text-muted-foreground mt-1">Sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </Button>
            </form>

            <div className="mt-4 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="font-medium text-primary hover:underline">
                Open Account
              </Link>
            </div>

            <div className="mt-6 rounded-lg bg-muted p-3 text-xs text-muted-foreground">
              <strong>Demo Credentials:</strong><br />
              Email: pavi@example.com<br />
              Password: password123
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
