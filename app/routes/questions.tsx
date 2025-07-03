import { CircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { QuestionForm, QuestionFormData } from "~/components/questions/QForm";
import { QuestionsList } from "~/components/questions/QList";
import { supabase } from "~/lib/supabase";

export default function QuestionsPage() {
  const [data, setData] = useState<QuestionFormData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("questions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase fetch error:", error.message);
      } else {
        setData(data || []);
      }

      setLoading(false);
    };

    fetchQuestions();
  }, []);

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

      <QuestionsList data={data} loading={loading} />

      <QuestionForm />
    </main>
  );
}
