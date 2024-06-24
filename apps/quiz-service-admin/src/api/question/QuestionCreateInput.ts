import { ChoiceCreateNestedManyWithoutQuestionsInput } from "./ChoiceCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  choices?: ChoiceCreateNestedManyWithoutQuestionsInput;
  questionText?: string | null;
  questionType?: "Option1" | null;
};
