import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, FlatListProps, ListRenderItemInfo } from 'react-native';
import styled from 'styled-components/native';

import { Transaction as TransactionType, useTransactions } from '../../hooks/transactions';

import { Text } from '../../components/Text';
import { Divider } from '../../components/Divider';
import { Transaction } from './Transaction';

export function TransactionHistory() {
  const { transactions, loading, requestRecentTransactions } = useTransactions();

  function renderItem({ item }: ListRenderItemInfo<TransactionType>) {
    return <Transaction title={item.description} value={item.value} date={item.date} credDeb={item.cred_deb} />;
  }

  function keyExtractor(item: TransactionType) {
    return item.id;
  }

  useEffect(() => {
    requestRecentTransactions();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Text bold>Transações</Text>
      </TitleContainer>
      <Divider />
      {loading ? <ActivityIndicator /> : <TransactionList renderItem={renderItem} keyExtractor={keyExtractor} data={transactions} />}
    </Container>
  );
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  padding-bottom: 0px;

  border-top-left-radius: ${({ theme }) => theme.sizes.medium}px;
  border-top-right-radius: ${({ theme }) => theme.sizes.medium}px;

  flex: 1;
`;

export const TitleContainer = styled.View`
  padding: ${({ theme }) => theme.sizes.medium}px;
`;

export const TransactionList = styled(FlatList as new (props: FlatListProps<TransactionType>) => FlatList<TransactionType>)`
  padding: 0 ${({ theme }) => theme.sizes.small}px;

  flex: 1;
`;
