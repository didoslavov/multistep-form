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
import Steps from "./Steps";
import { Button } from "./ui/button";

function Form() {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <div className="flex flex-col items-center justify-center gap-10 text-neutral-900">
        <Steps />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="w-[50%]">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  className="border-neutral-800placeholder:text-neutral-400 border"
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
                  className="border-neutral-800placeholder:text-neutral-400 border"
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
                  className="border-neutral-800placeholder:text-neutral-400 border"
                  placeholder="john.doe@domain.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your email address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={"outline"} className="px-20 py-6 text-lg font-bold">
          Next
        </Button>
      </div>
    </FormProvider>
  );
}

export default Form;
