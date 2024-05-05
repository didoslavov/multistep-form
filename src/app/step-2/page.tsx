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
import { updateStep2Data } from "@/lib/updateActions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/navigation";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  town: z.string().min(5),
  address: z.string().min(11),
  phone: z.string().min(6),
});

function Step2() {
  const router = useRouter();
  const { state, actions } = useStateMachine({
    updateStep2Data,
  });
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      town: state.town,
      address: state.address,
      phone: state.phone,
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (formData: z.infer<typeof formSchema>) => {
    actions.updateStep2Data({
      town: formData.town,
      address: formData.address,
      phone: formData.phone,
    });

    router.push("/step-3");
  };

  return (
    <section className="col-start-3 col-end-7 rounded-lg bg-gradient-to-tr from-neutral-300 to-neutral-500 py-20 shadow-lg">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-10 text-neutral-900"
        >
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
                <FormMessage className="text-red-900" />
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
                <FormMessage className="text-red-900" />
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
    </section>
  );
}

export default Step2;
