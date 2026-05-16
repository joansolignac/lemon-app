import { useState } from 'react';

import {
  Pressable,
  Text,
} from 'react-native';

import { UiInput } from '@/shared/components/ui-input';

interface PasswordFieldProps {
  value: string;

  onChange: (value: string) => void;

  onSubmit?: () => void;

  error?: string;

  disabled?: boolean;
}

export function PasswordField({
  value,
  onChange,
  onSubmit,
  error,
  disabled = false,
}: PasswordFieldProps) {
  const [
    isVisible,
    setIsVisible,
  ] = useState(false);

  return (
    <UiInput
      label="CONTRASEÑA"
      placeholder="Ingrese contraseña"
      secureTextEntry={!isVisible}
      value={value}
      onChangeText={onChange}
      error={error}
      editable={!disabled}
      returnKeyType="done"
      onSubmitEditing={onSubmit}
      rightIcon={
        <Pressable
          onPress={() =>
            setIsVisible(
              !isVisible,
            )
          }
        >
          <Text>
            {isVisible
              ? '🙈'
              : '👁'}
          </Text>
        </Pressable>
      }
    />
  );
}