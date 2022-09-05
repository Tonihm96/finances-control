import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const CardsContainer = styled.View`
  padding: ${({ theme }) => theme.sizes.medium}px;

  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const MonthSelector = styled.View`
  padding: ${({ theme }) => theme.sizes.medium}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RecentTransactions = styled.FlatList``;
