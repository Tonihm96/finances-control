import styled from 'styled-components/native';

interface ChartContainerProps {
  height: number;
}

export const ChartContainer = styled.ScrollView.attrs({
  contentContainerStyle: { justifyContent: 'center', alignItems: 'center' }
})<ChartContainerProps>`
  height: ${({ height }) => height / 6}px;
`;
