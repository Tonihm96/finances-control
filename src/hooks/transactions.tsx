import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface TransactionProviderProps {
  children: ReactNode;
}

export interface Transaction {
  id: string;
  value: string;
  description: string;
  category: string;
  date: string;
  month: number;
  cred_deb: 'C' | 'D';
  created_at: string;
  updated_at: string;
}

interface TransactionsContextData {
  transactions: Transaction[];
  loading: boolean;
  requestRecentTransactions(): void;
  requestTransactions(month: number, credDeb?: 'C' | 'D'): void;
}

const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);

  const HOST = 'http://192.168.0.200:3333/transactions';

  async function requestTransactions(month: number, credDeb?: 'C' | 'D') {
    const transactionTypeParam = credDeb === 'C' || credDeb === 'D' ? `&cred_deb=${credDeb}` : ``;

    setLoading(true);
    const response = await fetch(`${HOST}?month=${month}${transactionTypeParam}&_sort=date&_order=desc&_limit=10`).then(res => res.json());

    setTransactions(response);
    setLoading(false);
  }

  async function requestRecentTransactions() {
    setLoading(true);
    const response = await fetch(`${HOST}?_sort=date&_order=desc&_limit=10`).then(res => res.json());

    setTransactions(response);
    setLoading(false);
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        loading,
        requestRecentTransactions,
        requestTransactions
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  if (!context) {
    throw new Error('useTransactions must be used within a TransactionsProvider');
  }

  return context;
}
