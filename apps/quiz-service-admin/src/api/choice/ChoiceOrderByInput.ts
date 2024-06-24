import { SortOrder } from "../../util/SortOrder";

export type ChoiceOrderByInput = {
  choiceText?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isCorrect?: SortOrder;
  questionId?: SortOrder;
  updatedAt?: SortOrder;
};
