import styled, { css } from 'styled-components/native';

import { Props } from '.';

export const DividerComponent = styled.View<Props>`
  background-color: ${({ theme, color }) => {
    switch (color) {
      case 'primary':
        return theme.colors.primary;

      case 'secondary':
        return theme.colors.secondary;

      case 'background':
        return theme.colors.background;

      case 'outline':
        return theme.colors.outline;

      case 'success':
        return theme.colors.success;

      case 'error':
        return theme.colors.error;

      case 'body':
        return theme.colors.body;

      default:
        return theme.colors.outline;
    }
  }};

  ${({ orientation }) => {
    switch (orientation) {
      case 'horizontal':
        return css`
          width: 100%;
          height: 1px;
        `;
      case 'vertical':
        return css`
          width: 1px;
          height: 100%;
        `;
      default:
        return css`
          width: 100%;
          height: 1px;
        `;
    }
  }}
`;
