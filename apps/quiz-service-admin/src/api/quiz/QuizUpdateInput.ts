import { ResponseUpdateManyWithoutQuizzesInput } from "./ResponseUpdateManyWithoutQuizzesInput";

export type QuizUpdateInput = {
  description?: string | null;
  published?: boolean | null;
  responses?: ResponseUpdateManyWithoutQuizzesInput;
  timeLimit?: number | null;
  title?: string | null;
};
