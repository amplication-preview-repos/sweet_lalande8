import { ResponseCreateNestedManyWithoutQuizzesInput } from "./ResponseCreateNestedManyWithoutQuizzesInput";

export type QuizCreateInput = {
  description?: string | null;
  published?: boolean | null;
  responses?: ResponseCreateNestedManyWithoutQuizzesInput;
  timeLimit?: number | null;
  title?: string | null;
};
