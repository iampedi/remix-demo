import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { QuestionFormData } from "./QForm";

export const QuestionsList = ({ data }: { data: QuestionFormData[] }) => {
  return (
    <section className="py-6">
      <div className="container mx-auto max-w-6xl px-4 md:px-1.5">
        {data.length > 0 ? (
          <div className="flex flex-col gap-4">
            {data.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>
                    <div>
                      <p>{item.name}</p>
                      <p>{item.email}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h2>{item.title}</h2>
                  <p>{item.question}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-3xl font-semibold leading-none md:text-4xl">
            Our experts will answer your concerns.
          </p>
        )}
      </div>
    </section>
  );
};
