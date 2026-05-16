export type UserRole = 'ADMIN' | 'SUPERVISOR';

export type SessionUserDto = {
    id: string;
    fullName: string;
    email: string;
    role: UserRole;
    isActive: boolean;
};

export type AuthSessionResponseDto = {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    user: SessionUserDto;
};
