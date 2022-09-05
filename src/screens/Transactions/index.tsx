import React from 'react';
import { ListRenderItemInfo } from 'react-native';

import { Transaction, useTransactions } from '../../hooks/transactions';

import { Container, TransactionList  } from './styles';
import { ListItem } from '../../components/ListItem';
import { Divider } from '../../components/Divider';

export function Transactions() {
  const { transactions } = useTransactions()

  function renderItem({ item }: ListRenderItemInfo<Transaction>) {
    return (
      <ListItem
        title={item.description}
        value={item.value}
        date={item.date}
        credDeb={item.cred_deb}
      />
    );
  }

  function keyExtractor(item: Transaction) {
    return item.id;
  }

  function itemSeparatorComponent() {
    return <Divider />;
  }


  return (
    <Container>
      
      <TransactionList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
    </Container>
  );
}