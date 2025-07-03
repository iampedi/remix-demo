import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { CircleIcon } from "lucide-react";

export type QuestionFormData = {
  name: string;
  email: string;
  title: string;
  question: string;
};
export const QuestionForm = () => {
  const form = useForm<QuestionFormData>({
    defaultValues: {
      name: "",
      email: "",
      title: "",
      question: "",
    },
  });

  const onSubmit = async (values: QuestionFormData) => {
    console.log("Submitted:", values);
    // await fetch('/api/submit-question', { method: 'POST', body: JSON.stringify(values) })
    form.reset(); // Clear form after submit
  };

  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-1.5">
        <div className="flex flex-col-reverse gap-10 md:flex-row">
          <div className="flex justify-center md:w-1/2">
            <img
              className="w-[360px]"
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
                        <Input placeholder="John Doe" {...field} />
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
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                        />
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
                        <Input placeholder="What is..." {...field} />
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
                        <Textarea
                          placeholder="Write your question here..."
                          {...field}
                        />
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
