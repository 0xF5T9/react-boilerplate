/**
 * @file authentication.d.ts
 * @description Authentication related types.
 */

export interface SessionData {
    username: string;
    email: string;
    role: string;
    token: string;
}
