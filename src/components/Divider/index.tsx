import React from 'react';

import { DividerComponent } from './styles';

export interface Props {
  //size?: 'minimum' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  color?:
    | 'primary'
    | 'secondary'
    | 'background'
    | 'outline'
    | 'success'
    | 'error'
    | 'body';
  orientation?: 'horizontal' | 'vertical';
}

export function Divider({ color, orientation }: Props) {
  return <DividerComponent color={color} orientation={orientation} />;
}
