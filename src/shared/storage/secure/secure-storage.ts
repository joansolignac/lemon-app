import * as SecureStore from "expo-secure-store"
import type { JwtTokensResponseDto } from "@/modules/auth/dtos/responses/jwt-tokens.dto"

const SESSION_KEY = "auth.session";

export async function saveSession(
    session: JwtTokensResponseDto
): Promise<void> {
    await SecureStore.setItemAsync(
        SESSION_KEY,
        JSON.stringify(session)
    );
}

export async function getSession(): Promise<JwtTokensResponseDto | null> {
    const value = await SecureStore.getItemAsync(SESSION_KEY);

    return value ? JSON.parse(value) : null;
}

export async function clearSession(): Promise<void> {
    await SecureStore.deleteItemAsync(SESSION_KEY);
}