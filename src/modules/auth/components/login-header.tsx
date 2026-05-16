import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export function LoginHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Ionicons
          name="leaf"
          size={32}
          color="#FFFFFF"
        />
      </View>

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

    justifyContent: 'center',

    alignItems: 'center',
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