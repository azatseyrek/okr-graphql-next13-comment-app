// AuthContext.tsx
import React, { ReactNode, createContext, useContext, useState } from 'react';

// Kullanıcı bilgileri için bir arayüz oluşturun
interface User {
  fullName: string;
}

// Bağlamı oluşturun
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Kimlik doğrulama bağlamını yöneten bir bileşen oluştur
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null); // Başlangıçta oturum açmış bir kullanıcı yok

  const login = (userData: User) => {
    // Kullanıcı oturum açtığında kullanıcı bilgilerini ayarla
    setUser(userData);
  };

  const logout = () => {
    // Kullanıcı oturumu kapattığında kullanıcı bilgilerini temizle
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Diğer bileşenlerde bu bağlamı kullanabilmek için özel bir hook oluştur
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
