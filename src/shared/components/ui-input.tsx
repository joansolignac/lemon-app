import { ReactNode } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

interface UiInputProps extends TextInputProps {
  label?: string;

  error?: string;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;
}

export function UiInput({
  label,
  error,
  leftIcon,
  rightIcon,
  ...props
}: UiInputProps) {
  return (
    <View style={styles.wrapper}>
      {label && (
        <Text style={styles.label}>
          {label}
        </Text>
      )}

      <View style={styles.container}>
        {leftIcon}

        <TextInput
          style={styles.input}
          placeholderTextColor="#999"
          {...props}
        />

        {rightIcon}
      </View>

      {error && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
  },

  label: {
    fontSize: 12,
    fontWeight: '600',
  },

  container: {
    height: 56,

    borderRadius: 28,

    backgroundColor: '#EEF3D2',

    paddingHorizontal: 20,

    flexDirection: 'row',

    alignItems: 'center',

    gap: 12,
  },

  input: {
    flex: 1,

    fontSize: 16,
  },

  error: {
    fontSize: 12,

    color: 'red',
  },
});