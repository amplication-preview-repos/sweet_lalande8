import { SortOrder } from "../../util/SortOrder";

export type QuizOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  published?: SortOrder;
  timeLimit?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
