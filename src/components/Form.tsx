"use client";

import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import Link from "next/link";

function Form() {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <div className="flex flex-col items-center justify-center gap-10 text-neutral-900">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="w-[50%]">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  className="border border-neutral-800 placeholder:text-neutral-500"
                  placeholder="John"
                  {...field}
                />
              </FormControl>
              <FormDescription>Your first name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="w-[50%]">
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  className="border border-neutral-800 placeholder:text-neutral-500"
                  placeholder="Doe"
                  {...field}
                />
              </FormControl>
              <FormDescription>Your last name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-[50%]">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="border border-neutral-800 placeholder:text-neutral-500"
                  placeholder="john.doe@domain.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your email address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link href="/step-2">
          <Button
            variant={"outline"}
            className="border-neutral-900 px-20 py-6 text-lg font-bold hover:bg-neutral-400"
          >
            Next
          </Button>
        </Link>
      </div>
    </FormProvider>
  );
}

export default Form;
