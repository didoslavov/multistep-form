"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

function Step2() {
  const form = useForm();

  return (
    <section className="col-start-3 col-end-7 rounded-lg bg-gradient-to-tr from-neutral-300 to-neutral-500 py-20 shadow-lg">
      <FormProvider {...form}>
        <div className="flex flex-col items-center justify-center gap-10 text-neutral-900">
          <FormField
            control={form.control}
            name="town"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel>Town</FormLabel>
                <FormControl>
                  <Input
                    className="border border-neutral-800 placeholder:text-neutral-500"
                    placeholder="New York"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your town.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    className="border border-neutral-800 placeholder:text-neutral-500"
                    placeholder="Gladstone 10"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    className="border border-neutral-800 placeholder:text-neutral-500"
                    placeholder="+122 333 444"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your phone number.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link href="/step-3">
            <Button
              variant={"outline"}
              className="border-neutral-900 px-20 py-6 text-lg font-bold hover:bg-neutral-400"
            >
              Next
            </Button>
          </Link>
        </div>
      </FormProvider>
    </section>
  );
}

export default Step2;
