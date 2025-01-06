"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import ErrorMessage from "@/components/error-message";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signUpSchema } from "@/lib/zod";
import {
  handleCredentialsSignin,
  handleSignUp,
} from "@/actions/authActions";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SignUp() {
  const [globalError, setGlobalError] = useState("");

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    try {
      const result = await handleSignUp(values);
      if (result.success) {
        console.log("Account created successfully.");
        const valuesForSignin = {
          email: values.email,
          password: values.password,
        };
        await handleCredentialsSignin(valuesForSignin);
      } else {
        setGlobalError(result.message);
      }
    } catch (error) {
      setGlobalError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-purple-100 via-pink-100 to-red-100">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="p-8 rounded-2xl bg-white text-gray-800 shadow-2xl">
          <CardHeader className="text-center mb-8">
            <CardTitle className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Create Account
            </CardTitle>
            <p className="text-sm font-medium text-gray-600 mt-2">
              Join us and discover amazing shows nearby
            </p>
          </CardHeader>
          <CardContent>
            {globalError && <ErrorMessage error={globalError} />}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {["name", "email", "password", "confirmPassword"].map(
                  (field) => (
                    <FormField
                      control={form.control}
                      key={field}
                      name={field as keyof z.infer<typeof signUpSchema>}
                      render={({ field: fieldProps }) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-semibold text-gray-700">
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                          </FormLabel>
                          <FormControl>
                            <motion.div
                              whileFocus={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Input
                                type={
                                  field.includes("password")
                                    ? "password"
                                    : field === "email"
                                    ? "email"
                                    : "text"
                                }
                                placeholder={`Enter your ${field}`}
                                {...fieldProps}
                                autoComplete="off"
                                className="mt-1 block w-full px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ease-in-out"
                              />
                            </motion.div>
                          </FormControl>
                          <FormMessage className="text-red-500 text-xs mt-1" />
                        </FormItem>
                      )}
                    />
                  )
                )}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <LoadingButton
                    pending={form.formState.isSubmitting}
                    text="Sign up"
                    // className="w-full py-3 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg transition duration-300 ease-in-out"
                  />
                </motion.div>
              </form>
            </Form>
            <div className="text-center text-sm font-medium mt-6">
              <span className="text-gray-600">Already have an account? </span>
              <Link
                href="/signin"
                className="text-purple-600 hover:text-purple-700 transition duration-200 ease-in-out"
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

