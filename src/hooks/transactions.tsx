import React, { createContext, ReactNode, useContext, useState } from 'react';

import transactionsData from '../assets/transactions';

interface TransactionProviderProps {
  children: ReactNode;
}

export interface Transaction {
  id: string;
  value: string;
  descripition: string;
  date: string;
  cred_deb: string | 'C' | 'D';
  created_at: string;
  updated_at: string;
}

interface TransactionsContextData {
  transactions: Transaction[];
  requestTransactions(): void;
}

const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  function requestTransactions() {
    setTransactions(transactionsData);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, requestTransactions }}>
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
