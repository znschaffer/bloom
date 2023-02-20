type Recipe = {
  name: string;
  author: string;
  method: "Pour Over" | null;
  ratio: Ratio;
  link: string | null;
  steps: Step[];
};

type Step = {
  time: number;
  action: string;
};
