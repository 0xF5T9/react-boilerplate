/**
 * @file authentication.ts
 * @description Authentication related types.
 */

export type SessionData = {
    username: string;
    email: string;
    role: string;
    token: string;
};

export type SessionLogin = (sessionData: SessionData) => Promise<void>;

export type SessionLogout = (route?: string) => Promise<void>;

export type AuthHook = {
    sessionData?: SessionData;
    login?: SessionLogin;
    logout?: SessionLogout;
};
