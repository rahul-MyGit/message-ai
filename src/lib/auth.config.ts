import { compare } from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./zod";
import Github from "next-auth/providers/github";
import prisma from "@/db";
import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

const publicRoutes = ["/", "/signin", "/signup"];
const authRoutes = ["/signin", "/signup"];
const protectRoutes = ["/dashboard"]

export default {
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            profile(profile) {
                return {
                    id: profile.id.toString(),
                    name: profile.name || profile.login,
                    email: profile.email,
                };
            },
        }),

        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            profile(profile){
                return {
                    id: profile.id.toString(),
                    name: profile.name || profile.login,
                    email: profile.email
                }
            }
        }),

        Credentials({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email"},
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password"
                }
            },

            async authorize(credentials) {
                let user = null;

                const parsedCredentials = signInSchema.safeParse(credentials)
                if (!parsedCredentials.success){
                    return null;
                }

                const {email} = parsedCredentials.data;

                user = await prisma.user.findUnique({
                    where: {email}
                });

                if(!user) return null;
                if(!user.password) return null;  //might login with providers

                const isPasswordValid = await compare( credentials.password as string, user.password);
                if(!isPasswordValid) return null;

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email
                };
            },
        }),
    ],

    callbacks: {
        authorized({request: {nextUrl}, auth}){
            const isLoggedIn = !!auth?.user
            const {pathname} = nextUrl;

            if(authRoutes.includes(pathname)) {
                if(isLoggedIn){
                    return Response.redirect(new URL("/", nextUrl));
                }
                return true;
            }

            if(publicRoutes.includes(pathname)) return true;

            if(protectRoutes.includes(pathname) ){
                if(!isLoggedIn){
                    return Response.redirect(new URL("/", nextUrl))
                }
                return true
            }

            return isLoggedIn;
        },

        async jwt({token, user, session}) {
            if(user){
                token.id = user.id as string
            }
            return token;
        },

        async session({session,token}){
            session.user.id = token.id;
            return session;
        }
    },
    pages: {
        signIn: "/signin"
    }

} satisfies NextAuthConfig