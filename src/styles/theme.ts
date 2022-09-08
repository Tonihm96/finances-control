import { RFValue } from 'react-native-responsive-fontsize';

export default {
  colors: {
    primary: '#00509d',
    secondary: '#ffd500',
    background: 'hsl(209, 100%, 98%)',

    outline: 'hsl(209, 100%, 88%)',

    success: 'hsl(147, 80%, 36%)',
    error: 'hsl(350, 79%, 58%)',
    disabled: 'hsl(0, 0%, 50%)',
    disabled_light: 'hsl(0, 0%, 90%)',

    heading: 'hsl(0, 0%, 10%)',
    body: 'hsl(0, 0%,25%)',
    subtitle: 'hsl(0, 0%, 40%)',
    heading_light: 'hsl(0, 0%, 90%)',
    body_light: 'hsl(0, 0%,75%)',
    subtitle_light: 'hsl(0, 0%, 60%)'
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
