import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { transferFunds, getAllUsersExcept } from "@/lib/data";
import { ArrowRightLeft, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Transfer() {
  const { user, refreshUser } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [recipientId, setRecipientId] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [recipients, setRecipients] = useState<{ id: number; name: string; accountNumber: string }[]>([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!user) { navigate("/login"); return; }
    setRecipients(getAllUsersExcept(user.id));
  }, [user, navigate]);

  if (!user) return null;

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(amount);
    if (!recipientId || !amt || amt <= 0) {
      toast({ title: "Error", description: "Please fill in all fields correctly", variant: "destructive" });
      return;
    }
    const result = transferFunds(user.id, parseInt(recipientId), amt, description || "Fund Transfer");
    if (result.success) {
      setSuccess(true);
      refreshUser();
      toast({ title: "Success!", description: result.message });
    } else {
      toast({ title: "Transfer Failed", description: result.message, variant: "destructive" });
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center py-12 px-4 bg-secondary/30">
          <div className="text-center space-y-4 bg-card rounded-xl shadow-bank-lg p-10 border border-border max-w-md">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Transfer Successful!</h2>
            <p className="text-muted-foreground">₹{parseFloat(amount).toLocaleString("en-IN")} has been transferred.</p>
            <div className="flex gap-3 justify-center">
              <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
              <Button variant="outline" onClick={() => { setSuccess(false); setAmount(""); setDescription(""); setRecipientId(""); }}>
                New Transfer
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-4 bg-secondary/30">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-xl shadow-bank-lg p-8 border border-border">
            <div className="text-center mb-6">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <ArrowRightLeft className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Fund Transfer</h1>
              <p className="text-sm text-muted-foreground mt-1">Available Balance: ₹{user.balance.toLocaleString("en-IN")}</p>
            </div>

            <form onSubmit={handleTransfer} className="space-y-4">
              <div>
                <Label>Recipient</Label>
                <Select onValueChange={setRecipientId} value={recipientId}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select recipient" />
                  </SelectTrigger>
                  <SelectContent>
                    {recipients.map((r) => (
                      <SelectItem key={r.id} value={r.id.toString()}>
                        {r.name} ({r.accountNumber})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="amount">Amount (₹)</Label>
                <Input
                  id="amount"
                  type="number"
                  min="1"
                  max={user.balance}
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="desc">Description (optional)</Label>
                <Input
                  id="desc"
                  placeholder="e.g., Rent payment"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <ArrowRightLeft className="mr-2 h-4 w-4" /> Transfer Now
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
