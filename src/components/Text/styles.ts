import styled, { css } from 'styled-components/native';

import { TextProps } from '.';

export const TextContainer = styled.Text<TextProps>`
  font-size: ${({ theme, variant }) => {
    switch (variant) {
      case 'h1':
        return theme.font_sizes.xxlarge;

      case 'h2':
        return theme.font_sizes.xlarge;

      case 'h3':
        return theme.font_sizes.large;

      case 'body':
        return theme.font_sizes.medium;

      case 'subtitle':
        return theme.font_sizes.small;

      default:
        return theme.font_sizes.medium;
    }
  }}px;
  color: ${({ theme, variant }) => {
    switch (variant) {
      case 'h1':
        return theme.colors.heading;

      case 'h2':
        return theme.colors.heading;

      case 'h3':
        return theme.colors.heading;

      case 'body':
        return theme.colors.body;

      case 'subtitle':
        return theme.colors.subtitle;

      default:
        return theme.font_sizes.medium;
    }
  }};

  text-transform: ${({ transform }) => {
    switch (transform) {
      case 'capitalize':
        return css`capitalize`;

      case 'uppercase':
        return css`uppercase`;

      case 'lowercase':
        return css`lowercase`;

      case 'none':
        return css`none`;

      default:
        return css`none`;
    }
  }};
`;