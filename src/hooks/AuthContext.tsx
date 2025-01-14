import React, {createContext, useState, ReactNode} from 'react';
import {ActivityStatus, UserRole} from '../type/status';

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const status = UserRole.ADMIN;
  const [token, setToken] = useState<UserRole>(status);

  return (
    <AuthContext.Provider value={{token, setToken}}>
      {children}
    </AuthContext.Provider>
  );
};
