import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  questionText?: SortOrder;
  questionType?: SortOrder;
  updatedAt?: SortOrder;
};
