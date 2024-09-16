"use client"

import { Input } from "@/components/admin/UI/Input"
import { Button } from "@/components/admin/UI/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/admin/UI/form"
import { linkSchema } from "@/lib/validation-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { TLink } from "."

interface ILink {
    prvUrl: string;
    handleLink: (link: TLink) => void;
}

export function LinkForm({handleLink,prvUrl}: ILink) {
    // 1. Define your form.
    const form = useForm<z.infer<typeof linkSchema>>({
      resolver: zodResolver(linkSchema),
      defaultValues: {
        url: "",
      },
    })
  
    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof linkSchema>) => handleLink({ url: values.url, _black: true});

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Add</Button>
          </form>
        </Form>
      )
  }
  
