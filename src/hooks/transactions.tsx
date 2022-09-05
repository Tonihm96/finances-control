import React, { createContext, ReactNode, useContext, useState } from 'react';
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
  requestTransactions(credDeb?: 'C' | 'D', month?: number): void;
}

const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);

  async function requestTransactions(credDeb?: 'C' | 'D', month?: number) {
    const HOST = 'http://192.168.0.200:3333/transactions';

    const response = await fetch(`${HOST}`);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, loading, requestTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  if (!context) {
    throw new Error(
      'useTransactions must be used within a TransactionsProvider'
    );
  }

  return context;
}
