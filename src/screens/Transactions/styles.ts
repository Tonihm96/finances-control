import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

import { Transaction } from '../../hooks/transactions';

export const Container = styled.View`
  flex: 1;
`;

export const TransactionList = styled(
  FlatList as new (props: FlatListProps<Transaction>) => FlatList<Transaction>
)``;
