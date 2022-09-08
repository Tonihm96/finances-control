import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

export interface User {
  id: string | undefined;
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

interface AuthContextData {
  user: User;
  isAuthenticated: boolean;
  loading: boolean;
  requestLogin(login: string, password: string): void;
  requestLogout(): void;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({
    id: undefined,
    username: undefined,
    email: undefined,
    password: undefined
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  async function requestLogin(login: string, password: string) {
    setLoading(true);
    setTimeout(() => {
      if (login == 'admin' && password == '123') {
        setUser({
          id: '1',
          username: 'admin',
          email: 'admin@admin.com',
          password: '123'
        });
        setIsAuthenticated(true);
        setLoading(false);
      }
    }, 1000);
  }

  async function requestLogout() {}

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, requestLogin, requestLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
