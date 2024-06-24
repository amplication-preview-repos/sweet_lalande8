import { Question } from "../question/Question";

export type Choice = {
  choiceText: string | null;
  createdAt: Date;
  id: string;
  isCorrect: boolean | null;
  question?: Question | null;
  updatedAt: Date;
};
