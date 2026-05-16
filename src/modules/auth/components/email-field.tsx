import { RefObject } from 'react';

import {
  TextInput,
} from 'react-native';

import { UiInput } from '@/shared/components/ui-input';

interface EmailFieldProps {
  value: string;

  onChange: (value: string) => void;

  error?: string;

  disabled?: boolean;

  nextRef?: RefObject<TextInput>;
}

export function EmailField({
  value,
  onChange,
  error,
  disabled = false,
  nextRef,
}: EmailFieldProps) {
  return (
    <UiInput
      label="CORREO ELECTRÓNICO"
      placeholder="Ingrese su correo"
      keyboardType="email-address"
      autoCapitalize="none"
      value={value}
      onChangeText={onChange}
      error={error}
      editable={!disabled}
      returnKeyType="next"
      onSubmitEditing={() =>
        nextRef?.current?.focus()
      }
    />
  );
}