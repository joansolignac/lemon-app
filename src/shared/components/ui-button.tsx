import { ReactNode } from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { UiLoading } from './ui-loading';

interface UiButtonProps {
  title: string;

  onPress: () => void;

  disabled?: boolean;

  loading?: boolean;

  success?: boolean;

  rightIcon?: ReactNode;
}

export function UiButton({
  title,
  onPress,
  disabled = false,
  loading = false,
  success = false,
  rightIcon,
}: UiButtonProps) {
  const isDisabled =
    disabled ||
    loading ||
    success;

  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      disabled={isDisabled}
    >
      {loading ? (
        <UiLoading />
      ) : success ? (
        <Ionicons
          name="checkmark"
          size={20}
          color="#FFFFFF"
        />
      ) : (
        <>
          <Text style={styles.text}>
            {title}
          </Text>

          {rightIcon}
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,

    borderRadius: 28,

    backgroundColor: '#5C7C24',

    justifyContent: 'center',

    alignItems: 'center',

    flexDirection: 'row',

    gap: 8,
  },

  text: {
    color: 'white',

    fontSize: 16,

    fontWeight: '600',
  },
});