// Dummy data store for banking simulation

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  balance: number;
  accountNumber: string;
  accountType: string;
  joinDate: string;
}

export interface Transaction {
  id: number;
  userId: number;
  type: "Credit" | "Debit";
  amount: number;
  date: string;
  description: string;
  recipientName?: string;
}

// In-memory data store
let users: User[] = [
  {
    id: 1,
    name: "Pavi Devi",
    email: "pavi@example.com",
    password: "password123",
    balance: 52340,
    accountNumber: "XXXX-XXXX-4821",
    accountType: "Savings",
    joinDate: "2024-03-15",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    email: "rahul@example.com",
    password: "password123",
    balance: 31500,
    accountNumber: "XXXX-XXXX-7392",
    accountType: "Current",
    joinDate: "2024-06-22",
  },
  {
    id: 3,
    name: "Anita Sharma",
    email: "anita@example.com",
    password: "password123",
    balance: 78200,
    accountNumber: "XXXX-XXXX-1054",
    accountType: "Savings",
    joinDate: "2023-11-10",
  },
  {
    id: 4,
    name: "Vikram Singh",
    email: "vikram@example.com",
    password: "password123",
    balance: 15800,
    accountNumber: "XXXX-XXXX-6238",
    accountType: "Current",
    joinDate: "2025-01-05",
  },
];

let transactions: Transaction[] = [
  { id: 1, userId: 1, type: "Credit", amount: 25000, date: "2026-02-23", description: "Salary Credited" },
  { id: 2, userId: 1, type: "Debit", amount: 1500, date: "2026-02-22", description: "Grocery Shopping" },
  { id: 3, userId: 1, type: "Debit", amount: 3200, date: "2026-02-20", description: "Electricity Bill" },
  { id: 4, userId: 1, type: "Credit", amount: 5000, date: "2026-02-18", description: "Freelance Payment" },
  { id: 5, userId: 1, type: "Debit", amount: 800, date: "2026-02-15", description: "Mobile Recharge" },
  { id: 6, userId: 1, type: "Debit", amount: 12000, date: "2026-02-12", description: "Rent Payment" },
  { id: 7, userId: 2, type: "Credit", amount: 30000, date: "2026-02-23", description: "Business Revenue" },
  { id: 8, userId: 2, type: "Debit", amount: 5000, date: "2026-02-21", description: "Office Supplies" },
  { id: 9, userId: 3, type: "Credit", amount: 45000, date: "2026-02-23", description: "Salary Credited" },
  { id: 10, userId: 3, type: "Debit", amount: 2200, date: "2026-02-19", description: "Shopping" },
];

let nextTransactionId = 11;

// API simulation functions
export function authenticateUser(email: string, password: string): User | null {
  return users.find((u) => u.email === email && u.password === password) || null;
}

export function signupUser(name: string, email: string, password: string): User | null {
  if (users.find((u) => u.email === email)) return null;
  const newUser: User = {
    id: users.length + 1,
    name,
    email,
    password,
    balance: 1000, // Initial virtual balance
    accountNumber: `XXXX-XXXX-${Math.floor(1000 + Math.random() * 9000)}`,
    accountType: "Savings",
    joinDate: new Date().toISOString().split("T")[0],
  };
  users.push(newUser);
  return newUser;
}

export function getUserById(id: number): User | undefined {
  return users.find((u) => u.id === id);
}

export function getTransactions(userId: number): Transaction[] {
  return transactions.filter((t) => t.userId === userId).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function transferFunds(
  senderId: number,
  recipientId: number,
  amount: number,
  description: string
): { success: boolean; message: string } {
  const sender = users.find((u) => u.id === senderId);
  const recipient = users.find((u) => u.id === recipientId);

  if (!sender || !recipient) return { success: false, message: "User not found" };
  if (sender.id === recipient.id) return { success: false, message: "Cannot transfer to yourself" };
  if (amount <= 0) return { success: false, message: "Amount must be positive" };
  if (sender.balance < amount) return { success: false, message: "Insufficient balance" };

  sender.balance -= amount;
  recipient.balance += amount;

  const today = new Date().toISOString().split("T")[0];

  transactions.push({
    id: nextTransactionId++,
    userId: senderId,
    type: "Debit",
    amount,
    date: today,
    description,
    recipientName: recipient.name,
  });

  transactions.push({
    id: nextTransactionId++,
    userId: recipientId,
    type: "Credit",
    amount,
    date: today,
    description: `Transfer from ${sender.name}`,
    recipientName: sender.name,
  });

  return { success: true, message: "Transfer successful!" };
}

export function getAllUsersExcept(userId: number): Pick<User, "id" | "name" | "accountNumber">[] {
  return users.filter((u) => u.id !== userId).map(({ id, name, accountNumber }) => ({ id, name, accountNumber }));
}
