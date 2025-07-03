import { CircleIcon } from "lucide-react";
import { QuestionForm } from "~/components/questions/QForm";
import { QuestionsList } from "~/components/questions/QList";

type Question = {
  name: string;
  email: string;
  title: string;
  question: string;
};

const data: Question[] = [
  {
    name: "John Doe",
    email: "H5eXo@example.com",
    title: "Question 1",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "John Doe",
    email: "H5eXo@example.com",
    title: "Question 2",
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function QuestionsPage() {
  return (
    <main className="pt-6">
      <div className="container mx-auto max-w-6xl px-4 md:px-1.5">
        <h1 className="flex items-center gap-3 pb-1 uppercase">
          <CircleIcon size={12} strokeWidth={5} className="text-primary" />{" "}
          <span className="">Frequently Asked Questions</span>
        </h1>

        <p className="text-3xl font-semibold leading-none md:text-4xl">
          Our experts will answer your concerns.
        </p>
      </div>

      <QuestionsList data={data} />

      <QuestionForm />
    </main>
  );
}
