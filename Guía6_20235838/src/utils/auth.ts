import argon2 from "argon2";

export async function hashPassword(plainPassword: string): Promise<string> {
    return await argon2.hash(plainPassword);
}

export async function validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await argon2.verify(hashedPassword, plainPassword);
}