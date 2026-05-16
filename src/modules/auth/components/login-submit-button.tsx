import { Ionicons } from '@expo/vector-icons';

import { UiButton } from '@/shared/components/ui-button';

interface LoginSubmitButtonProps {
  loading: boolean;

  success: boolean;

  onPress: () => void;
}

export function LoginSubmitButton({
  loading,
  success,
  onPress,
}: LoginSubmitButtonProps) {
  return (
    <UiButton
      title="INGRESAR"
      loading={loading}
      success={success}
      onPress={onPress}
      rightIcon={
        <Ionicons
          name="arrow-forward"
          size={16}
          color="#FFFFFF"
        />
      }
    />
  );
}