import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { LoginHeader } from '../components/login-header';
import { LoginForm } from '../components/login-form';

export function LoginScreenLayout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : 'height'
        }
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={
            false
          }
          contentContainerStyle={
            styles.scrollContent
          }
        >
          <View style={styles.container}>
            <LoginHeader />

            <View style={styles.card}>
              <LoginForm />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,

    backgroundColor: '#EEF3D2',
  },

  keyboard: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
  },

  container: {
    flex: 1,

    justifyContent: 'center',

    paddingHorizontal: 24,

    gap: 32,
  },

  card: {
    padding: 20,

    borderRadius: 20,

    backgroundColor: '#FFFFFF',

    gap: 20,

    shadowOpacity: 0.08,

    shadowRadius: 12,

    elevation: 4,
  },
});