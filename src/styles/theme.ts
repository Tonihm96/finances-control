import { RFValue } from 'react-native-responsive-fontsize';

export default {
  colors: {
    primary: '#3DA5D9',
    background: 'hsl(0, 0%, 100%)',
    shape: 'hsl(0, 0%, 98%)',

    outline: '#E5E5E5',

    success: 'hsl(147, 80%, 36%)',
    error: 'hsl(350, 79%, 58%)',
    disabled: 'hsl(0, 0%, 50%)',
    disabled_light: 'hsl(0, 0%, 90%)',

    heading: 'hsl(0, 0%, 10%)',
    body: 'hsl(0, 0%,25%)',
    subtitle: 'hsl(0, 0%, 35%)',
    heading_light: 'hsl(0, 0%, 100%)',
    body_light: 'hsl(0, 0%,95%)',
    subtitle_light: 'hsl(0, 0%, 95%)'
  },

  sizes: {
    minimum: RFValue(4),
    small: RFValue(8),
    medium: RFValue(16),
    large: RFValue(24),
    xlarge: RFValue(32),
    xxlarge: RFValue(64)
  },

  font_sizes: {
    minimum: RFValue(10),
    small: RFValue(12),
    medium: RFValue(14),
    large: RFValue(16),
    xlarge: RFValue(24),
    xxlarge: RFValue(32)
  }
};
