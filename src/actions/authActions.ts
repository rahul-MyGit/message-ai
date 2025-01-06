'use server';

import prisma from "@/db";
import { signIn, signOut } from "@/lib/auth";
import { signUpSchema } from "@/lib/zod";
import { AuthError } from "next-auth";
import { hash } from "bcryptjs";

export async function handleCredentialsSignin({email, password} : {
    email: string,
    password: string
}){
    try {
        const res = await signIn("credentials", {email, password, redirect: false})
        if(res?.error){
            return {
                success: false,
                message: "Invalid credentials"
            }
        }
        return {
            success: true,
            message: "Logged In"
        }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {
                        message: "Invalid credentials"
                    }

                default:
                    return {
                        message: "An error occurred ! Something went wrong"
                    }
            }
        }
        throw error;
    }
}

export async function handleSignUp({name, email, password, confirmPassword}: {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}){
    try {
        const parsedCredentials = signUpSchema.safeParse({name, email, password, confirmPassword})
        if(!parsedCredentials){
            return {
                success: false,
                message: "Invalid credentials"
            }
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            }
        });

        if(existingUser){
            return {
                success: false,
                message: "Email already in use"
            }
        }

        if (!existingUser) {
            await prisma.user.create({
              data: {
                name,
                email,
                password: await hash(password, 10),
              },
            });
        }

        return {
            success: true,
            message: "Account created successfully",
        }

    } catch (error) {
        console.error('Error creatin the account', error);
        return {
            success: false,
            message: "An error occurred while creating the account",
        }
    }
}

export async function githubSignInAction(){
    await signIn("github", {redirectTo: "/"});
}

export async function googleSignInAction() {
    await signIn("google", {redirectTo: "/"})
}

export async function userSignOutAction(){
    await signOut({redirectTo: "/signin"});
}
