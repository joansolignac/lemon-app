import { create } from 'zustand';

import axios from 'axios';

import type { ApiErrorResponseDto } from '@/shared/dtos/response/api-error.dto';

import {
  clearSession,
  saveSession,
} from '@/shared/storage/secure/secure-storage';

import type { JwtTokensResponseDto } from '../dtos/responses/jwt-tokens.dto';

import { LoginRequestDto } from '../dtos/request/login.dto';

import { login } from '../api/auth.api';

export type UseAuthState = {
  session:
    | JwtTokensResponseDto
    | null;

  isAuthenticated: boolean;

  isLoading: boolean;

  isSuccess: boolean;

  error:
    | ApiErrorResponseDto
    | null;

  login(
    dto: LoginRequestDto,
  ): Promise<void>;

  logout(): Promise<void>;

  clearError(): void;
};

export const useAuthStore =
  create<UseAuthState>(
    (set) => ({
      session: null,

      isAuthenticated: false,

      isLoading: false,

      isSuccess: false,

      error: null,

      async login(dto) {
        set({
          isLoading: true,

          isSuccess: false,

          error: null,
        });

        try {
          const session =
            await login(dto);

          await saveSession(
            session,
          );

          set({
            session,

            isAuthenticated:
              true,

            isLoading: false,

            isSuccess: true,
          });
        } catch (error) {
          if (
            axios.isAxiosError<ApiErrorResponseDto>(
              error,
            )
          ) {
            const apiError =
              error.response
                ?.data ?? null;

            set({
              error: apiError,

              isLoading:
                false,
            });

            throw apiError;
          }

          set({
            isLoading: false,
          });

          throw error;
        }
      },

      async logout() {
        await clearSession();

        set({
          session: null,

          isAuthenticated:
            false,

          isLoading: false,

          isSuccess: false,

          error: null,
        });
      },

      clearError() {
        set({
          error: null,
        });
      },
    }),
  );