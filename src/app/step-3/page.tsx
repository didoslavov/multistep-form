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
import { updateStep3Data } from "@/lib/updateActions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStateMachine } from "little-state-machine";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  billing: z.string().min(5),
  company: z.string().min(5),
  crn: z.string().min(6),
});

function Step3() {
  const router = useRouter();
  const { state, actions } = useStateMachine({
    updateStep3Data,
  });
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      billing: state.billing,
      company: state.company,
      crn: state.crn,
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (formData: z.infer<typeof formSchema>) => {
    actions.updateStep3Data({
      billing: formData.billing,
      company: formData.company,
      crn: formData.crn,
    });

    router.push("/complete");
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
            name="billing"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel>Billing Address</FormLabel>
                <FormControl>
                  <Input
                    className="border border-neutral-800 placeholder:text-neutral-500"
                    placeholder="Gladstone 10"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your billing address.</FormDescription>
                <FormMessage className="text-red-900" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input
                    className="border border-neutral-800 placeholder:text-neutral-500"
                    placeholder="Tesla Inc."
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your company name.</FormDescription>
                <FormMessage className="text-red-900" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="crn"
            render={({ field }) => (
              <FormItem className="w-[50%]">
                <FormLabel>CRN</FormLabel>
                <FormControl>
                  <Input
                    className="border border-neutral-800 placeholder:text-neutral-500"
                    placeholder="122 333 444"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your company registration number.
                </FormDescription>
                <FormMessage className="text-red-900" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant={"outline"}
            className="border-neutral-900 px-20 py-6 text-lg font-bold hover:bg-neutral-400"
          >
            Finish
          </Button>
        </form>
      </FormProvider>
    </section>
  );
}

export default Step3;
