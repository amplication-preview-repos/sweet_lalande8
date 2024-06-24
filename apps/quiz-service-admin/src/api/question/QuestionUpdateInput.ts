import { ChoiceUpdateManyWithoutQuestionsInput } from "./ChoiceUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  choices?: ChoiceUpdateManyWithoutQuestionsInput;
  questionText?: string | null;
  questionType?: "Option1" | null;
};
