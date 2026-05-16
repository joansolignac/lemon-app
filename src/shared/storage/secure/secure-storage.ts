import * as SecureStore from "expo-secure-store"
import type { AuthSessionResponseDto } from "@/modules/auth/dtos/responses/auth-session.dto"

const SESSION_KEY = "auth.session";

export async function saveSession(
    session: AuthSessionResponseDto
): Promise<void> {
    await SecureStore.setItemAsync(
        SESSION_KEY,
        JSON.stringify(session)
    );
}

export async function getSession(): Promise<AuthSessionResponseDto | null> {
    const value = await SecureStore.getItemAsync(SESSION_KEY);

    if (!value) {
        return null;
    }

    try {
        const parsed = JSON.parse(value) as Partial<AuthSessionResponseDto>;

        if (!parsed.user) {
            await clearSession();
            return null;
        }

        return parsed as AuthSessionResponseDto;
    } catch {
        await clearSession();
        return null;
    }
}

export async function clearSession(): Promise<void> {
    await SecureStore.deleteItemAsync(SESSION_KEY);
}