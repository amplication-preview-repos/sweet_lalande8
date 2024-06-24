import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ChoiceCreateInput = {
  choiceText?: string | null;
  isCorrect?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
};
