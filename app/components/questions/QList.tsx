import { Loader } from "../home/Loader";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { QuestionFormData } from "./QForm";

export const QuestionsList = ({
  data,
  loading,
}: {
  data: QuestionFormData[];
  loading: boolean;
}) => {
  return (
    <section className="pb-12 pt-6">
      <div className="container mx-auto max-w-6xl px-4 md:px-1.5">
        {loading ? (
          <Loader />
        ) : data.length > 0 ? (
          <div className="flex flex-col gap-4">
            {data.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200/75 p-5 shadow-none md:px-8 md:py-6"
              >
                <CardHeader className="mb-3 p-0">
                  <CardTitle className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div className="text-base">
                      <p className="font-normal text-gray-700">{item.name}</p>
                      <p className="text-sm font-light text-gray-400">
                        {item.email}
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p>{item.question}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            There are no questions to display.
          </p>
        )}
      </div>
    </section>
  );
};
