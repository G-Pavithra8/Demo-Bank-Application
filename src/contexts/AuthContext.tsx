import React, { createContext, useContext, useState, useCallback } from "react";
import { User, authenticateUser, signupUser, getUserById } from "@/lib/data";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  refreshUser: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((email: string, password: string) => {
    const found = authenticateUser(email, password);
    if (found) {
      setUser({ ...found });
      return true;
    }
    return false;
  }, []);

  const signup = useCallback((name: string, email: string, password: string) => {
    const newUser = signupUser(name, email, password);
    if (newUser) {
      setUser({ ...newUser });
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => setUser(null), []);

  const refreshUser = useCallback(() => {
    if (user) {
      const updated = getUserById(user.id);
      if (updated) setUser({ ...updated });
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
