import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function LoginHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.logo} />

      <Text style={styles.title}>
        AJI-LIMON
      </Text>

      <Text style={styles.subtitle}>
        Gestión Agrícola Integrada
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    gap: 8,
  },

  logo: {
    width: 72,
    height: 72,

    borderRadius: 36,

    backgroundColor: '#5C7C24',
  },

  title: {
    fontSize: 28,

    fontWeight: '700',

    color: '#5C7C24',
  },

  subtitle: {
    fontSize: 14,

    color: '#666',
  },
});