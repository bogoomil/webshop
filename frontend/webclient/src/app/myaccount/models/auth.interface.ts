export interface Authentication {
    jwttoken: string;
}

export interface TokenPayload {
    roles: Role[];
    sub: string;
    iat: number;
    exp: number;
}

export interface Role {
    authority: string;
}