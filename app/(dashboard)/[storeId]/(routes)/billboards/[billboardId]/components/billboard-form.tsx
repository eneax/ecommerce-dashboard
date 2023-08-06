"use client";

import * as React from "react";
import * as z from "zod";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Billboard } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/heading";
import { AlertModal } from "@/components/modals/alert-modal";

interface BillboardFormProps {
  initialData: Billboard | null;
}

const billboardFormSchema = z.object({
  label: z.string().min(1),
  imageUrl: z.string().min(1),
});

type BillboardFormValues = z.infer<typeof billboardFormSchema>;

export const BillboardForm: React.FC<BillboardFormProps> = ({
  initialData,
}) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const title = initialData ? "Edit billboard" : "Create billboard";
  const description = initialData
    ? "Edit your billboard"
    : "Create a billboard";
  const toastMessage = initialData
    ? "Billboard updated successfully."
    : "Billboard created successfully.";
  const action = initialData ? "Save" : "Create";

  const form = useForm<BillboardFormValues>({
    resolver: zodResolver(billboardFormSchema),
    defaultValues: initialData || {
      label: "",
      imageUrl: "",
    },
  });

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {}}
        loading={loading}
      />

      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="mr-2 w-4 h-4" />
          </Button>
        )}
      </div>

      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => console.log("submit"))}
          className="w-full space-y-8"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Label</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={loading}
                      placeholder="Billboard label"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button disabled={loading} type="submit">
            {action}
          </Button>
        </form>
      </Form>

      <Separator />
    </>
  );
};
