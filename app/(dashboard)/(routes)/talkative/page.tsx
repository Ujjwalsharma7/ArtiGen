"use client";

import Heading from "@/components/Heading";
import { formSchema } from "./constants";
import { Form } from "@/components/ui/form";

import * as z from "zod";
import { MessageCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Talkative = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div>
      <Heading
        title="Talk-A-Tive"
        description="Talk to the smartest AI"
        icon={MessageCircleIcon}
        iconColor="text-green-600"
        bgColor="bg-green-600/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}></form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Talkative;
