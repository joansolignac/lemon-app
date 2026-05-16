import axios, { AxiosError } from "axios";
import type { LoginRequestDto } from "../dtos/request/login.dto";
import type { AuthSessionResponseDto } from "../dtos/responses/auth-session.dto";
import { apiConfig } from "@/shared/config/api.config";
import type { ApiErrorResponseDto } from "@/shared/dtos/response/api-error.dto";

const LOGIN_ENDPOINT = "/auth/login"

export async function login(dto: LoginRequestDto): Promise<AuthSessionResponseDto> {
    try {

        const response = await axios.post<AuthSessionResponseDto>(
            `${apiConfig.url}${LOGIN_ENDPOINT}`,
            dto
        );

        return response.data;

    } catch(error) {

        throw error as AxiosError<ApiErrorResponseDto>

    }
}