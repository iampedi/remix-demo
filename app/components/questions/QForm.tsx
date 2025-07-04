import { zodResolver } from "@hookform/resolvers/zod";
import { CircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { supabase } from "~/lib/supabase";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

export const questionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  title: z.string().min(1, "Title is required"),
  question: z.string().min(1, "Question is required"),
});

export type QuestionFormData = z.infer<typeof questionSchema>;

export const QuestionForm = ({
  onNewQuestion,
}: {
  onNewQuestion: (q: QuestionFormData) => void;
}) => {
  const form = useForm<QuestionFormData>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      question: "",
    },
  });

  const onSubmit = async (values: QuestionFormData) => {
    const { error } = await supabase.from("questions").insert([values]);

    if (error) {
      console.error("Supabase Error:", error.message);
      toast.error(error.message);
      return;
    }

    toast.success("Question submitted successfully!");
    onNewQuestion(values);
    form.reset();
  };

  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-1.5">
        <div className="flex flex-col-reverse gap-10 md:flex-row">
          <div className="flex items-center justify-center md:w-1/2">
            <img
              className="w-[400px]"
              src="/images/questions-page-01.webp"
              alt="a nurse is pointing to her right side with her fingers"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="flex items-center gap-3 pb-5 uppercase">
              <CircleIcon size={16} strokeWidth={5} className="text-primary" />
              <span className="text-xl font-semibold">Ask Your Questions</span>
            </h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2 md:w-9/12"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Question Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Question</FormLabel>
                      <FormControl>
                        <Textarea rows={6} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <Button type="submit" className="mx-auto w-full md:w-1/2">
                    Submit Question
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
