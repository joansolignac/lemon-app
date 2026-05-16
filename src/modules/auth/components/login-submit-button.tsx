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
    />
  );
}