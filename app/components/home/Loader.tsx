import { Loader2Icon } from "lucide-react";

export const Loader = () => {
  return (
    <div>
      <p className="flex flex-1 items-center justify-center">
        <Loader2Icon className="animate-spin" />
      </p>
    </div>
  );
};
