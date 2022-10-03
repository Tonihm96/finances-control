import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

import { Props } from '.';

export const IconComponent = styled(AntDesign)<Props>`
  font-size: ${({ theme, size = 'large' }) => {
    const { font_sizes } = theme;

    switch (size) {
      case 'minimum':
        return font_sizes.minimum;

      case 'small':
        return font_sizes.small;

      case 'medium':
        return font_sizes.medium;

      case 'large':
        return font_sizes.large;

      case 'xlarge':
        return font_sizes.xlarge;

      case 'xxlarge':
        return font_sizes.xxlarge;

      default:
        return font_sizes.large;
    }
  }}px;

  color: ${({ theme, color = 'body' }) => theme.colors[color]};
`;
