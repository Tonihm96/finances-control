import React from 'react';
import { TextInputProps, TextInput as RNTextInput } from 'react-native';

import { TextInputComponent } from './styles';

export interface Props extends TextInputProps {}

export function TextInput({ ...rest }: Props) {
  return <TextInputComponent {...rest} />;
}
