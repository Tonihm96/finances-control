import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

import { Props } from '.';

export const IconComponent = styled(AntDesign)<Props>`
  font-size: ${({ theme, iconSize }) => {
    switch (iconSize) {
      case 'minimum':
        return theme.font_sizes.minimum;

      case 'small':
        return theme.font_sizes.small;

      case 'medium':
        return theme.font_sizes.medium;

      case 'large':
        return theme.font_sizes.large;

      case 'xlarge':
        return theme.font_sizes.xlarge;

      case 'xxlarge':
        return theme.font_sizes.xxlarge;

      default:
        return theme.font_sizes.large;
    }
  }}px;

  color: ${({ theme, iconColor }) => {
    switch (iconColor) {
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
        return theme.colors.body;
    }
  }};
`;
