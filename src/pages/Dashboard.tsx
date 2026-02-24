import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { getTransactions } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Shield, LayoutDashboard, ArrowRightLeft, History, User, LogOut,
  IndianRupee, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownLeft,
} from "lucide-react";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, logout, refreshUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) navigate("/login");
    else refreshUser();
  }, [location.pathname]);

  if (!user) return null;

  const transactions = getTransactions(user.id).slice(0, 5);
  const totalCredits = getTransactions(user.id).filter(t => t.type === "Credit").reduce((s, t) => s + t.amount, 0);
  const totalDebits = getTransactions(user.id).filter(t => t.type === "Debit").reduce((s, t) => s + t.amount, 0);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: ArrowRightLeft, label: "Fund Transfer", path: "/transfer" },
    { icon: History, label: "Transactions", path: "/transactions" },
    { icon: User, label: "Profile", path: "/dashboard" },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-primary text-primary-foreground">
        <div className="p-6 flex items-center gap-2 border-b border-primary-foreground/10">
          <Shield className="h-6 w-6 text-gold" />
          <span className="font-bold text-lg">SecureBank</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  active ? "bg-sidebar-accent text-gold font-medium" : "text-primary-foreground/70 hover:bg-sidebar-accent hover:text-primary-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-primary-foreground/10">
          <button
            onClick={() => { logout(); navigate("/"); }}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-primary-foreground/70 hover:bg-sidebar-accent hover:text-primary-foreground transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top bar */}
        <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">Welcome, {user.name}</h1>
            <p className="text-sm text-muted-foreground">Account: {user.accountNumber} · {user.accountType}</p>
          </div>
          <div className="flex gap-2 md:hidden">
            <Button variant="ghost" size="sm" onClick={() => navigate("/transfer")}>Transfer</Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/transactions")}>History</Button>
            <Button variant="outline" size="sm" onClick={() => { logout(); navigate("/"); }}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-card border border-border p-6 shadow-bank">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Total Balance</span>
                <IndianRupee className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">₹{user.balance.toLocaleString("en-IN")}</div>
            </div>
            <div className="rounded-xl bg-card border border-border p-6 shadow-bank">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Total Credits</span>
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
              <div className="text-3xl font-bold text-success">₹{totalCredits.toLocaleString("en-IN")}</div>
            </div>
            <div className="rounded-xl bg-card border border-border p-6 shadow-bank">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Total Debits</span>
                <TrendingDown className="h-5 w-5 text-destructive" />
              </div>
              <div className="text-3xl font-bold text-destructive">₹{totalDebits.toLocaleString("en-IN")}</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => navigate("/transfer")}>
              <ArrowRightLeft className="mr-2 h-4 w-4" /> Fund Transfer
            </Button>
            <Button variant="outline" onClick={() => navigate("/transactions")}>
              <History className="mr-2 h-4 w-4" /> View All Transactions
            </Button>
          </div>

          {/* Recent Transactions */}
          <div className="rounded-xl bg-card border border-border shadow-bank">
            <div className="px-6 py-4 border-b border-border flex justify-between items-center">
              <h2 className="font-semibold text-foreground">Recent Transactions</h2>
              <Link to="/transactions" className="text-sm text-primary hover:underline">View All</Link>
            </div>
            <div className="divide-y divide-border">
              {transactions.length === 0 ? (
                <div className="p-6 text-center text-muted-foreground">No transactions yet</div>
              ) : (
                transactions.map((t) => (
                  <div key={t.id} className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-full ${
                        t.type === "Credit" ? "bg-success/10" : "bg-destructive/10"
                      }`}>
                        {t.type === "Credit" ? (
                          <ArrowDownLeft className="h-4 w-4 text-success" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4 text-destructive" />
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{t.description}</div>
                        <div className="text-xs text-muted-foreground">{t.date}</div>
                      </div>
                    </div>
                    <div className={`font-semibold ${t.type === "Credit" ? "text-success" : "text-destructive"}`}>
                      {t.type === "Credit" ? "+" : "-"}₹{t.amount.toLocaleString("en-IN")}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
