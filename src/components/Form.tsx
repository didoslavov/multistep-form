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
import { useStateMachine } from "little-state-machine";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateStep1Data } from "@/lib/updateActions";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().min(3).email(),
});

function Form() {
  const router = useRouter();
  const { state, actions } = useStateMachine({
    updateStep1Data,
  });
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (formData: z.infer<typeof formSchema>) => {
    actions.updateStep1Data({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    });

    router.push("/step-2");
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-10 text-neutral-900"
      >
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
              <FormMessage className="text-red-900" />
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
              <FormMessage className="text-red-900" />
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
              <FormMessage className="text-red-900" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant={"outline"}
          className="border-neutral-900 px-20 py-6 text-lg font-bold hover:bg-neutral-400"
        >
          Next
        </Button>
      </form>
    </FormProvider>
  );
}

export default Form;
