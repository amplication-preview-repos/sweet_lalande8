import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ChoiceUpdateInput = {
  choiceText?: string | null;
  isCorrect?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
};
