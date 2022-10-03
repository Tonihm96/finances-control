import styled, { css } from 'styled-components/native';

import { Props } from '.';

export const TextContainer = styled.Text<Props>`
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

      case 'legend':
        return theme.font_sizes.minimum;

      default:
        return theme.font_sizes.medium;
    }
  }}px;

  color: ${({ color, mode }) =>
    mode === 'light'
      ? css<Props>`
          ${({ theme, variant }) => {
            switch (variant) {
              case 'h1':
                return theme.colors.heading_light;

              case 'h2':
                return theme.colors.heading_light;

              case 'h3':
                return theme.colors.heading_light;

              case 'body':
                return theme.colors.body_light;

              case 'subtitle':
                return theme.colors.subtitle_light;

              case 'legend':
                return theme.colors.subtitle_light;

              default:
                return theme.colors.body_light;
            }
          }};
        `
      : color
      ? color
      : css<Props>`
          ${({ theme, variant }) => {
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

              case 'legend':
                return theme.colors.subtitle;

              default:
                return theme.colors.body;
            }
          }};
        `};

  text-transform: ${({ transform = 'none' }) =>
    css`
      ${transform}
    `};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;
