import { useAuthStore } from '../store/use-auth.store';

export function useAuth() {
  const session = useAuthStore(
    (state) => state.session,
  );

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated,
  );

  const isLoading = useAuthStore(
    (state) => state.isLoading,
  );

  const login = useAuthStore(
    (state) => state.login,
  );

  const logout = useAuthStore(
    (state) => state.logout,
  );

  const hydrate = useAuthStore(
    (state) => state.hydrate,
  );

  return {
    session,
    user: session?.user ?? null,
    role: session?.user.role ?? null,
    isAuthenticated,
    isLoading,
    login,
    logout,
    hydrate,
  };
}
