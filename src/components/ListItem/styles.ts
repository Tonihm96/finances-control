import styled from 'styled-components/native';
import { Foundation } from '@expo/vector-icons';

interface TransactionType {
  credDeb: string | 'C' | 'D';
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  width: 100%;
  padding: 15px;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const LeftContainer = styled.View`
  flex-direction: column;
`;

export const RightContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Value = styled.Text<TransactionType>`
  font-size: ${({ theme }) => theme.font_sizes.medium}px;
  color: ${({ theme, credDeb }) =>
    credDeb == 'C' ? theme.colors.success : theme.colors.error};
`;

export const Icon = styled(Foundation)<TransactionType>`
  font-size: ${({ theme }) => theme.font_sizes.large}px;
  color: ${({ theme, credDeb }) =>
    credDeb == 'C' ? theme.colors.success : theme.colors.error};

  margin-left: 10px;
`;
