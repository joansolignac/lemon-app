import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { LoginRequestDto } from '../dtos/request/login.dto';

import { loginSchema } from '../schemas/login.schema';

import { useAuthStore } from '../store/use-auth.store';

import { EmailField } from './email-field';
import { PasswordField } from './password-field';
import { LoginSubmitButton } from './login-submit-button';

export function LoginForm() {
  const login =
    useAuthStore(
      (state) => state.login,
    );

  const isLoading =
    useAuthStore(
      (state) => state.isLoading,
    );

  const isSuccess =
    useAuthStore(
      (state) => state.isSuccess,
    );

  const {
    control,
    handleSubmit,
    setError,
  } = useForm<LoginRequestDto>({
    resolver: zodResolver(
      loginSchema,
    ),

    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(
    data: LoginRequestDto,
  ) {
    try {
      await login(data);
    } catch (error: any) {
      if (
        error.code ===
        'INVALID_CREDENTIALS'
      ) {
        setError('email', {
          message:
            'Credenciales inválidas',
        });

        setError('password', {
          message:
            'Credenciales inválidas',
        });
      }
    }
  }

  return (
    <>
      <Controller
        control={control}
        name="email"
        render={({
          field,
          fieldState,
        }) => (
          <EmailField
            value={field.value}
            onChange={
              field.onChange
            }
            error={
              fieldState.error
                ?.message
            }
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({
          field,
          fieldState,
        }) => (
          <PasswordField
            value={field.value}
            onChange={
              field.onChange
            }
            error={
              fieldState.error
                ?.message
            }
          />
        )}
      />

      <LoginSubmitButton
        loading={isLoading}
        success={isSuccess}
        onPress={handleSubmit(
          onSubmit,
        )}
      />
    </>
  );
}