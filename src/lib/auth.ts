import NextAuth from "next-auth";
import prisma from "@/db";
import {PrismaAdapter} from "@auth/prisma-adapter"
import authConfig from "./auth.config"

export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',

        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },

    ...authConfig
})