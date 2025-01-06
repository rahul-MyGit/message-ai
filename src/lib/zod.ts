import { object, string } from "zod";

export const signInSchema = object({
    email: string({ required_error: "Email is required" })
        .min(1, "Email is required")
        .email("Invalid email"),

    password: string({ required_error: "Password is required" })
        .min(1, "Password is required")
        .min(5, "Password must be at least 5 character long")
        .max(32, "Password must be less than 32 characters")
})

export const signUpSchema = object({
    name: string({ required_error: "Enter your name" })
        .min(1, "Name is required")
        .max(50, "Name must be less that 50 characters"),

    email: string({ required_error: "Email is required" })
        .min(1, "Email is required")
        .email("Invalid email"),

    password: string({ required_error: "Password is required" })
        .min(1, "Password is required")
        .min(5, "Password must be at least 5 characters long")
        .max(32, "Password must be less than 32 characters"),

    confirmPassword: string({ required_error: "Confirm Password is required" })
        .min(1, "Confirm Password is required")
        .min(5, "COnfirm Password must be at least 5 characters long")
        .max(32, "Confirm Password must be less than 32 characters")
})

    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    });