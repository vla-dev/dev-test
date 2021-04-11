export interface Auth {
    user?: User | null
}

export interface User {
    username: string;
    createdAt?: number;
    lastLogin?: number;
}