import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useAuthStore } from '@/modules/auth/store/use-auth.store';

export default function RootLayout() {
  const hydrate = useAuthStore(
    (state) => state.hydrate,
  );

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return <Stack />;
}