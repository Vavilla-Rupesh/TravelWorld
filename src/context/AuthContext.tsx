import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  name: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy credentials
const DUMMY_USERS = [
  { email: 'user@travelworld.com', password: 'user123', name: 'John Doe', role: 'user' as const },
  { email: 'user2@travelworld.com', password: 'user456', name: 'Jane Smith', role: 'user' as const },
  { email: 'demo@example.com', password: 'demo123', name: 'Demo User', role: 'user' as const },
];

const DUMMY_ADMINS = [
  { email: 'admin@travelworld.com', password: 'admin123', name: 'Admin User', role: 'admin' as const },
  { email: 'admin2@travelworld.com', password: 'admin456', name: 'Super Admin', role: 'admin' as const },
];

const ALL_CREDENTIALS = [...DUMMY_USERS, ...DUMMY_ADMINS];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Check if user was previously logged in
    const savedUser = localStorage.getItem('travelworld_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email: string, password: string): boolean => {
    const foundUser = ALL_CREDENTIALS.find(
      (cred) => cred.email === email && cred.password === password
    );

    if (foundUser) {
      const userData: User = {
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role,
      };
      setUser(userData);
      localStorage.setItem('travelworld_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const signup = (name: string, email: string, password: string): boolean => {
    // Check if user already exists
    const userExists = ALL_CREDENTIALS.some((cred) => cred.email === email);
    
    if (userExists) {
      return false;
    }

    // Create new user (in a real app, this would be saved to a database)
    const newUser: User = {
      email,
      name,
      role: 'user',
    };
    
    setUser(newUser);
    localStorage.setItem('travelworld_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('travelworld_user');
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
