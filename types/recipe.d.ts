type Recipe = {
  name: String;
  author: String;
  method: "Pour Over" | null;
  ratio: Ratio;
  link: String | null;
  steps: Step[];
};

type Step = {
  time: Number;
  action: String;
};
