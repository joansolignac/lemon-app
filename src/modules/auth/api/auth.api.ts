import axios, { AxiosError } from "axios";
import type { LoginRequestDto } from "../dtos/request/login.dto";
import type { JwtTokensResponseDto } from "../dtos/responses/jwt-tokens.dto";
import { apiConfig } from "@/shared/config/api.config";
import type { ApiErrorResponseDto } from "@/shared/dtos/response/api-error.dto";

const LOGIN_ENDPOINT = "/auth/login"

export async function login(dto: LoginRequestDto): Promise<JwtTokensResponseDto> {
    try {

        const response = await axios.post<JwtTokensResponseDto>(
            `${apiConfig.url}${LOGIN_ENDPOINT}`,
            dto
        );

        return response.data;

    } catch(error) {

        throw error as AxiosError<ApiErrorResponseDto> 

    }
}