import { ActivityIndicator, View, StyleSheet } from 'react-native';

interface UiLoadingProps {
  size?: 'small' | 'large';
}

export function UiLoading({
  size = 'small',
}: UiLoadingProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});