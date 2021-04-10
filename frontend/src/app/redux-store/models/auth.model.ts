export interface Auth {
    user?: User
}

export interface User {
    username: string;
    createdAt?: number;
    lastLogin?: number;
}