import { SortOrder } from "../../util/SortOrder";

export type ResponseOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isCorrect?: SortOrder;
  quizId?: SortOrder;
  studentId?: SortOrder;
  submittedAnswer?: SortOrder;
  updatedAt?: SortOrder;
};
