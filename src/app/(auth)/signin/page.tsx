"use client";

import React, { useState, useEffect } from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/lib/zod";
import LoadingButton from "@/components/LoadingButton";
import {
  githubSignInAction,
  googleSignInAction,
  handleCredentialsSignin,
} from "@/actions/authActions";
import ErrorMessage from "@/components/error-message";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
  const params = useSearchParams();
  const error = params.get('error');
  const router = useRouter();

  const [globalError, setGlobalError] = useState<string>("");

  useEffect(() => {
    if (error) {
      switch (error) {
        case "OAuthAccountNotLinked":
          setGlobalError('Please use your email and password to sign in');
          break;
        default:
          setGlobalError('An error occurred, please try again later');
          break;
      }
    }
    router.replace('/signin')
  }, [error, router]);

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    try {
      const res = await handleCredentialsSignin(values);
      if (res) setGlobalError(res?.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-purple-100 via-pink-100 to-red-100">
      <motion.div
        className="w-full max-w-md p-8 rounded-2xl bg-white text-gray-800 shadow-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CardHeader className="text-center mb-8">
          <CardTitle className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Welcome Back
          </CardTitle>
          <p className="text-sm font-medium text-gray-600 mt-2">
            Find the best shows nearby your place
          </p>
        </CardHeader>

        <CardContent>
          {globalError && <ErrorMessage error={globalError} />}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-semibold text-gray-700">
                      Email
                    </FormLabel>
                    <FormControl>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          {...field}
                          className="mt-1 block w-full px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ease-in-out"
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-semibold text-gray-700">
                      Password
                    </FormLabel>
                    <FormControl>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          type="password"
                          placeholder="Enter password"
                          {...field}
                          className="mt-1 block w-full px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ease-in-out"
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs mt-1" />
                  </FormItem>
                )}
              />

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <LoadingButton
                  pending={form.formState.isSubmitting}
                  text="Sign in"
                //   className="w-full py-3 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg transition duration-300 ease-in-out"
                />
              </motion.div>
            </form>
          </Form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-600 text-sm">Or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <form className="w-full" action={githubSignInAction}>
              <Button
                variant="outline"
                className="w-full py-3 rounded-md text-sm font-semibold bg-gray-800 text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-md transition duration-300 ease-in-out"
                type="submit"
              >
                <GitHubLogoIcon className="h-5 w-5 mr-2" />
                Sign in with GitHub
              </Button>
            </form>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <form className="w-full" action={googleSignInAction}>
              <Button
                variant="outline"
                className="w-full py-3 rounded-md text-sm font-semibold bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-md transition duration-300 ease-in-out"
                type="submit"
              >
                <GlobeIcon className="h-5 w-5 mr-2" />
                Sign in with Google
              </Button>
            </form>
          </motion.div>

          <div className="text-center text-sm font-medium mt-6">
            <span className="text-gray-600">Not signed up? </span>
            <Link href="/auth/signup" className="text-purple-600 hover:text-purple-700 transition duration-200 ease-in-out">
              Sign up
            </Link>
          </div>
        </CardContent>
      </motion.div>
    </div>
  );
}

