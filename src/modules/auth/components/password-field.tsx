import { useState } from 'react';

import {
  Pressable,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

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
      leftIcon={
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#666"
        />
      }
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
          <Ionicons
            name={
              isVisible
                ? 'eye-off-outline'
                : 'eye-outline'
            }
            size={20}
            color="#666"
          />
        </Pressable>
      }
    />
  );
}