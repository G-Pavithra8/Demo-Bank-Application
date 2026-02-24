import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getTransactions, Transaction } from "@/lib/data";
import { ArrowUpRight, ArrowDownLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Transactions() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<"all" | "Credit" | "Debit">("all");
  const [timeRange, setTimeRange] = useState<"all" | "7" | "30">("all");

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  let txns = getTransactions(user.id);

  if (filter !== "all") txns = txns.filter((t) => t.type === filter);

  if (timeRange !== "all") {
    const days = parseInt(timeRange);
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    txns = txns.filter((t) => new Date(t.date) >= cutoff);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 py-8 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Transaction History</h1>
              <p className="text-sm text-muted-foreground">{txns.length} transactions found</p>
            </div>
            <div className="flex gap-2">
              <Select onValueChange={(v) => setFilter(v as typeof filter)} value={filter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Credit">Credits</SelectItem>
                  <SelectItem value="Debit">Debits</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={(v) => setTimeRange(v as typeof timeRange)} value={timeRange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="7">Last 7 Days</SelectItem>
                  <SelectItem value="30">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-xl bg-card border border-border shadow-bank overflow-hidden">
            {/* Table header */}
            <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 bg-muted text-xs font-medium text-muted-foreground uppercase tracking-wider">
              <div className="col-span-1">Type</div>
              <div className="col-span-4">Description</div>
              <div className="col-span-3">Date</div>
              <div className="col-span-4 text-right">Amount</div>
            </div>

            <div className="divide-y divide-border">
              {txns.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">No transactions found</div>
              ) : (
                txns.map((t) => (
                  <div key={t.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-muted/30 transition-colors">
                    <div className="col-span-1">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        t.type === "Credit" ? "bg-success/10" : "bg-destructive/10"
                      }`}>
                        {t.type === "Credit" ? (
                          <ArrowDownLeft className="h-4 w-4 text-success" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4 text-destructive" />
                        )}
                      </div>
                    </div>
                    <div className="col-span-5 sm:col-span-4">
                      <div className="text-sm font-medium text-foreground">{t.description}</div>
                      {t.recipientName && <div className="text-xs text-muted-foreground">To: {t.recipientName}</div>}
                    </div>
                    <div className="col-span-3 text-sm text-muted-foreground hidden sm:block">{t.date}</div>
                    <div className={`col-span-3 sm:col-span-4 text-right font-semibold ${
                      t.type === "Credit" ? "text-success" : "text-destructive"
                    }`}>
                      {t.type === "Credit" ? "+" : "-"}₹{t.amount.toLocaleString("en-IN")}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <Button variant="outline" onClick={() => navigate("/dashboard")}>← Back to Dashboard</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
