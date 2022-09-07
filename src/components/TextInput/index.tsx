import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

export interface Props extends TextInputProps {}

export function TextInput({}: Props) {
  return <Container></Container>;
}
